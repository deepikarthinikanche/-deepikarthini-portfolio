import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#0a0a0f' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Outer ring */}
      <div className="relative flex items-center justify-center mb-8">
        <div
          className="w-24 h-24 rounded-full animate-spin-slow"
          style={{ border: '2px solid transparent', borderTopColor: '#6c63ff', borderRightColor: '#00d4ff' }}
        />
        <div
          className="absolute w-16 h-16 rounded-full"
          style={{ border: '2px solid transparent', borderBottomColor: '#ff6b9d', borderLeftColor: '#6c63ff', animation: 'spin-slow 12s linear infinite reverse' }}
        />
        <motion.div
          className="absolute text-2xl font-bold gradient-text"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          DK
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff, #ff6b9d)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
      <motion.p
        className="mt-4 text-sm tracking-widest uppercase"
        style={{ color: '#6c63ff' }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}
