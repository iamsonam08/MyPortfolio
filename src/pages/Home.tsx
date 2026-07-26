import { Hero } from '../components/Hero';
import { TrustAchievements } from '../components/TrustAchievements';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { TechStack } from '../components/TechStack';
import { About } from '../components/About';
import { HomeCTA } from '../components/HomeCTA';

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

      {/* Final Call to Action Section */}
      <HomeCTA />
    </div>
  );
};

export default Home;
