import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ChatBot from './ChatBot';
import PatientDetails from './PatientDetails';

const HealthCareAppointment = () => {
  const [showChatModal, setShowChatModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [patientData, setPatientData] = useState({});

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      input.min = today;
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      dob: formData.get('dob'),
      insurance: formData.get('insurance'),
      reason: formData.get('reason'),
      medications: formData.get('medications'),
      allergies: formData.get('allergies')
    };
    setPatientData(data);
    setCurrentPage('patient-details');
  };

  const handleNavClick = (page) => {
    if (page === 'home') {
      setCurrentPage('home');
    } else {
      setCurrentPage('patient-details');
    }
  };

  if (currentPage === 'patient-details') {
    return <PatientDetails patientData={patientData} />;
  }

  return (
    <div className="healthcare-app">
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h1 className="logo-title">HealthCare Plus</h1>
                <p className="logo-subtitle">Professional Medical Services</p>
              </div>
            </div>

            <nav className="navigation">
              <a href="#" className="nav-link" onClick={() => handleNavClick('home')}>Home</a>
              <a href="#" className="nav-link" onClick={() => handleNavClick('services')}>Services</a>
              <a href="#" className="nav-link" onClick={() => handleNavClick('specialists')}>Specialists</a>
              <a href="#" className="nav-link" onClick={() => handleNavClick('about')}>About</a>
              <a href="#" className="nav-link" onClick={() => handleNavClick('contact')}>Contact</a>
            </nav>

            <div className="auth-buttons">
              <Link to="/admin/login" className="login-btn">Login</Link>
              <Link to="/admin/signup" className="signup-btn">Sign Up</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="page-title">
          <h2 className="title">Schedule Your Appointment</h2>
          <p className="subtitle">Book a consultation with our qualified specialists. Please provide your details and preferred appointment time.</p>
        </div>

        <div className="form-container">
          <div className="form-card">
            <form onSubmit={handleFormSubmit}>
              <div className="form-section">
                <h3 className="section-title">Personal Information</h3>
                <div className="form-grid">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input type="text" name="firstName" required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Last Name *</label>
                    <input type="text" name="lastName" required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">DOB *</label>
                    <input type="date" name="dob" required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Insurance</label>
                    <select name="insurance" className="form-input">
                      <option value="">Select Provider</option>
                      <option value="blue-cross">Blue Cross</option>
                      <option value="aetna">Aetna</option>
                      <option value="cigna">Cigna</option>
                      <option value="united">United</option>
                      <option value="kaiser">Kaiser</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Medical Information</h3>
                <div className="form-fields">
                  <div>
                    <label className="form-label">Reason for Visit *</label>
                    <textarea name="reason" required rows="3" className="form-textarea"></textarea>
                  </div>
                  <div>
                    <label className="form-label">Current Medications</label>
                    <textarea name="medications" rows="2" className="form-textarea"></textarea>
                  </div>
                  <div>
                    <label className="form-label">Allergies</label>
                    <input type="text" name="allergies" className="form-input" />
                  </div>
                </div>
              </div>

              <div className="form-footer">
                <div className="terms-section">
                  <input type="checkbox" required className="checkbox" />
                  <label className="terms-label">
                    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                  </label>
                </div>
                <div className="button-group">
                  <button type="submit" className="submit-btn">Schedule Appointment</button>
                  <button type="button" className="draft-btn">Save as Draft</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">HealthCare Plus</h3>
              <p className="footer-text">Professional healthcare services you can trust.</p>
            </div>
            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Dermatology</a></li>
                <li><a href="#">Neurology</a></li>
                <li><a href="#">Orthopedics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Patient Portal</a></li>
                <li><a href="#">Emergency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@healthcareplus.com</li>
                <li>123 Medical Center Dr</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 HealthCare Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <button className="chat-button-fixed" onClick={() => setShowChatModal(true)}>💬</button>

      {/* Chat Modal */}
      {showChatModal && (
        <div className="modal-overlay" onClick={() => setShowChatModal(false)}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Chat Support</h3>
              <button className="modal-close" onClick={() => setShowChatModal(false)}>
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ChatBot patientData={patientData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCareAppointment;
