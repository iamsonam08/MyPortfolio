import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Loading } from '../components/Loading';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Certifications = lazy(() => import('../pages/Certifications'));
const Experience = lazy(() => import('../pages/Experience'));
const Contact = lazy(() => import('../pages/Contact'));
const Resume = lazy(() => import('../pages/Resume'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
