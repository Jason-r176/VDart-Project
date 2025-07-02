import React, { useState } from 'react';
import './index.css';

const ChatBot = ({ patientData }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your healthcare assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = { id: Date.now(), text: inputMessage, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Bot response
      setTimeout(() => {
        const botResponse = { 
          id: Date.now() + 1, 
          text: "Thank you for your message. A healthcare professional will assist you shortly.", 
          sender: 'bot' 
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="chat-content">
      {/* Medical Information */}
      {patientData.reason && (
        <div className="patient-info">
          <h4>Medical Information</h4>
          <p><strong>Reason for Visit:</strong> {patientData.reason}</p>
          {patientData.medications && <p><strong>Current Medications:</strong> {patientData.medications}</p>}
          {patientData.allergies && <p><strong>Allergies:</strong> {patientData.allergies}</p>}
          <p><strong>Insurance:</strong> {patientData.insurance || 'Not specified'}</p>
        </div>
      )}

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="modal-input"
        />
        <button type="submit" className="modal-submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;