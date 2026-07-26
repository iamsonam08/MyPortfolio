import { Hero } from '../components/Hero';
import { TrustAchievements } from '../components/TrustAchievements';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { TechStack } from '../components/TechStack';
import { About } from '../components/About';

export const Home = () => {
  return (
    <div id="page-home" className="space-y-12 sm:space-y-16">
      {/* Recruiter-focused Hero Section */}
      <Hero />

      {/* Recruiter-focused Trust & Achievements Section */}
      <TrustAchievements />

      {/* Recruiter-focused Featured Projects Showcase */}
      <FeaturedProjects />

      {/* Engineering Dashboard Tech Stack */}
      <TechStack />

      {/* Recruiter-focused About Me Section */}
      <About />
    </div>
  );
};

export default Home;
