import { useState, useRef } from "react";
import whatsappIcon from "@/assets/whatsapp.png";

const WHATSAPP_NUMBER = "2348154356486";
const DEFAULT_MESSAGE = "Hi EventFlow, I'm interested in your event marketing services. How do we get started?";

const EMOJIS = ["😊", "👋", "🎉", "🙏", "✅", "🔥", "💯", "😄", "👍", "🎯"];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const finalMessage = message.trim()
      ? `${DEFAULT_MESSAGE}\n\n${message.trim()}`
      : DEFAULT_MESSAGE;
    const encoded = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handleEmoji = (emoji: string) => {
    setMessage((prev) => prev + emoji);
    setShowEmojis(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsOpen(false);
            setShowEmojis(false);
          }}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Chat Popup */}
        {isOpen && (
          <div className="w-[320px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.25)] bg-white">
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">EventFlow</p>
                <p className="text-white/80 text-xs">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Chat Bubble */}
            <div className="bg-[#ECE5DD] px-4 py-5">
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-[#111] text-sm leading-relaxed">
                  👋 Hi there! Welcome to <strong>EventFlow</strong>. How can we help you grow your event?
                </p>
                <p className="text-[#999] text-[10px] mt-1 text-right">Just now</p>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#F0F0F0] px-3 py-3 relative">
              {/* Emoji Picker */}
              {showEmojis && (
                <div className="absolute bottom-16 left-3 right-3 bg-white rounded-xl shadow-lg p-3 grid grid-cols-5 gap-2 z-10">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleEmoji(emoji)}
                      className="text-xl hover:scale-125 transition-transform"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-end gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                {/* Emoji Button */}
                <button
                  onClick={() => setShowEmojis((prev) => !prev)}
                  className="text-[#999] hover:text-[#25D366] transition-colors text-lg flex-shrink-0 pb-0.5"
                >
                  😊
                </button>

                {/* Text Input */}
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-[#111] placeholder:text-[#999] outline-none resize-none max-h-24 leading-relaxed py-1"
                />

                {/* Send Button */}
                <button
                  onClick={handleSend}
                  className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 hover:bg-[#20c55e] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4 ml-0.5"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowEmojis(false);
          }}
          aria-label="Chat With Us on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
