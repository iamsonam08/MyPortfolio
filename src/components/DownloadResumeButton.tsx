import React, { useState } from 'react';
import { Download, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DownloadResumeButtonProps {
  className?: string;
  showIcon?: boolean;
  id?: string;
}

export const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({
  className = 'btn-secondary',
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
    <div className="relative inline-flex items-center">
      <button
        id={id}
        type="button"
        onClick={handleDownload}
        title="Resume will be available soon."
        className={className}
      >
        {showIcon && <Download className="w-4 h-4 text-current" />}
        <span>Download Resume</span>
      </button>

      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 -top-10 z-50 whitespace-nowrap bg-[#055C5E] text-[#FFFFFF] text-xs font-mono font-medium px-2.5 py-1 rounded border border-[#F2B64E]/30 flex items-center gap-1.5 pointer-events-none shadow-md"
          >
            <Info className="w-3.5 h-3.5 text-[#F2B64E] shrink-0" />
            <span>Resume will be available soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadResumeButton;
