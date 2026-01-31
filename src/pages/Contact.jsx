import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CONTACT_INFO, CEO_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      
      // Submit to Netlify Forms
      const formData = new FormData(e.target);
      
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });
        
        if (response.ok) {
          // Success - clear form and show message
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // If Netlify Forms fails, show alternative message
        console.log('Form data ready for submission:', Object.fromEntries(formData));
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-ocean">
        {/* Page Title */}
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Get in touch
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Have a question or want to collaborate? We&apos;d love to hear from you. Fill out the form below or reach us directly.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 border border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Send us a message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg animate-pulse">
                    <p className="text-green-300 font-semibold flex items-center gap-2 text-lg">
                      <span className="text-2xl">✓</span> Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form 
                  name="contact-form" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <input type="hidden" name="bot-field" />
                  {/* Name Field */}
                   <div>
                     <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                       Your Name
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       placeholder="John Doe"
                       className={`w-full px-4 py-3 rounded-lg border-2 bg-white/10 text-white placeholder-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                         errors.name
                           ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                           : 'border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400'
                       }`}
                     />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                   <div>
                     <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                       Email Address
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       placeholder="your.email@example.com"
                       className={`w-full px-4 py-3 rounded-lg border-2 bg-white/10 text-white placeholder-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                         errors.email
                           ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                           : 'border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400'
                       }`}
                     />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                   <div>
                     <label htmlFor="subject" className="block text-sm font-semibold text-white/90 mb-2">
                       Subject
                     </label>
                     <input
                       type="text"
                       id="subject"
                       name="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       placeholder="e.g., Partnership inquiry, Volunteering opportunity"
                       className={`w-full px-4 py-3 rounded-lg border-2 bg-white/10 text-white placeholder-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                         errors.subject
                           ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                           : 'border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400'
                       }`}
                     />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 font-medium">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                   <div>
                     <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                       Message
                     </label>
                     <textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       placeholder="Tell us more about your inquiry..."
                       rows="6"
                       className={`w-full px-4 py-3 rounded-lg border-2 bg-white/10 text-white placeholder-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none ${
                         errors.message
                           ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                           : 'border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400'
                       }`}
                     />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                   <button
                     type="submit"
                     className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-900 font-black text-xl py-4 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer uppercase tracking-wider"
                     style={{
                       letterSpacing: '0.05em',
                     }}
                   >
                     ✓ SEND MESSAGE
                   </button>
                  </form>

                  <p className="text-white/70 text-sm mt-6 text-center">
                   We typically respond within 24-48 hours during business days.
                  </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col justify-between">
                {/* Contact Details Cards */}
                <div className="space-y-6">
                  {/* Location Card */}
                  <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 md:p-8">
                    <div className="flex gap-4 items-start">
                      <span className="text-4xl">📍</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                        <p className="text-white/90">{CONTACT_INFO.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 md:p-8">
                    <div className="flex gap-4 items-start">
                      <span className="text-4xl">📧</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 underline-offset-4 hover:underline"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 md:p-8">
                    <div className="flex gap-4 items-start">
                      <span className="text-4xl">📞</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                        <a
                          href={`tel:${CONTACT_INFO.phone}`}
                          className="text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 underline-offset-4 hover:underline"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CEO Direct Contact Card */}
                  <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 md:p-8">
                    <div className="flex gap-4 items-start">
                      <span className="text-4xl">👔</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{CEO_INFO.name}</h3>
                        <p className="text-white/80 text-sm mb-3">{CEO_INFO.title}</p>
                        <div className="space-y-2">
                          <div>
                            <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Main</p>
                            <a
                              href={`tel:${CEO_INFO.phone}`}
                              className="text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 underline-offset-4 hover:underline block"
                            >
                              {CEO_INFO.phone}
                            </a>
                          </div>
                          <div>
                            <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Alternative</p>
                            <a
                              href={`tel:${CEO_INFO.alternatePhone}`}
                              className="text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 underline-offset-4 hover:underline block"
                            >
                              {CEO_INFO.alternatePhone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                {/* Quick Info Box */}
                <div className="bg-white/15 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 md:p-8 mt-6">
                  <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
                  <ul className="text-white/90 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span>✓</span> Response within 24-48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Multiple contact options available
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Direct communication with our team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer CTA */}
        <section className="py-16 md:py-24 px-6" style={{ background: 'linear-gradient(135deg, #B8A0FF 0%, #7F5FD8 100%)' }} id="volunteer">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-white/80">Get Involved</p>
              <h2 className="section-title text-white text-3xl md:text-4xl mb-6">Bring your skills to the movement</h2>
              <p className="section-text text-lg text-white/90 max-w-2xl mx-auto">
                From research support to mentorship and storytelling, volunteers fuel the growth of our
                community-led programs. Tell us how you&apos;d like to contribute and we&apos;ll co-create a role that
                fits your passion.
              </p>
            </div>

            {/* Volunteer Opportunities Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">Research & Documentation</h3>
                <p className="text-white/85 text-sm">Help us document impact, analyze data, and support evidence-building</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">Mentorship & Training</h3>
                <p className="text-white/85 text-sm">Share your expertise through mentoring youth and facilitating workshops</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-xl font-bold text-white mb-2">Communications & Stories</h3>
                <p className="text-white/85 text-sm">Tell powerful stories through writing, design, photography, or social media</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="mailto:info@youthintegrated.org?subject=Volunteer%20with%20YoNISeRD"
                className="bg-white text-brand-burgundy font-semibold py-3 px-8 rounded-lg hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                style={{ color: '#8B1538' }}
              >
                Become a Volunteer
                <span>→</span>
              </a>
              <p className="text-white/80 text-sm mt-6">
                No experience necessary. We'll match you with opportunities that align with your skills and passion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;