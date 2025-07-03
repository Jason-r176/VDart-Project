import React, { useState } from 'react';
import './index.css';
import ChatBot from './ChatBot';

const PatientDetails = ({ patientData }) => {
  const [showChatModal, setShowChatModal] = useState(false);

  return (
    <div className="healthcare-app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h1 className="logo-title">HealthCare Plus</h1>
                <p className="logo-subtitle">Patient Portal</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="navigation">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Services</a>
              <a href="#" className="nav-link">Specialists</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Contact</a>
            </nav>

            {/* Auth Buttons */}
            <div className="auth-buttons">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Page Title */}
        <div className="page-title">
          <h2 className="title">Patient Details</h2>
          <p className="subtitle">Your appointment information and medical details.</p>
        </div>

        {/* Medical Information */}
        <div className="form-container">
          <div className="form-card">
            <div className="form-section">
              <h3 className="section-title">Medical Information</h3>
              <div className="patient-details">
                <p><strong>Reason for Visit:</strong> {patientData.reason}</p>
                {patientData.medications && <p><strong>Current Medications:</strong> {patientData.medications}</p>}
                {patientData.allergies && <p><strong>Allergies:</strong> {patientData.allergies}</p>}
                <p><strong>Insurance:</strong> {patientData.insurance || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">HealthCare Plus</h3>
              <p className="footer-text">Providing quality healthcare services with professional medical specialists.</p>
            </div>
            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Cardiology</a></li>
                <li><a href="#" className="footer-link">Dermatology</a></li>
                <li><a href="#" className="footer-link">Neurology</a></li>
                <li><a href="#" className="footer-link">Orthopedics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Insurance</a></li>
                <li><a href="#" className="footer-link">Patient Portal</a></li>
                <li><a href="#" className="footer-link">Emergency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@healthcareplus.com</li>
                <li>Address: 123 Medical Center Dr</li>
                <li>Emergency: 911</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Chat Button */}
      <button 
        className="chat-button-fixed"
        onClick={() => setShowChatModal(true)}
      >
        💬
      </button>

      {/* Chat Modal */}
      {showChatModal && (
        <div className="modal-overlay" onClick={() => setShowChatModal(false)}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Healthcare Chat Support</h3>
              <button 
                className="modal-close"
                onClick={() => setShowChatModal(false)}
              >
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

export default PatientDetails;