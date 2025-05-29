import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const MobileBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    issueDetail: ''
  });

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 🔁 Date & Time auto-update
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // 🧹 Clear form inputs
      setFormData({
        name: '',
        phone: '',
        model: '',
        issueDetail: ''
      });

      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 text-white"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-1">Book Mobile Repair</h2>
          <p className="text-sm text-white/70">
            {currentDateTime.toLocaleDateString()} – {currentDateTime.toLocaleTimeString()}
          </p>
        </div>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-green-200 text-green-900 px-4 py-3 rounded-lg mb-4 flex items-center gap-2"
            >
              <CheckCircleIcon className="w-6 h-6" />
              Booking confirmed!
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]"
              required
            />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]"
              required
            />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <input
              type="text"
              name="model"
              placeholder="Phone Model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]"
              required
            />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <textarea
              name="issueDetail"
              placeholder="Issue Details"
              value={formData.issueDetail}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]"
              required
            />
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-md border-2 border-[#1AA3DD] hover:bg-[#1AA3DD] transition text-white font-bold"
          >
            {isSubmitting ? 'Submitting...' : 'Book My Repair'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default MobileBookingForm;
