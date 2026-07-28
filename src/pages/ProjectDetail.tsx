import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id === 'linex') {
    return (
      <div className="py-6 sm:py-12 min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#FFFFFF] rounded-2xl border border-black/10 p-6 sm:p-10 shadow-xs space-y-8"
        >
          {/* Back button */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#055C5E] text-[#055C5E] font-medium text-xs font-mono hover:bg-[#055C5E] hover:text-[#FFFFFF] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Back to Portfolio</span>
            </Link>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#055C5E] text-[#F2B64E] text-xs font-mono font-semibold tracking-wide">
              <Sparkles className="w-3 h-3" />
              <span>IN DEVELOPMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2525] tracking-tight">
              LineX
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#055C5E]">
              Smart Queue Management Platform
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            This project is currently under active development.
          </p>

          <div className="space-y-3 bg-[#EFEFEF] p-5 rounded-xl border border-black/5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#055C5E] font-bold">
              Features include:
            </h3>
            <ul className="space-y-2 text-sm text-[#1E2525]">
              <li className="flex items-center gap-2">
                <span className="text-[#F2B64E] font-bold">•</span>
                <span>Virtual token booking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F2B64E] font-bold">•</span>
                <span>Real-time queue updates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F2B64E] font-bold">•</span>
                <span>Appointment management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F2B64E] font-bold">•</span>
                <span>Firebase authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F2B64E] font-bold">•</span>
                <span>Responsive interface</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-black/10 text-sm text-[#4B5563]">
            <p className="font-medium text-[#1E2525]">
              The live version will be available soon.
            </p>
            <p className="text-xs text-[#6B7280]">
              Thank you for visiting.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-12 min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-xl bg-[#FFFFFF] rounded-2xl border border-black/10 p-6 sm:p-10 shadow-xs space-y-6 text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EFEFEF] text-[#055C5E] mx-auto">
          <Clock className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1E2525]">
            Demo Coming Soon
          </h1>
          <p className="text-sm text-[#4B5563]">
            The live interactive preview for this project is currently being prepared and will be launched shortly.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#055C5E] text-[#055C5E] font-medium text-xs font-mono hover:bg-[#055C5E] hover:text-[#FFFFFF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Portfolio</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
