import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedAdmin = JSON.parse(localStorage.getItem('adminCredentials'));

    if (
      storedAdmin &&
      storedAdmin.adminId === adminId &&
      storedAdmin.username === username &&
      storedAdmin.password === password
    ) {
      alert('Admin Login Successful!');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Admin Login</h3>
        </div>
        <form onSubmit={handleLogin}>
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
            <label className="modal-label">Password</label>
            <input
              type="password"
              className="modal-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="modal-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
