import React, { useState, useRef, useEffect } from 'react';
import './ai-assistant.css';
import { BsX } from 'react-icons/bs';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

/* ─────────────────────────────────────────────
   Knowledge Base — all info about Sakiththiyan
   ───────────────────────────────────────────── */
const knowledgeBase = [
  {
    keywords: ['hello', 'hi', 'hey', 'howdy', 'good morning', 'good evening', 'good afternoon', 'sup', 'yo'],
    response: "Hey there! 👋 I'm Sakiththiyan's AI assistant. I can tell you about his skills, projects, work experience, education, or how to get in touch. What would you like to know?",
    followUp: ['Tell me about his skills', 'Show me his projects', 'How can I contact him?']
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technolog', 'tool', 'language', 'framework', 'proficient', 'know', 'can he', 'what does he use'],
    response: "🛠️ Sakiththiyan's technical arsenal includes:\n\n• **AI/ML:** Python, TensorFlow, PyTorch, scikit-learn, XGBoost\n• **Frontend:** React.js, JavaScript, HTML/CSS\n• **Backend:** Node.js, Express, FastAPI, Java, Spring Boot\n• **Database:** MongoDB, MySQL\n• **DevOps:** Docker, Azure, Git\n• **Other:** n8n, LangChain, OpenAI APIs",
    followUp: ['Tell me about his AI projects', 'What about his work experience?']
  },
  {
    keywords: ['project', 'portfolio', 'built', 'created', 'developed', 'application', 'app'],
    response: "🚀 Here are Sakiththiyan's key projects:\n\n1. **AI-Powered Data Anonymization Platform** — Multi-agent pipeline with Next.js, FastAPI, XGBoost, SHAP & OpenAI\n2. **SkillNest** — Social portfolio & career platform (React, Spring Boot, MongoDB, WebSocket)\n3. **Stroke Prediction ML** — Machine learning model for stroke risk assessment using Flask\n4. **Photography Studio Website** — Full-stack booking platform (MERN Stack)\n5. **This Portfolio** — Built with React.js\n\nYou can check them out in the Projects section below! ⬇️",
    followUp: ['Tell me about the Data Anonymization project', 'What skills does he have?']
  },
  {
    keywords: ['experience', 'work', 'job', 'intern', 'career', 'employ', 'company', 'professional journey', 'techorin'],
    response: "💼 Work Experience:\n\n**AI & Data Science Intern** — Techorin Solution Pvt Ltd (Jun–Dec 2025)\n• Built RAG-powered AI systems (Kamro AI) for document Q&A\n• Designed HR automation pipelines with n8n\n• Developed Payment Schedule module for CPD Property Management System\n\n**Freelance Web Developer** (Jun 2023–Present)\n• Custom portfolios & websites for local businesses using MERN stack",
    followUp: ['What are his skills?', 'Show me his projects']
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'whatsapp', 'phone', 'message', 'talk'],
    response: "📬 You can reach Sakiththiyan through:\n\n• **Email:** thankavelusakiththiyan@gmail.com\n• **WhatsApp:** +94 770167675\n• **LinkedIn:** linkedin.com/in/sakiththiyan06\n• **GitHub:** github.com/Saki06\n\nOr just scroll down to the Contact section and fill out the form! ⬇️",
    followUp: ['Tell me about his projects', 'What are his skills?']
  },
  {
    keywords: ['education', 'university', 'degree', 'study', 'student', 'sliit', 'college', 'academic'],
    response: "🎓 Sakiththiyan is an undergraduate at **SLIIT** (Sri Lanka Institute of Information Technology), specializing in **Data Science**. His focus areas are Artificial Intelligence and Full Stack Development.",
    followUp: ['What skills has he learned?', 'How can I contact him?']
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'deep learning', 'ml', 'model', 'neural', 'llm', 'generative', 'rag', 'langchain'],
    response: "🤖 Sakiththiyan's AI expertise includes:\n\n• **Frameworks:** TensorFlow, PyTorch, scikit-learn, XGBoost\n• **Specialties:** RAG systems, LLM applications, SHAP explainability\n• **Projects:** Multi-agent re-identification pipelines, stroke prediction models, Kamro AI (RAG-powered Q&A)\n• **Currently exploring:** Generative AI & Large Language Models\n\nHe has deployed 5+ ML models in production!",
    followUp: ['Show me his AI projects', 'What about his work experience?']
  },
  {
    keywords: ['who', 'about', 'tell me about', 'introduce', 'yourself', 'sakiththiyan', 'saki'],
    response: "👨‍💻 Sakiththiyan Thankavelu is an AI Engineer & Full Stack Developer based in Sri Lanka. He's a Data Science undergraduate at SLIIT with 2+ years of experience. He specializes in building intelligent systems using Python-based AI frameworks and the MERN stack, bridging the gap between complex algorithms and user-friendly interfaces.",
    followUp: ['What are his skills?', 'Show me his projects', 'How can I hire him?']
  },
  {
    keywords: ['resume', 'cv', 'download'],
    response: "📄 You can download Sakiththiyan's CV by clicking the **\"Download CV\"** button at the top of the page in the header section! ⬆️",
    followUp: ['Tell me about his experience', 'How can I contact him?']
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'nice', 'cool'],
    response: "You're welcome! 😊 Feel free to ask anything else about Sakiththiyan, or scroll through his portfolio to learn more. Have a great day!",
    followUp: ['Tell me more about his projects', 'How can I contact him?']
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'quit', 'exit'],
    response: "Goodbye! 👋 Thanks for visiting Sakiththiyan's portfolio. Feel free to come back anytime. Don't forget to check out the Contact section if you'd like to connect!",
    followUp: []
  },
  {
    keywords: ['linkedin', 'social', 'github', 'online'],
    response: "🔗 Find Sakiththiyan online:\n\n• **LinkedIn:** linkedin.com/in/sakiththiyan06\n• **GitHub:** github.com/Saki06\n\nBoth links are also available in the header and footer of this page!",
    followUp: ['How else can I contact him?', 'Show me his projects']
  },
  {
    keywords: ['data anonymi', 'privacy', 'reidentification', 're-identification', 'anonymiz'],
    response: "🔒 The **AI-Powered Data Anonymization & Privacy Risk Platform** is Sakiththiyan's research project featuring:\n\n• Expert system for anonymization recommendations\n• Optimization algorithms for privacy-utility balance\n• Synthetic data generation\n• 7-agent re-identification risk assessment pipeline\n• Built with Next.js, FastAPI, scikit-learn, XGBoost, SHAP & OpenAI\n\nThis was his major thesis project at SLIIT!",
    followUp: ['What other projects has he done?', 'What are his AI skills?']
  }
];

/* ─────────────────────────────────────────────
   Response Engine — finds the best match
   ───────────────────────────────────────────── */
function getResponse(input) {
  const lower = input.toLowerCase().trim();

  // Score each knowledge entry
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length; // longer keyword matches = more specific = higher score
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return {
      text: bestMatch.response,
      suggestions: bestMatch.followUp || []
    };
  }

  // Fallback
  return {
    text: "I'm not sure about that one! 🤔 But I can help you with:\n\n• Sakiththiyan's **skills & technologies**\n• His **projects & portfolio**\n• **Work experience & education**\n• **Contact information**\n\nTry asking about any of these topics!",
    suggestions: ['What are his skills?', 'Show me his projects', 'How can I contact him?']
  };
}

/* ─────────────────────────────────────────────
   Text Formatter — converts markdown to HTML
   ───────────────────────────────────────────── */
function formatMessage(text) {
  return text
    // Bold: **text** → <strong>text</strong>
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Numbered list: "1. text" → styled line
    .replace(/^(\d+)\.\s+(.+)$/gm, '<div class="msg-list-item"><span class="msg-num">$1.</span> $2</div>')
    // Bullet: "• text" → styled line
    .replace(/^[•·]\s+(.+)$/gm, '<div class="msg-list-item"><span class="msg-bullet">›</span> $1</div>')
    // Line breaks
    .replace(/\n/g, '<br/>');
}

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */
const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! 👋 I'm Sakiththiyan's AI Assistant. Ask me about his skills, projects, experience, or contact info!",
      sender: 'bot',
      suggestions: ['What are his skills?', 'Show me his projects', 'How can I contact him?']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const processMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const { text: botText, suggestions } = getResponse(text);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: botText,
        sender: 'bot',
        suggestions
      }]);
    }, delay);
  };

  const handleSend = (e) => {
    e.preventDefault();
    processMessage(input);
  };

  const handleSuggestion = (suggestion) => {
    processMessage(suggestion);
  };

  return (
    <div className={`ai-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="ai-toggle-btn" onClick={() => setIsOpen(true)} aria-label="Open AI Assistant">
          <FaRobot />
          <span className="ai-toggle-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window glass">
          <div className="ai-header">
            <div className="ai-title">
              <div className="ai-status-dot" />
              <FaRobot />
              <div className="ai-title-text">
                <span>AI Assistant</span>
                <small>Online • Ask me anything</small>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)} aria-label="Close AI Assistant">
              <BsX />
            </button>
          </div>
          
          <div className="ai-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message__text" dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                {msg.sender === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="message__suggestions">
                    {msg.suggestions.map((s, i) => (
                      <button key={i} className="suggestion-btn" onClick={() => handleSuggestion(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="ai-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask about skills, projects, experience..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !input.trim()} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
