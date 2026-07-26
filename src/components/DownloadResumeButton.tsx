import React, { useState } from 'react';
import { Download, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DownloadResumeButtonProps {
  className?: string;
  showIcon?: boolean;
  id?: string;
}

export const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({
  className = 'btn-secondary py-2.5 px-5 text-sm font-semibold rounded-xl',
  showIcon = true,
  id,
}) => {
  const [showNotice, setShowNotice] = useState(false);

  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          window.open(resumeUrl, '_blank', 'noopener,noreferrer');
        } else {
          setShowNotice(true);
          setTimeout(() => setShowNotice(false), 3200);
        }
      })
      .catch(() => {
        setShowNotice(true);
        setTimeout(() => setShowNotice(false), 3200);
      });
  };

  return (
    <div className="relative inline-flex items-center w-full sm:w-auto justify-center">
      <button
        id={id}
        type="button"
        onClick={handleDownload}
        title="Resume will be available soon."
        className={`${className} group cursor-pointer relative inline-flex items-center justify-center gap-2 transition-all w-full sm:w-auto`}
      >
        {showIcon && (
          <Download className="w-4 h-4 text-[#475569] dark:text-[#D1D5DB] group-hover:text-[#0F172A] dark:group-hover:text-white transition-colors" />
        )}
        <span>Download Resume</span>
      </button>

      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 -top-11 z-50 whitespace-nowrap bg-[#0F172A] dark:bg-[#F8FAFC] text-white dark:text-[#0F172A] text-xs font-mono font-medium px-3 py-1.5 rounded-lg shadow-lg border border-[#0F766E]/40 flex items-center gap-1.5 pointer-events-none"
          >
            <Info className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
            <span>Resume will be available soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadResumeButton;
