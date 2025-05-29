import { motion } from 'framer-motion';

const BookingForm = ({ formData, handleChange, handleSubmit, isSubmitting, currentDateTime }) => {
  return (
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

      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <p className="text-sm text-white/70">
          <strong>Booking Time:</strong> {currentDateTime.toLocaleString()}
        </p>
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
  );
};

export default BookingForm;
