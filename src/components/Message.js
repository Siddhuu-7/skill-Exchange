import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { Camera, Phone, Video, Image, Send, MoreVertical } from 'lucide-react';

const ChatUI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Mark Hendry',
      content: 'Hi there! How can I assist you today?',
      timestamp: '10:00 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Me',
      content: 'I have a question about my delivery.',
      timestamp: '10:02 AM',
      isOwn: true
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const inputRef = useRef(null); 

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'Me',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [newMessage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="vh-100 d-flex flex-column" style={{ background: '#f8f9fa' }}>
      <div className="bg-white shadow-sm fixed-top w-100" style={{ zIndex: 10 }}>
        <div className="container-fluid py-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="position-relative">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.oRg5_S8cDQuMcs_nkK8ZwAAAAA&pid=Api&P=0&h=180"
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />
                <Badge
                  bg="success"
                  className="position-absolute bottom-0 end-0 border border-white rounded-circle"
                  style={{ width: '12px', height: '12px' }}
                />
              </div>
              <div className="ms-3">
                <h6 className="mb-0 fw-bold">Mark Hendry</h6>
                <small className="text-muted">Online</small>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Button variant="light" className="d-flex align-items-center">
                <Phone size={20} className="me-2" /> Call
              </Button>
              <Button variant="light" className="d-flex align-items-center">
                <Video size={20} className="me-2" /> Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow-1 overflow-auto px-3 py-4" >
        <div className="fluid-container px-3" style={{  paddingTop: '100px', paddingBottom: '60px' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`d-flex mb-4 ${message.isOwn ? 'justify-content-end' : 'justify-content-start'}`}
            >
              {!message.isOwn && (
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.oRg5_S8cDQuMcs_nkK8ZwAAAAA&pid=Api&P=0&h=180"
                  alt="User Avatar"
                  className="rounded-circle me-2 align-self-end"
                  style={{ width: '36px', height: '36px' }}
                />
              )}
              <div
                className={`p-3 ${message.isOwn ? 'bg-primary text-white' : 'bg-white'}`}
                style={{
                  borderRadius: '18px',
                  maxWidth: '75%',
                  position: 'relative',
                  borderBottomLeftRadius: !message.isOwn ? '4px' : '18px',
                  borderBottomRightRadius: message.isOwn ? '4px' : '18px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <p className="mb-1">{message.content}</p>
                <small className={`${message.isOwn ? 'text-light' : 'text-muted'}`}>{message.timestamp}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-top fixed-bottom w-100">
        <div className="container-fluid p-3">
          <Form onSubmit={handleSendMessage}>
            <InputGroup className="shadow-sm">
              <div className="position-relative" ref={menuRef}>
                <Button
                  variant="light"
                  className="border-end-0"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  <MoreVertical size={20} />
                </Button>
                {showMenu && (
                  <div
                    className="position-absolute bg-white shadow rounded"
                    style={{
                      bottom: '100%',
                      left: '0',
                      marginBottom: '8px',
                      zIndex: 10,
                      minWidth: '200px'
                    }}
                  >
                    <div className="p-2">
                      <Button variant="light" className="d-flex align-items-center w-100 mb-2">
                        <Camera size={20} className="me-2" /> Take Photo
                      </Button>
                      <Button variant="light" className="d-flex align-items-center w-100 mb-2">
                        <Image size={20} className="me-2" /> Send Image
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <Form.Control
                ref={inputRef}
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="border-start-0 border-end-0"
              />
              <Button variant="primary" type="submit">
                <Send size={20} />
              </Button>
            </InputGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
