import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import News from './pages/News';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <div className="app-bg min-h-screen">
        <Router basename="/ynis-rd-website">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;