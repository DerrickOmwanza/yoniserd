import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const programs = [
  {
    title: "Children's Rights",
    description: "Advocating for the protection and empowerment of vulnerable children through education, policy, and community support.",
  },
  {
    title: "Environment",
    description: "Promoting sustainable practices and environmental conservation through youth-led initiatives and awareness campaigns.",
  },
  {
    title: "Reproductive Health",
    description: "Providing access to reproductive health education and services to empower informed choices and healthy communities.",
  },
  {
    title: "HIV/AIDS Awareness",
    description: "Conducting outreach programs to reduce stigma, raise awareness, and promote testing and treatment.",
  },
  {
    title: "Gender-Based Violence",
    description: "Working to prevent GBV through advocacy, survivor support, and community mobilization.",
  },
];

const Programs = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-sunrise">
        {/* Programs Grid */}
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Empowering Communities Through Action
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div key={index} className="panel bg-white/90 backdrop-blur-sm border-[#4A5C6A]/20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{program.title}</h2>
                  <p className="text-secondary text-lg leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-12 px-6 bg-light" id="partnerships">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label">Partnerships</p>
            <h2 className="section-title mb-4">Let&apos;s co-design the next youth-powered program</h2>
            <p className="section-text">
              Whether you&apos;re a community-based organization, research lab, or social enterprise, we love
              collaborating on solutions that center young people. Share your idea and we&apos;ll explore how to
              bring it to life together.
            </p>
            <Link to="/contact" className="brand-cta mt-8 inline-flex">
              Start a conversation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Programs;