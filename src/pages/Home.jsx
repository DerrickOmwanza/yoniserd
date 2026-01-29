import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageSlideshow from '../components/ImageSlideshow';
import ImpactMetrics from '../components/ImpactMetrics';
import { ORG_INFO, CORE_VALUES } from '../constants';
import heroImage from '../assets/gallery4.jpg';
import bannerImage from '../assets/gallery10.jpg';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';

const Home = () => {
    const homeImages = [img1, img2, img3, img4, img5, img6];
    const homeDescriptions = [
        'Community outreach and youth empowerment initiatives',
        'Educational programs and workshops',
        'Health awareness campaigns',
        'Environmental conservation projects',
        'Gender equality and women empowerment',
        'Youth leadership development',
    ];

    const stats = [
        { label: 'Years of youth impact', value: '7+' },
        { label: 'Communities served', value: '50' },
        { label: 'Graduates employed', value: '75%' },
    ];

    const programHighlights = [
        {
            title: 'Seed of Hope',
            description: 'Vocational training and wellbeing support for teens and young adults.',
            link: '/programs',
        },
        {
            title: 'Community Health',
            description: 'Grassroots awareness campaigns led by youth advocates.',
            link: '/our-work',
        },
        {
            title: 'Green Futures',
            description: 'Climate-smart initiatives that build resilient livelihoods.',
            link: '/our-work',
        },
    ];

    const storyHighlights = [
        {
            title: 'Dennis opens his first carpentry studio',
            excerpt: 'Seed of Hope gave Dennis the tools and mentorship to launch a thriving workshop.',
            tag: 'Our Work',
            link: '/our-work',
        },
        {
            title: 'Girls leading community health clubs',
            excerpt: 'Teen leaders are driving conversations on wellbeing and rights in Kisii.',
            tag: 'Impact',
            link: '/#impact',
        },
        {
            title: 'Youth climate champions',
            excerpt: 'Environmental clubs are restoring green spaces while earning dignified income.',
            tag: 'News',
            link: '/#news',
        },
    ];

    return (
        <Layout>
            <div className="min-h-screen">
                {/* Full Width Banner Section */}
                <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <img
                        src={bannerImage}
                        alt="Youth leaders and community members"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Empowering Youth, Building Futures
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                                Join us in creating positive change through youth leadership and community engagement
                            </p>
                            <Link to="/contact" className="inline-block bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-3 px-8 rounded transition-colors">
                                Get Involved
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="brand-hero px-4">
                    <div className="brand-hero__content">
                        <p className="section-label text-white/80 uppercase tracking-wider">YoNISeRD • Kenya</p>
                        <p className="text-white/70 italic text-lg mb-4">{ORG_INFO.motto}</p>
                        <h1 className="mt-4">Bright futures powered by youth leadership</h1>
                        <p className="text-white/95 text-lg leading-relaxed mt-6">
                            {ORG_INFO.name} connects young people with networks, vocational skills, and research-backed
                            development programs so they can lead resilient, inclusive futures.
                        </p>
                        <div className="brand-hero__stats">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <span>{stat.value}</span>
                                    <small>{stat.label}</small>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link to="/programs" className="brand-cta">
                                Explore Programs
                            </Link>
                            <Link to="/impact" className="btn-alt">
                                View Impact
                            </Link>
                        </div>
                    </div>
                    <div className="brand-hero__card">
                        <img src={heroImage} alt="Smiling youth leaders" className="hero-image" />
                        <div className="mt-6">
                            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Get involved</p>
                            <h3 className="text-2xl font-bold text-white mt-2">Partner with youth innovators</h3>
                            <p className="text-white/90 mt-3">
                                Co-create solutions with community leaders driving education, health, and climate action.
                            </p>
                            <ul className="text-white/85 text-sm mt-4 space-y-2 list-disc list-inside">
                                <li>School-to-work transitions</li>
                                <li>Community research hubs</li>
                                <li>Mentorship & wellbeing support</li>
                            </ul>
                            <Link to="/contact" className="brand-cta mt-6 inline-flex">
                                Partner with us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About Highlight */}
                <section className="section-padded bg-white" id="about-highlight">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="section-label uppercase tracking-wider text-brand-blue font-bold">About us</p>
                                <h2 className="section-title text-gray-900 mt-3 text-3xl md:text-4xl font-bold">Research-driven programs rooted in community insight</h2>
                                <p className="text-gray-800 text-lg leading-relaxed mt-6 mb-6 font-medium">
                                    We work alongside local partners to co-design initiatives that respond to the priorities of
                                    children, young women, and grassroots innovators. Our approach blends rigorous research with
                                    human-centered design so impact is measurable—and meaningful.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Link to="/about#overview" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition-colors">
                                        Learn our story
                                    </Link>
                                    <Link to="/about#leadership" className="inline-flex items-center text-brand-pink font-semibold hover:text-brand-blue transition-colors">
                                        Meet the leadership
                                        <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <ImageSlideshow
                                    images={homeImages.slice(0, 3)}
                                    descriptions={homeDescriptions.slice(0, 3)}
                                    containerHeight="h-64 sm:h-72"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Highlights */}
                <section className="py-16 md:py-20" id="program-grid" style={{ backgroundColor: '#B8A0FF' }}>
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#050F2A' }}>What We Do</h2>
                            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#050F2A' }}>
                                We design and deliver youth-centered programs that build practical skills, foster confidence, and create pathways to dignified livelihoods.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {programHighlights.map((program) => (
                                <div key={program.title} className="rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100" style={{ backgroundColor: '#F2FDFF' }}>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#050F2A' }}>{program.title}</h3>
                                    <p className="text-base leading-relaxed mb-6" style={{ color: '#050F2A' }}>{program.description}</p>
                                    <Link to={program.link} className="inline-flex items-center font-semibold transition-all duration-300" style={{ color: '#050F2A' }}>
                                        Learn more
                                        <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section id="impact">
                    <ImpactMetrics />
                </section>

                {/* Stories / News */}
                <section className="section-padded bg-light" id="news">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                            <div>
                                <p className="section-label uppercase tracking-wider text-gray-600">Latest stories</p>
                                <h2 className="section-title text-gray-900 mt-2">Youth-led change that inspires</h2>
                            </div>
                            <Link to="/our-work" className="btn-alt shrink-0">
                                View all stories
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {storyHighlights.map((story) => (
                                <div key={story.title} className="bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer">
                                    <div className="p-6">
                                        <span className="inline-block bg-brand-blue text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full mb-4">
                                            {story.tag}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                                        <Link to={story.link} className="inline-flex items-center text-brand-pink font-semibold">
                                            Keep reading
                                            <span className="ml-2">→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section-padded bg-light">
                    <div className="max-w-6xl mx-auto">
                        <p className="section-label text-center uppercase tracking-wider text-gray-600">Values</p>
                        <h2 className="section-title text-center text-gray-900 mt-3">Principles that anchor every partnership</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                            {CORE_VALUES.map((value, index) => (
                                <li key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                    <p className="text-gray-900 font-semibold text-base md:text-lg">{value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padded brand-sunrise text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-title text-white">
                            Ready to collaborate on youth-centered research and development?
                        </h2>
                        <p className="text-white/95 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
                            Let&apos;s co-design programs, document evidence, and amplify the leadership of Kenya&apos;s next generation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            <Link to="/contact" className="bg-white text-brand-blue font-bold py-3 px-8 rounded hover:bg-white/90 transition-colors">
                                Talk to our team
                            </Link>
                            <Link to="/#news" className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white/10 transition-colors">
                                Share our story
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;