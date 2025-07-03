import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthCareAppointment from './HealthCareAppointment';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import AdminDashboard from './AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthCareAppointment />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
