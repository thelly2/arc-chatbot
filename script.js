* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, Arial, sans-serif;
}

body {
  background: #070b16;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.bg-glow {
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  z-index: 0;
}

.glow-1 {
  background: #2563eb;
  top: 40px;
  left: 20px;
}

.glow-2 {
  background: #14b8a6;
  bottom: 40px;
  right: 20px;
}

.app {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.35);
}

.header h1 {
  font-size: 1.8rem;
  margin-bottom: 4px;
}

.header p {
  color: #cbd5e1;
  font-size: 0.95rem;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #dbeafe;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 12px #22c55e;
}

.chat-shell {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 18px;
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.top-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.quick-btn {
  background: rgba(37, 99, 235, 0.14);
  border: 1px solid rgba(59, 130, 246, 0.35);
  color: #dbeafe;
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: 0.9rem;
}

.quick-btn:hover {
  transform: translateY(-2px);
  background: rgba(37, 99, 235, 0.25);
}

.chat-box {
  height: 500px;
  overflow-y: auto;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
}

.message {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.message.user {
  justify-content: flex-end;
}

.message.user .avatar {
  display: none;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.bot-avatar {
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: white;
}

.bubble {
  max-width: 78%;
  padding: 14px 16px;
  border-radius: 18px;
  line-height: 1.6;
  font-size: 0.95rem;
  word-wrap: break-word;
}

.message.user .bubble {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  border-bottom-right-radius: 6px;
}

.message.bot .bubble {
  background: rgba(30, 41, 59, 0.95);
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom-left-radius: 6px;
}

.bubble p {
  margin-bottom: 8px;
}

.bubble p:last-child {
  margin-bottom: 0;
}

.bubble ul,
.bubble ol {
  margin: 8px 0 0 18px;
}

.bubble li {
  margin-bottom: 6px;
}

.bubble a {
  color: #7dd3fc;
  text-decoration: none;
  font-weight: 600;
}

.bubble a:hover {
  text-decoration: underline;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.typing-bubble {
  background: rgba(30, 41, 59, 0.95);
  padding: 14px 16px;
  border-radius: 18px;
  display: inline-flex;
  gap: 6px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.typing-bubble span {
  width: 8px;
  height: 8px;
  background: #cbd5e1;
  border-radius: 50%;
  animation: bounce 1.2s infinite ease-in-out;
}

.typing-bubble span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-bubble span:nth-child(3) {
  animation-delay: 0.3s;
}

.hidden {
  display: none;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0.7);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.input-area {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.input-area input {
  flex: 1;
  padding: 15px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(2, 6, 23, 0.7);
  color: white;
  outline: none;
  font-size: 1rem;
}

.input-area input::placeholder {
  color: #94a3b8;
}

.input-area button {
  padding: 15px 18px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.input-area button:hover {
  transform: translateY(-2px);
}

@media (max-width: 700px) {
  .chat-box {
    height: 460px;
  }

  .bubble {
    max-width: 90%;
  }

  .header h1 {
    font-size: 1.4rem;
  }

  .header p {
    font-size: 0.85rem;
  }

  .quick-btn {
    font-size: 0.82rem;
    padding: 9px 12px;
  }

  .input-area {
    flex-direction: column;
  }

  .input-area button {
    width: 100%;
  }
}
