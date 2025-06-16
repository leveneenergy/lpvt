import { useState } from 'react';

const whatsappLink = 'https://wa.me/2347074913776?text=Hello';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex items-center gap-2">
        {/*Text Button */}
        <button
          onClick={toggleChat}
          className="bg-white text-black px-3 py-1 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all duration-300"
          aria-label="Open WhatsApp Chat">
          Need Help? Chat with us
        </button>
        {/* WhatsApp Icon Button */}
        <button
          onClick={toggleChat}
          className="bg-[#25D366] hover:bg-green-600 text-white rounded-full p-2 shadow-lg flex items-center justify-center transition-all duration-300"
          aria-label="Open WhatsApp Chat">
            
          <svg className="w-10 h-10" fill="#fff" viewBox="0 0 32 32">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.534.747 4.89 2.037 6.89L4 29l7.293-2.037C13.11 28.253 14.53 29 16 29c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 24c-1.25 0-2.47-.23-3.61-.68l-.26-.1-4.34 1.21 1.21-4.34-.1-.26C6.23 17.47 6 16.25 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.71.9-.87 1.08-.16.18-.32.19-.6.07-.28-.14-1.18-.44-2.25-1.57-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.41-.5.13-.17.18-.29.28-.48.09-.19.05-.36-.03-.5-.08-.14-.62-1.5-.85-2.09-.23-.6-.47-.52-.64-.53l-.54-.01c-.17 0-.48.07-.73.33-.25.26-.97 1.01-.97 2.44 0 1.43 1.01 2.82 1.16 3.01.15.19 2.02 3.15 4.9 4.42.6.25 1.07.4 1.44.51.58.18 1.11.16 1.53.1.47-.07 1.46-.62 1.67-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.17-.49-.29z"/>
          </svg>
        </button>
        
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl mt-2 flex flex-col">
          {/* Chat Header */}
          <div className="bg-[#25D366] text-white p-4 rounded-t-lg flex items-center">
            <svg className="w-6 h-6 mr-2" fill="#fff" viewBox="0 0 32 32">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.534.747 4.89 2.037 6.89L4 29l7.293-2.037C13.11 28.253 14.53 29 16 29c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 24c-1.25 0-2.47-.23-3.61-.68l-.26-.1-4.34 1.21 1.21-4.34-.1-.26C6.23 17.47 6 16.25 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.71.9-.87 1.08-.16.18-.32.19-.6.07-.28-.14-1.18-.44-2.25-1.57-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.41-.5.13-.17.18-.29.28-.48.09-.19.05-.36-.03-.5-.08-.14-.62-1.5-.85-2.09-.23-.6-.47-.52-.64-.53l-.54-.01c-.17 0-.48.07-.73.33-.25.26-.97 1.01-.97 2.44 0 1.43 1.01 2.82 1.16 3.01.15.19 2.02 3.15 4.9 4.42.6.25 1.07.4 1.44.51.58.18 1.11.16 1.53.1.47-.07 1.46-.62 1.67-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.17-.49-.29z"/>
            </svg>
            <span className="font-semibold">WhatsApp Support</span>
            <button onClick={toggleChat} className="ml-auto text-white" aria-label="Close Chat">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-green-100 p-2 rounded-lg mb-2 text-sm text-center">
              Hello! How can we help you? <br />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 px-4 py-2 bg-[#25D366] text-white rounded-full font-semibold hover:bg-green-600 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="#fff" viewBox="0 0 32 32">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.534.747 4.89 2.037 6.89L4 29l7.293-2.037C13.11 28.253 14.53 29 16 29c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 24c-1.25 0-2.47-.23-3.61-.68l-.26-.1-4.34 1.21 1.21-4.34-.1-.26C6.23 17.47 6 16.25 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.71.9-.87 1.08-.16.18-.32.19-.6.07-.28-.14-1.18-.44-2.25-1.57-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.41-.5.13-.17.18-.29.28-.48.09-.19.05-.36-.03-.5-.08-.14-.62-1.5-.85-2.09-.23-.6-.47-.52-.64-.53l-.54-.01c-.17 0-.48.07-.73.33-.25.26-.97 1.01-.97 2.44 0 1.43 1.01 2.82 1.16 3.01.15.19 2.02 3.15 4.9 4.42.6.25 1.07.4 1.44.51.58.18 1.11.16 1.53.1.47-.07 1.46-.62 1.67-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.17-.49-.29z"/>
                </svg>
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;