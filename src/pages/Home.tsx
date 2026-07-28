import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { About } from '../components/About';
import { HomeCTA } from '../components/HomeCTA';

export const Home = () => {
  return (
    <div id="page-home" className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects Showcase */}
      <FeaturedProjects />

      {/* About Me Section */}
      <About />

      {/* Final Call to Action */}
      <HomeCTA />
    </div>
  );
};

export default Home;
