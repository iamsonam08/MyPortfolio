import { motion } from 'motion/react';

export const Loading = () => {
  return (
    <div id="loading-spinner" className="flex items-center justify-center min-h-[50vh] w-full py-16">
      <div className="flex flex-col items-center gap-3.5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
          className="w-7 h-7 border-2 border-[#E2E8F0] dark:border-[#1E293B] border-t-[#0F766E] dark:border-t-[#0F766E] rounded-full"
        />
        <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#475569] dark:text-[#CBD5E1]">
          Loading Module
        </span>
      </div>
    </div>
  );
};
