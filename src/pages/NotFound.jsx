import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-ocean">
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-white-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white-primary">Page Not Found</h2>
          <p className="text-xl md:text-2xl mb-10 text-white-secondary leading-relaxed">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-accent inline-block text-lg px-8 py-3"
            aria-label="Return to home page"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

