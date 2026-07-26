import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div id="page-not-found" className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-6 py-12">
      <div className="space-y-3">
        <span className="text-xs font-mono font-semibold tracking-wider text-[#0F766E] uppercase">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          Page Not Found
        </h1>
        <p className="text-base text-[#475569] dark:text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
          The requested path does not exist or has been relocated within the application structure.
        </p>
      </div>

      <Link
        id="back-home-button"
        to="/"
        className="btn-primary"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
