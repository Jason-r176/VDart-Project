import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AdminSignup = () => {
  const [adminId, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const adminData = {
      adminId,
      username,
      email,
      password
    };

    localStorage.setItem('adminCredentials', JSON.stringify(adminData));
    alert("Signup successful!");
    navigate('/admin/login');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Admin Sign Up</h3>
        </div>
        <form onSubmit={handleSignup}>
          <div className="modal-field">
            <label className="modal-label">Admin ID</label>
            <input
              type="text"
              className="modal-input"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </div>
          <div className="modal-field">
            <label className="modal-label">Username</label>
            <input
              type="text"
              className="modal-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="modal-field">
            <label className="modal-label">Email</label>
            <input
              type="email"
              className="modal-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="modal-field">
            <label className="modal-label">Password</label>
            <input
              type="password"
              className="modal-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="modal-field">
            <label className="modal-label">Confirm Password</label>
            <input
              type="password"
              className="modal-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="modal-submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
