import React, { useState } from 'react';
import './index.css'; // Add styles here or in a new Dashboard.css if you prefer

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const adminData = JSON.parse(localStorage.getItem('adminCredentials')) || {};

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <p>Welcome, Admin! View dashboard summary here.</p>;
      case 'patients':
        return <p>Patient records will be listed here.</p>;
      case 'chats':
        return <p>Live chat sessions will appear here.</p>;
      case 'info':
        return (
          <div>
            <h3>Admin Profile</h3>
            <p><strong>Admin ID:</strong> {adminData.adminId}</p>
            <p><strong>Username:</strong> {adminData.username}</p>
            <p><strong>Email:</strong> {adminData.email}</p>
          </div>
        );
      default:
        return <p>Select a tab to view content.</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => setActiveTab('overview')}>Overview</li>
          <li onClick={() => setActiveTab('patients')}>Patients</li>
          <li onClick={() => setActiveTab('chats')}>Live Chats</li>
          <li onClick={() => setActiveTab('info')}>Admin Info</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
