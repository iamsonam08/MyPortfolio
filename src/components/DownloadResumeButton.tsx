import React from 'react';
import { Download } from 'lucide-react';

interface DownloadResumeButtonProps {
  className?: string;
  showIcon?: boolean;
  id?: string;
}

const RESUME_URL =
  'https://drive.google.com/file/d/1gvqeHw720hVsAMvZtNGTuZZvN3sBRKy7/view?usp=sharing';

export const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = ({
  className = 'btn-secondary',
  showIcon = true,
  id,
}) => {
  return (
    <a
      id={id}
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Download Resume (opens in a new tab)"
    >
      {showIcon && <Download className="w-4 h-4 text-current shrink-0" />}
      <span>Download Resume</span>
    </a>
  );
};

export default DownloadResumeButton;

