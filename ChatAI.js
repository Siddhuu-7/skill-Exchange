import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";
import Icon from '../assests/bot.gif';

const genAI = new GoogleGenerativeAI("AIzaSyAHp12-hQ2Stxf0ZliwvywmvNcQt9c30og");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function ChatbotApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const result = await model.generateContent(input);
      const aiResponse = result.response.text();

      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error generating AI response:", error);
      setMessages([...newMessages, { sender: "ai", text: "Sorry, something went wrong." }]);
    }
  };

  const shouldShowWelcomeMessage = messages.length === 0;

  return (
    <div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="card shadow-lg position-fixed bottom-0 end-0 me-4"
          style={{
            width: "90vw",
            maxWidth: "28rem",
            height: "80vh",
            maxHeight: "36rem",
            marginBottom: "80px",
            borderRadius: "1rem",
          }}
        >
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">SkillEConnect</h5>
            <button className="btn-close" onClick={() => setIsOpen(false)}></button>
          </div>
          <div className="card-body overflow-auto d-flex flex-column" style={{ height: "calc(100% - 6rem)" }}>
            {shouldShowWelcomeMessage ? (
              <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ flex: 1 }}>
                <h4 className="text-muted">Hi! How can I assist you today?</h4>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${message.sender === "ai" ? "bg-light text-primary align-self-start" : "bg-secondary text-white align-self-end"}`}
                  style={{ maxWidth: "75%" }}
                >
                  {message.text}
                </div>
              ))
            )}
          </div>
          <div className="card-footer d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
          </div>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center position-fixed bottom-0 end-0 me-4 mb-4"
        style={{ width: "56px", height: "56px", padding: 0 }}
        onClick={handleToggleChatbot}
      >
        <img
          src={Icon}
          alt="ChatBot"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
        />
      </motion.button>
    </div>
  );
}
