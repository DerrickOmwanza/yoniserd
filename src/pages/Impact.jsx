import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Impact = () => {
  const [counts, setCounts] = useState({
    youth: 0,
    communities: 0,
    programs: 0,
    employment: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { label: 'Youth Reached', value: 10000, key: 'youth' },
    { label: 'Communities Served', value: 50, key: 'communities' },
    { label: 'Programs Running', value: 15, key: 'programs' },
    { label: 'Employment Success Rate', value: 75, key: 'employment' },
  ];

  const impactAreas = [
    {
      title: 'Youth Empowerment',
      description: 'Providing vocational training, mentorship, and leadership development to young people across 50 communities.',
      icon: '🚀',
      stats: '10,000+ youth trained',
    },
    {
      title: 'Economic Resilience',
      description: 'Enabling sustainable livelihoods through skills training, entrepreneurship support, and job placement.',
      icon: '💼',
      stats: '75% employment rate',
    },
    {
      title: 'Community Health',
      description: 'Youth-led health awareness campaigns on reproductive health, mental wellness, and disease prevention.',
      icon: '💚',
      stats: '2,500+ reached annually',
    },
    {
      title: 'Environmental Action',
      description: 'Climate-smart initiatives led by youth, including land restoration and sustainable agriculture.',
      icon: '🌍',
      stats: '50+ hectares restored',
    },
    {
      title: 'Research & Evidence',
      description: 'Building evidence through rigorous research to document impact and inform policy decisions.',
      icon: '📊',
      stats: '5+ publications',
    },
    {
      title: 'Gender Equality',
      description: 'Empowering young women as leaders in their communities and tackling gender-based violence.',
      icon: '👩‍⚖️',
      stats: '3,000+ girls reached',
    },
  ];

  const testimonials = [
    {
      quote: 'YoNISeRD gave me the skills and confidence to start my own business. Now I employ 5 other youth in my community.',
      author: 'Dennis',
      role: 'Carpentry Business Owner',
      icon: '🏗️',
    },
    {
      quote: 'The mentorship I received changed my perspective on leadership. I now lead a health club at my school.',
      author: 'Sarah',
      role: 'Youth Health Leader',
      icon: '👩‍⚕️',
    },
    {
      quote: 'Our partnership with YoNISeRD has amplified our environmental efforts. Together we restored 50 hectares of land.',
      author: 'Mr. Kipchoge',
      role: 'Community Partner',
      icon: '🌱',
    },
    {
      quote: 'The research conducted by YoNISeRD helped shape our youth development policy at the county level.',
      author: 'Dr. Kiplagat',
      role: 'Policy Maker',
      icon: '📋',
    },
  ];

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Animate counter from 0 to target value
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        youth: Math.floor(10000 * progress),
        communities: Math.floor(50 * progress),
        programs: Math.floor(15 * progress),
        employment: Math.floor(75 * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-contrast">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-brand-blue to-brand-pink py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              7 years of measurable change, youth-led innovation, and sustainable development across Kenya's communities.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section
          ref={sectionRef}
          className="py-16 md:py-24 px-6 bg-gradient-contrast"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Impact by the Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric) => (
                <div
                  key={metric.key}
                  className="text-center p-8 md:p-10 rounded-xl backdrop-blur-md bg-white/8 border border-white/15 hover:bg-white/15 hover:scale-105 transition-all shadow-xl"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {metric.key === 'youth' && `${counts.youth.toLocaleString()}+`}
                    {metric.key === 'communities' && `${counts.communities}+`}
                    {metric.key === 'programs' && counts.programs}
                    {metric.key === 'employment' && `${counts.employment}%`}
                  </div>
                  <p className="text-lg md:text-xl text-white/80 font-semibold">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16 md:py-24 px-6 bg-gradient-ocean">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Areas of Impact
            </h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-16">
              Our work spans multiple sectors, always putting youth and communities at the center of change.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/80 mb-4">{area.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-primary-blue font-semibold">{area.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Voices of Change
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{testimonial.icon}</span>
                    <div>
                      <p className="text-gray-900 font-bold">{testimonial.author}</p>
                      <p className="text-primary-blue text-sm font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Timeline */}
        <section className="py-16 md:py-24 px-6 bg-gradient-contrast">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Journey
            </h2>

            <div className="space-y-8">
              {[
                { year: '2018', milestone: 'Official Registration', description: 'YoNISeRD officially registered as an NGO on 30th April, 2018' },
                { year: '2019', milestone: 'First Programs Launched', description: 'Seed of Hope vocational training and Community Health initiatives begin' },
                { year: '2020', milestone: 'Community Expansion', description: 'Extended operations to 20 communities across Kenya during COVID-19 response' },
                { year: '2021', milestone: 'Research Hub Launched', description: 'Created dedicated space for youth-led research and evidence-building' },
                { year: '2023', milestone: 'Policy Influence', description: 'Our evidence shaped national youth development strategies' },
                { year: '2024', milestone: '10,000+ Youth Reached', description: 'Operating in 50 communities with 15 active programs and growing impact' },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-blue text-primary-dark font-bold text-xl flex items-center justify-center">
                      {item.year.slice(-2)}
                    </div>
                    {index < 5 && <div className="w-1 h-20 bg-white/20 mt-4"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.milestone}</h3>
                    <p className="text-white/80 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Showcase */}
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Real Impact, Real People
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
              See our work in action through the voices and faces of the communities we serve.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-xl group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={require('../assets/gallery1.jpg')}
                    alt="Youth Community Events"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Engagement</h3>
                  <p className="text-gray-600">Youth leaders organizing impactful community awareness campaigns.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={require('../assets/gallery2.jpg')}
                    alt="Mental Health Awareness"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Health Advocacy</h3>
                  <p className="text-gray-600">Young advocates promoting mental health and wellbeing in communities.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={require('../assets/gallery3.jpg')}
                    alt="National Mental Health Walk"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Large-Scale Campaigns</h3>
                  <p className="text-gray-600">Thousands of community members participating in health awareness walks.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={require('../assets/gallery4.jpg')}
                    alt="Community Health Campaigns"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Field Work</h3>
                  <p className="text-gray-600">Our team delivering health initiatives and support across Kisii region.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary-purple to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Part of the Change
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join us in creating lasting impact. Whether through volunteering, partnership, or support, your involvement matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-purple font-bold py-3 px-8 rounded-lg hover:bg-primary-light transition-all duration-200 hover:scale-105"
              >
                Partner with Us
                <span>→</span>
              </Link>
              <Link
                to="/contact#volunteer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-purple transition-all duration-200"
              >
                Volunteer
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Impact;
