import React from 'react';
import { About as AboutComponent } from '../components/About';

export const About: React.FC = () => {
  return (
    <div id="page-about" className="py-2 sm:py-4">
      <AboutComponent />
    </div>
  );
};

export default About;
