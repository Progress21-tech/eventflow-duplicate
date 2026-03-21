import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CalendlyModalProps {
  open: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ open, onClose }: CalendlyModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative glass-card rounded-2xl p-8 md:p-12 max-w-lg w-full text-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white">
            <X size={20} />
          </button>
          <h3 className="font-display text-2xl text-white mb-4">Book a Strategy Call</h3>
          <p className="text-white/70 mb-6">
            This is where Calendly would be embedded. Connect your Calendly link to enable scheduling.
          </p>
          <div className="rounded-xl bg-white/5 border border-white/10 h-48 flex items-center justify-center mb-6">
            <span className="text-white/40 text-sm">Calendly embed placeholder</span>
          </div>
          <button onClick={onClose} className="bg-ef-red text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] glow-red">
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default CalendlyModal;
