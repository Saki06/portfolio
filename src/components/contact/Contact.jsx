import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = '94770167675';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  
  // Get form data helper
  const getFormData = () => {
    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const msg = form.message.value.trim();
    return { name, email, msg };
  };

  // Send via EmailJS
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    emailjs
      .sendForm(
        'service_j68baqv',
        'template_8pwsd0j',
        formRef.current,
        'j_InN41l6tjfsbDF5'
      )
      .then(
        (result) => {
          console.log('✅ Email sent successfully:', result.text);
          setMessage('✅ Message sent successfully! I\'ll reply soon.');
          setIsLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error('❌ Email sending failed:', error);
          setMessage('❌ Failed to send message. Please contact me directly via email/WhatsApp.');
          setIsLoading(false);
        }
      );
  };

  // Send via WhatsApp
  const handleWhatsAppSend = () => {
    const { name, email, msg } = getFormData();

    // Validate form fields
    if (!name || !email || !msg) {
      setMessage('⚠️ Please fill in all fields before sending.');
      return;
    }

    // Build the WhatsApp message
    const whatsappText = 
`✨ *NEW PORTFOLIO INQUIRY* ✨

Hi *Sakiththiyan* 👋

You've got a message from your portfolio website!

👤 *From:* ${name}

💬 *Message:*
${msg}

🚀 _Looking forward to connecting!_`;

    // Open WhatsApp with pre-filled message
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');

    setMessage('✅ Opening WhatsApp...');
    formRef.current.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option glass">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thankavelusakiththiyan@gmail.com</h5>
            <a href="mailto:thankavelusakiththiyan@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option glass">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+94 770167675</h5>
            <a href="https://wa.me/94770167675" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleEmailSubmit} className="glass">
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <div className="contact__form-buttons">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <MdOutlineEmail />
              {isLoading ? 'Sending...' : 'Send Email'}
            </button>
            <button type="button" className="btn contact__whatsapp-btn" onClick={handleWhatsAppSend} disabled={isLoading}>
              <FaWhatsapp />
              Send WhatsApp
            </button>
          </div>
          {message && <span className="contact-message">{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
