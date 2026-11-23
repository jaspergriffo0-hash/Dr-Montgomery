import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DATA_DIR = path.resolve(__dirname, '.data');
const APPOINTMENTS_FILE = path.resolve(DATA_DIR, 'appointments.json');
const ENQUIRIES_FILE = path.resolve(DATA_DIR, 'enquiries.json');

interface AppointmentRecord {
  reference: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  consultationMethod: string;
  reason: string;
  createdAt: string;
}

interface ContactEnquiryRecord {
  reference: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function appendJsonRecord<T>(filePath: string, record: T): void {
  ensureDataDir();
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(DATA_DIR + path.sep)) {
    throw new Error('Invalid storage path');
  }
  let existing: T[] = [];
  if (fs.existsSync(resolved)) {
    try {
      const raw = fs.readFileSync(resolved, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    } catch {
      existing = [];
    }
  }
  existing.push(record);
  fs.writeFileSync(resolved, JSON.stringify(existing, null, 2), 'utf8');
}

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length >= 7 && digits.length <= 16;
}

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true, service: 'orthopaedic-practice-api' });
  });

  app.post('/api/appointments', (req: Request, res: Response) => {
    const fullName = sanitizeText(req.body?.fullName, 120);
    const email = sanitizeText(req.body?.email, 160);
    const phone = sanitizeText(req.body?.phone, 40);
    const preferredDate = sanitizeText(req.body?.preferredDate, 30);
    const consultationMethod = sanitizeText(req.body?.consultationMethod, 60);
    const reason = sanitizeText(req.body?.reason, 500);

    const errors: Record<string, string> = {};

    if (fullName.length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!isValidEmail(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!isValidPhone(phone)) {
      errors.phone = 'Please provide a valid contact telephone number.';
    }
    if (!preferredDate || !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
      errors.preferredDate = 'Please select a preferred appointment date.';
    } else {
      const selected = new Date(`${preferredDate}T00:00:00Z`);
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      if (Number.isNaN(selected.getTime()) || selected < today) {
        errors.preferredDate = 'Please choose today or a future date.';
      }
    }

    const allowedMethods = [
      'In-Person Consultation',
      'Video Consultation',
      'Telephone Consultation',
    ];
    if (!allowedMethods.includes(consultationMethod)) {
      errors.consultationMethod = 'Please select a consultation method.';
    }
    if (reason.length < 5) {
      errors.reason = 'Please provide a brief general reason for your consultation.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({ ok: false, message: 'Please review the highlighted fields.', errors });
      return;
    }

    const reference = `PGM-${new Date().getFullYear()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const record: AppointmentRecord = {
      reference,
      fullName,
      email,
      phone,
      preferredDate,
      consultationMethod,
      reason,
      createdAt: new Date().toISOString(),
    };

    try {
      appendJsonRecord(APPOINTMENTS_FILE, record);
      res.status(201).json({
        ok: true,
        booking: {
          reference,
          fullName,
          preferredDate,
          consultationMethod,
        },
        message: 'Your appointment request has been received by the practice scheduling desk.',
      });
    } catch {
      res.status(500).json({
        ok: false,
        message: 'Unable to record your appointment request at this moment. Please telephone +44 7784 689878 directly.',
      });
    }
  });

  app.post('/api/contact', (req: Request, res: Response) => {
    const fullName = sanitizeText(req.body?.fullName, 120);
    const email = sanitizeText(req.body?.email, 160);
    const phone = sanitizeText(req.body?.phone, 40);
    const subject = sanitizeText(req.body?.subject, 140);
    const message = sanitizeText(req.body?.message, 1000);

    const errors: Record<string, string> = {};
    if (fullName.length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!isValidEmail(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (phone && !isValidPhone(phone)) {
      errors.phone = 'Please provide a valid telephone number or leave blank.';
    }
    if (subject.length < 3) {
      errors.subject = 'Please specify a subject for your enquiry.';
    }
    if (message.length < 10) {
      errors.message = 'Please enter a brief message (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({ ok: false, message: 'Please review the highlighted fields.', errors });
      return;
    }

    const reference = `ENQ-${new Date().getFullYear()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const record: ContactEnquiryRecord = {
      reference,
      fullName,
      email,
      phone,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      appendJsonRecord(ENQUIRIES_FILE, record);
      res.status(201).json({
        ok: true,
        enquiry: { reference, fullName, subject },
        message: 'Thank you for your enquiry. Our practice secretary will respond promptly.',
      });
    } catch {
      res.status(500).json({
        ok: false,
        message: 'Unable to send your message right now. Please contact +44 7784 689878 directly.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

startServer();
