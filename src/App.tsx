import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SpecializationsPage } from './pages/SpecializationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { PatientCarePage } from './pages/PatientCarePage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="specializations" element={<SpecializationsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="patient-care" element={<PatientCarePage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
