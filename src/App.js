import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Remove Router from import
import Main from './layouts/Main';
import './static/css/main.scss';

// Lazy loaded components
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Photography = lazy(() => import('./pages/Photography'));

const App = () => (
  <React.StrictMode>
    <HashRouter> {/* Use HashRouter instead of Router */}
      <Suspense fallback={<Main />}> {/* You probably want to keep Suspense for lazy loading */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

export default App;