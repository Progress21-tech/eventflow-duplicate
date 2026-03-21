import whatsappIcon from "@/pages/whatsapp.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.link/rlo27k"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat With Us on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
