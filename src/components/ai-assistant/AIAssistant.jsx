import React, { useState, useRef, useEffect } from 'react';
import './ai-assistant.css';
import { BsX } from 'react-icons/bs';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sakiththiyan's AI Assistant. Ask me about his skills, projects, or contact info!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Mock AI Response Logic
    setTimeout(() => {
      let botResponse = "I'm not sure about that. You can contact Sakiththiyan directly!";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
        botResponse = "Sakiththiyan is proficient in Python, React, Node.js, and AI technologies like TensorFlow and PyTorch.";
      } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
        botResponse = "He has worked on Stroke Prediction using ML, a Photography Studio website, and this Portfolio!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
        botResponse = "You can email him at thanavelusakiththiyan@gmail.com or use the contact form below.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello there! How can I assist you today?";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className={`ai-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="ai-toggle-btn" onClick={() => setIsOpen(true)}>
          <FaRobot />
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window glass">
          <div className="ai-header">
            <div className="ai-title">
              <FaRobot />
              <span>AI Assistant</span>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <BsX />
            </button>
          </div>
          
          <div className="ai-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="ai-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask something..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
