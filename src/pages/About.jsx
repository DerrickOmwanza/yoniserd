import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ORG_INFO, CORE_VALUES, CEO_INFO, MANAGING_DIRECTOR_INFO } from '../constants';
import ceo from '../assets/ceo.png';
import managingDirector from '../assets/Managing Director.jpg';
import fieldOfficer from '../assets/Field Officer.jpg';
import certificate from '../assets/gallery11.jpg';

const About = () => {
    const [activeSection, setActiveSection] = useState('mission');

    // Handle scroll tracking for navigation
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['mission', 'ceo', 'leadership', 'journey', 'awards', 'impact', 'values'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { label: 'Mission & Vision', id: 'mission' },
        { label: 'CEO', id: 'ceo' },
        { label: 'Leadership', id: 'leadership' },
        { label: 'Journey', id: 'journey' },
        { label: 'Awards', id: 'awards' },
        { label: 'Impact', id: 'impact' },
        { label: 'Values', id: 'values' }
    ];

    const impactStats = [
        { value: '7+', label: 'Years of Youth Impact' },
        { value: '50', label: 'Communities Served' },
        { value: '2000+', label: 'Youth Empowered' },
        { value: '75%', label: 'Graduate Employment Rate' }
    ];

    const journeyMilestones = [
        { year: 2018, title: 'Official Registration', description: 'YoNISeRD officially registered as an NGO on 30th April, 2018' },
        { year: 2019, title: 'First Program Launch', description: 'Seed of Hope vocational training program reaches 100+ youth' },
        { year: 2020, title: 'Community Expansion', description: 'Extended operations to 20 communities across Kenya' },
        { year: 2022, title: 'Research Hub Launch', description: 'Launched dedicated community research hub for evidence-building' },
        { year: 2023, title: 'Research Leadership', description: 'Recognized as leading youth research and development organization' },
        { year: 2024, title: '10,000+ Youth Reached', description: 'Operating in 50 communities with 15 active programs' }
    ];

    const testimonials = [
        {
            quote: 'YoNISeRD transformed my life through their programs and mentorship.',
            author: 'Youth Leader, Kisii',
            role: 'Program Graduate'
        },
        {
            quote: 'Their research-driven approach to youth development is exceptional.',
            author: 'Development Partner',
            role: 'International NGO'
        },
        {
            quote: 'The impact on our community has been remarkable and sustainable.',
            author: 'Community Leader',
            role: 'Local Government'
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Sticky Section Navigation */}
                <nav
                    aria-label="Page sections navigation"
                    className="sticky top-16 bg-white shadow-md z-40 hidden md:block"
                >
                    <div className="flex justify-center px-4 py-0">
                        <div className="flex gap-8 overflow-x-auto">
                            {sections.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`py-4 px-3 font-semibold text-sm uppercase tracking-wider transition-all border-b-3 whitespace-nowrap ${activeSection === section.id
                                        ? 'border-brand-blue text-brand-blue'
                                        : 'border-transparent text-gray-600 hover:text-brand-blue'
                                        }`}
                                    aria-current={activeSection === section.id ? 'page' : undefined}
                                >
                                    {section.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>



                {/* Mission & Vision Section - Compact Official Format */}
                <section
                    id="mission"
                    aria-label="Mission and Vision statements"
                    className="w-full"
                    style={{
                        backgroundColor: '#7BBBFF',
                        padding: '4rem 1rem'
                    }}
                >
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#050F2A' }}>
                            Mission & Vision
                        </h1>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div 
                                className="rounded-xl p-10 shadow-lg border border-gray-100"
                                style={{ backgroundColor: '#F2FDFF' }}
                            >
                                <h2 className="text-2xl font-bold mb-4" style={{ color: '#050F2A' }}>Our Mission</h2>
                                <p className="text-base leading-relaxed" style={{ color: '#050F2A' }}>
                                    {ORG_INFO.mission}
                                </p>
                            </div>

                            {/* Vision */}
                            <div 
                                className="rounded-xl p-10 shadow-lg border border-gray-100"
                                style={{ backgroundColor: '#F2FDFF' }}
                            >
                                <h2 className="text-2xl font-bold mb-4" style={{ color: '#050F2A' }}>Our Vision</h2>
                                <p className="text-base leading-relaxed" style={{ color: '#050F2A' }}>
                                    {ORG_INFO.vision}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Organization Details - Compact */}
                <section className="py-14 md:py-16" style={{ backgroundColor: '#B8A0FF' }}>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#050F2A' }}>Organization Details</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Organization Name</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Founded</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.founded}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Headquarters</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.headquarters}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Legal Status</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.legalStatus}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Registration Number</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.registrationNumber}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#050F2A' }}>Registration Date</p>
                                    <p className="text-base" style={{ color: '#050F2A' }}>{ORG_INFO.registrationDate}</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Download Section */}
                        <div className="text-center border-t pt-8" style={{ borderColor: '#050F2A' }}>
                            <p className="text-sm font-semibold mb-4" style={{ color: '#050F2A' }}>Download Certificate of Registration</p>
                            <a
                                href={certificate}
                                download="YoNISeRD-Certificate-of-Registration.jpg"
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: '#050F2A', color: '#7BBBFF' }}
                            >
                                <span>📥</span>
                                <span>Download Certificate</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CEO Message Section */}
                <section
                    className="section-padded"
                    aria-label="CEO leadership message"
                    id="ceo"
                    style={{ backgroundColor: '#F2FDFF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Leadership</p>
                            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#050F2A' }}>Message from the CEO</h2>
                        </div>

                        {/* Hero Quote Section */}
                        <div className="rounded-2xl p-10 mb-16 border max-w-3xl mx-auto" style={{ backgroundColor: '#7BBBFF', borderColor: '#050F2A' }}>
                            <blockquote className="text-center">
                                <p className="text-2xl md:text-3xl font-bold leading-tight mb-4" style={{ color: '#050F2A' }}>
                                    "Empowering youth through research-driven innovation and community-led change"
                                </p>
                                <footer className="font-semibold" style={{ color: '#050F2A' }}>— CEO, YoNISeRD</footer>
                            </blockquote>
                        </div>

                        {/* Two-Column Layout */}
                        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                            {/* CEO Portrait and Info */}
                            <div className="flex flex-col items-center justify-start">
                                <div className="relative inline-block mb-6">
                                    <div className="absolute inset-0 rounded-2xl opacity-40 blur-2xl" style={{ backgroundColor: '#7BBBFF' }}></div>
                                    <img
                                        src={ceo}
                                        alt="CEO of YoNISeRD"
                                        title="Chief Executive Officer"
                                        className="h-80 w-80 rounded-2xl object-cover shadow-xl relative z-10"
                                    />
                                </div>
                                <h4 className="text-2xl font-bold mb-1" style={{ color: '#050F2A' }}>{CEO_INFO.name}</h4>
                                <p className="font-semibold mb-2" style={{ color: '#050F2A' }}>{CEO_INFO.title}</p>
                                <p className="text-center text-sm" style={{ color: '#050F2A' }}>Leading sustainable youth development and community-led research initiatives</p>
                            </div>

                            {/* CEO Message Text */}
                            <div className="space-y-5">
                                <div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#050F2A' }}>Welcome to YoNISeRD</h3>
                                    <p className="text-base leading-relaxed" style={{ color: '#050F2A' }}>
                                        As CEO of {ORG_INFO.shortName}, I'm honored to welcome you to our community. We believe that <span className="font-semibold">youth empowerment</span> is the cornerstone of sustainable development.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#050F2A' }}>Our Core Commitment</h3>
                                    <ul className="space-y-3" style={{ color: '#050F2A' }}>
                                        <li className="flex gap-3">
                                            <span className="font-bold">🎯</span>
                                            <span>Connect and empower youth through <span className="font-semibold">research-backed programs</span> and practical services</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold">🌱</span>
                                            <span>Build <span className="font-semibold">resilient communities</span> through inclusive networks and knowledge sharing</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold">🤝</span>
                                            <span>Address critical needs: youth development, <span className="font-semibold">reproductive health</span>, environmental <span className="font-semibold">sustainability</span></span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#050F2A' }}>Together We Create Impact</h3>
                                    <p className="text-base leading-relaxed" style={{ color: '#050F2A' }}>
                                        Your partnership and support enable us to transform lives and create lasting, positive change across Kenya. Let's build a future where youth lead innovation and communities thrive.
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <Link
                                        to="/contact#volunteer"
                                        className="inline-block text-white font-bold py-3 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                                        style={{ backgroundColor: '#050F2A' }}
                                        aria-label="Get involved as a volunteer"
                                    >
                                        Get Involved
                                    </Link>
                                    <Link
                                        to="/programs#partnerships"
                                        className="inline-block border-2 font-bold py-3 px-6 rounded-lg hover:-translate-y-1 transition-all duration-300 text-center"
                                        style={{ borderColor: '#050F2A', color: '#050F2A' }}
                                        aria-label="Partner with us"
                                    >
                                        Partner With Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Team Section */}
                <section
                    className="section-padded"
                    id="leadership"
                    aria-label="Leadership team"
                    style={{ backgroundColor: '#7BBBFF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Our Team</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>Leadership Team</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#050F2A' }}>Dedicated professionals driving our mission forward</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                             {/* CEO Card with Photo */}
                             <div
                                 className="rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                                 style={{ backgroundColor: '#F2FDFF' }}
                             >
                                 <img
                                     src={ceo}
                                     alt="Chief Executive Officer"
                                     className="w-32 h-32 rounded-full object-cover mb-6 shadow-md border-4"
                                     style={{ borderColor: '#7BBBFF' }}
                                 />
                                 <h3 className="text-2xl font-bold mb-2" style={{ color: '#050F2A' }}>{CEO_INFO.name}</h3>
                                 <p className="text-lg font-semibold mb-2" style={{ color: '#050F2A' }}>CEO</p>
                                 <p className="text-lg leading-relaxed" style={{ color: '#050F2A' }}>Executive leadership and strategic vision for organizational growth and impact</p>
                             </div>

                             {/* Managing Director Card with Photo */}
                             <div
                                 className="rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                                 style={{ backgroundColor: '#F2FDFF' }}
                             >
                                 <img
                                     src={managingDirector}
                                     alt="Managing Director"
                                     className="w-32 h-32 rounded-full object-cover mb-6 shadow-md border-4"
                                     style={{ borderColor: '#7BBBFF' }}
                                 />
                                 <h3 className="text-2xl font-bold mb-2" style={{ color: '#050F2A' }}>{MANAGING_DIRECTOR_INFO.name}</h3>
                                 <p className="text-lg font-semibold mb-2" style={{ color: '#050F2A' }}>Managing Director</p>
                                 <p className="text-lg leading-relaxed" style={{ color: '#050F2A' }}>{MANAGING_DIRECTOR_INFO.description}</p>
                             </div>

                             {/* Programme Officer Card */}
                             <div
                                 className="rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                                 style={{ backgroundColor: '#F2FDFF' }}
                             >
                                 <div className="text-6xl mb-6">📋</div>
                                 <h3 className="text-2xl font-bold mb-4" style={{ color: '#050F2A' }}>Programme Officer</h3>
                                 <p className="text-lg leading-relaxed" style={{ color: '#050F2A' }}>Oversight of program design, implementation, and community partnerships</p>
                             </div>

                             {/* Field Officer Card with Photo */}
                             <div
                                 className="rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                                 style={{ backgroundColor: '#F2FDFF' }}
                             >
                                 <img
                                     src={fieldOfficer}
                                     alt="Field Officer"
                                     className="w-32 h-32 rounded-full object-cover mb-6 shadow-md border-4"
                                     style={{ borderColor: '#7BBBFF' }}
                                 />
                                 <h3 className="text-2xl font-bold mb-2" style={{ color: '#050F2A' }}>Odliah Temba</h3>
                                 <p className="text-lg font-semibold mb-2" style={{ color: '#050F2A' }}>Field Officer</p>
                                 <p className="text-lg leading-relaxed" style={{ color: '#050F2A' }}>Direct community engagement and ground-level program execution</p>
                             </div>
                         </div>
                    </div>
                </section>

                {/* Our Journey Section */}
                <section
                    className="section-padded"
                    id="journey"
                    aria-label="Our organizational journey"
                    style={{ backgroundColor: '#B8A0FF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Timeline</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>Our Journey</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#050F2A' }}>Key milestones in our commitment to youth empowerment</p>
                        </div>
                        <div className="space-y-12 max-w-3xl mx-auto">
                            {journeyMilestones.map((milestone, index) => (
                                <div key={index} className="flex gap-8 items-start">
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#050F2A' }}>
                                            {milestone.year}
                                        </div>
                                        {index !== journeyMilestones.length - 1 && (
                                            <div className="w-1 h-16 mt-4" style={{ backgroundColor: '#050F2A' }}></div>
                                        )}
                                    </div>
                                    <div className="pt-2 pb-8">
                                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#050F2A' }}>{milestone.title}</h3>
                                        <p className="text-lg leading-relaxed" style={{ color: '#050F2A' }}>{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Awards & Milestones Section */}
                <section
                    className="section-padded"
                    id="awards"
                    aria-label="Awards and recognition"
                    style={{ backgroundColor: '#7BBBFF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Recognition</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>Awards & Milestones</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#050F2A' }}>Notable achievements in our journey of impact</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    year: '2024',
                                    emoji: '🏅',
                                    title: 'Kisii Development Forum Recognition',
                                    description: 'Recognized for outstanding youth mentorship and research partnerships.'
                                },
                                {
                                    year: '2023',
                                    emoji: '🌍',
                                    title: 'East African Innovation Index',
                                    description: 'Featured for bridging climate action with vocational skills.'
                                },
                                {
                                    year: '2022',
                                    emoji: '🤝',
                                    title: 'Youth Networks Alliance Award',
                                    description: 'Awarded Best Community-Led Research Collaboration.'
                                }
                            ].map((award, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                                    style={{ backgroundColor: '#F2FDFF' }}
                                >
                                    {/* Year Badge Header */}
                                    <div className="px-8 py-6 relative overflow-hidden" style={{ backgroundColor: '#050F2A' }}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-300"></div>
                                        <p className="text-white font-bold text-sm uppercase tracking-widest relative z-10 opacity-90">Award Year</p>
                                        <p className="text-white font-black text-4xl mt-2 relative z-10">{award.year}</p>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex-1 p-8 flex flex-col">
                                        {/* Icon */}
                                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{award.emoji}</div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:scale-105 transition-colors duration-300" style={{ color: '#050F2A' }}>
                                            {award.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed flex-grow" style={{ color: '#050F2A' }}>
                                            {award.description}
                                        </p>

                                        {/* Bottom Accent Line */}
                                        <div className="mt-6 pt-6 border-t transition-colors duration-300" style={{ borderColor: '#050F2A' }}>
                                            <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#050F2A' }}>
                                                <span>Learn more</span>
                                                <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Statistics Section */}
                <section
                    className="py-16 md:py-20"
                    id="impact"
                    aria-label="Impact statistics"
                    style={{ backgroundColor: '#B8A0FF' }}
                >
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#050F2A' }}>Our Impact by Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {impactStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center"
                                    style={{ backgroundColor: '#F2FDFF' }}
                                >
                                    <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#050F2A' }}>{stat.value}</p>
                                    <p className="font-semibold text-sm leading-tight" style={{ color: '#050F2A' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section
                    className="section-padded"
                    aria-label="Testimonials and feedback"
                    style={{ backgroundColor: '#7BBBFF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Success Stories</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>What People Say</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#050F2A' }}>Testimonials from beneficiaries and partners</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl p-10 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
                                    style={{ backgroundColor: '#F2FDFF' }}
                                >
                                    <div className="mb-6 text-3xl">⭐⭐⭐⭐⭐</div>
                                    <blockquote className="text-lg leading-relaxed italic mb-6 flex-grow" style={{ color: '#050F2A' }}>
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="border-t pt-6" style={{ borderColor: '#050F2A' }}>
                                        <p className="font-bold text-lg" style={{ color: '#050F2A' }}>{testimonial.author}</p>
                                        <p className="font-semibold text-sm" style={{ color: '#050F2A' }}>{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section
                    className="section-padded"
                    id="values"
                    aria-label="Core organizational values"
                    style={{ backgroundColor: '#B8A0FF' }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="section-label font-bold uppercase tracking-wider mb-4" style={{ color: '#050F2A' }}>Foundation</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>Our Core Values</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#050F2A' }}>Principles that guide every decision and partnership</p>
                        </div>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {CORE_VALUES.map((value, index) => (
                                <li
                                    key={index}
                                    className="rounded-2xl p-8 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                                    style={{ backgroundColor: '#F2FDFF' }}
                                >
                                    <p className="font-semibold text-base text-center leading-relaxed" style={{ color: '#050F2A' }}>{value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section
                    className="px-4 py-20 md:py-28"
                    aria-label="Call to action"
                    style={{ backgroundColor: '#050F2A' }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Join Our Movement?</h2>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                            Discover how you can empower youth in Kenya and create lasting, positive change in communities across the nation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block text-white font-bold py-4 px-10 rounded-lg hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                                style={{ backgroundColor: '#7BBBFF', color: '#050F2A' }}
                                aria-label="Contact us to get involved"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                to="/programs"
                                className="inline-block border-2 text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                                style={{ borderColor: '#7BBBFF', color: '#7BBBFF' }}
                                aria-label="Explore our programs"
                            >
                                Explore Programs
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
