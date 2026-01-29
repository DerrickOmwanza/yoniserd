import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import StoryModal from '../components/StoryModal';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stories = [
    {
      id: 1,
      title: 'Youth Mental Health Champions Transform Communities',
      excerpt: 'Over 380 trained youth advocates are now actively promoting mental wellness across Kisii County. Their peer-to-peer interventions have reached 20,000+ households with critical mental health awareness.',
      category: 'success-story',
      date: 'November 12, 2025',
      image: '🧠',
      content: 'Through our Mental Health Advocate Training Academy, we\'ve created a network of 380+ certified youth champions. These young leaders conduct awareness campaigns, facilitate support groups, and provide peer counseling in schools and communities. Measurable impact: 20,000+ people reached, 8 ongoing support networks with 650+ active members, 3,200+ counseling sessions provided.',
    },
    {
      id: 2,
      title: 'National Mental Health Walk Achieves Historic Turnout',
      excerpt: 'The National Mental Health Walk brought together 2,800+ participants including government officials, healthcare workers, and community members. A historic moment for mental health advocacy in Kenya.',
      category: 'impact',
      date: 'November 8, 2025',
      image: '🚶',
      content: 'Our flagship annual mental health walk united diverse stakeholders marching in solidarity to break stigma and advocate for mental wellness resources. The event generated massive media coverage, secured government commitment to integrate mental health resources in schools, and established 12 permanent mental health counseling desks in community centers.',
    },
    {
      id: 3,
      title: 'Drug-Free Communities Initiative Shows Measurable Results',
      excerpt: 'Community-led substance abuse prevention campaigns have reached 3,500+ people with critical drug awareness messaging. Youth advocacy walks mobilized commitment to drug-free living.',
      category: 'environment',
      date: 'November 3, 2025',
      image: '🛡️',
      content: 'Our comprehensive substance abuse prevention campaign combined community marches, educational sessions, and peer-to-peer conversations. Youth advocates distributed 3,500+ educational materials, engaged 1,200+ people in awareness activities, and successfully positioned drug prevention as a community priority with government backing.',
    },
    {
      id: 4,
      title: 'Research: Youth Leadership Training Shows 95% Satisfaction',
      excerpt: 'Latest evaluation finds 95% of participants report improved leadership skills and confidence. 150+ now serve as peer mentors in their communities.',
      category: 'research',
      date: 'October 28, 2025',
      image: '📊',
      content: 'We conducted a comprehensive evaluation of 380+ program participants. Key findings: 95% report improved personal mental health literacy, 150+ now serve as peer mental health ambassadors, 92% program completion rate, 94% participant satisfaction with support groups, and measurable impact on mental health facility attendance (+45% in participating communities).',
    },
    {
      id: 5,
      title: 'Partnership with Kenya Counselling Association Expands Reach',
      excerpt: 'YoNISeRD officially partners with the Kenya Counselling and Psychological Association to scale mental health advocacy. Collaboration reaches multiple counties.',
      category: 'partnership',
      date: 'October 20, 2025',
      image: '🤝',
      content: 'Strategic partnership with KCPA enables us to expand mental health programming across multiple counties in Kenya. Joint initiatives include training programs, community awareness campaigns, and professional referral networks. Expected reach: 50,000+ youth and community members over the next two years.',
    },
    {
      id: 6,
      title: 'Peer Counseling Network Supports 1,000+ Individuals',
      excerpt: 'Our peer counseling program has provided 3,200+ confidential sessions, connecting individuals to professional mental health services with 94% satisfaction rate.',
      category: 'programs',
      date: 'October 15, 2025',
      image: '💬',
      content: 'Trained peer counselors conducted one-on-one sessions in safe spaces, providing supportive listening and basic mental health guidance. Sessions included initial assessment and professional referrals. Outcomes: 3,200+ sessions delivered, 580+ individuals successfully referred to psychiatric care, 1,000+ individuals served, 94% participant satisfaction and successful outcomes.',
    },
    {
      id: 7,
      title: 'Youth Leadership Summit Produces 35+ Community Action Plans',
      excerpt: 'Three-day summit brought together 450+ young change-makers to develop innovative solutions. 35+ community-led projects now in implementation phase.',
      category: 'impact',
      date: 'October 8, 2025',
      image: '🎯',
      content: 'Our annual Youth Leadership Summit convened 450+ youth leaders for skills development and collaborative planning. Participants engaged in workshops on civic participation, grassroots mobilization, and social entrepreneurship. Output: 35+ community action plans initiated, strengthening the pipeline of youth-led development initiatives across Kisii County and beyond.',
    },
    {
      id: 8,
      title: 'Health Champions in Schools Program Reaches 8,000+ Students',
      excerpt: 'School-based initiative trained 600+ student health ambassadors who delivered wellness talks. Program now implemented in 25 schools.',
      category: 'news',
      date: 'September 30, 2025',
      image: '🏥',
      content: 'Our Health Champions program empowered 600+ students to promote wellness among their peers across 25 schools. Student ambassadors delivered health talks on nutrition, disease prevention, reproductive health, and mental wellness. Measurable impact: 8,000+ students reached with health messaging, measurable knowledge gains on preventive health behaviors, 25 active wellness clubs established.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Stories' },
    { value: 'success-story', label: 'Success Stories' },
    { value: 'impact', label: 'Impact Updates' },
    { value: 'research', label: 'Research' },
    { value: 'programs', label: 'Programs' },
    { value: 'environment', label: 'Environment' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'news', label: 'News' },
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-contrast">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-brand-blue to-brand-pink py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stories & Impact
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Real stories from youth leaders, partners, and communities transforming lives through innovation and collaboration.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 bg-gradient-ocean border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-white font-bold mb-4 text-center text-lg">Filter by category:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${
                    selectedCategory === cat.value
                      ? 'bg-gradient-to-r from-brand-pink to-brand-blue text-white shadow-lg scale-105'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 px-6 bg-gradient-contrast">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map(story => (
                <article
                    key={story.id}
                    className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    style={{ backgroundColor: '#050F2A' }}
                  >
                    {/* Story Image/Icon */}
                    <div className="h-48 bg-gradient-to-br flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#0A1F2E' }}>
                      <span className="text-7xl">{story.image}</span>
                    </div>

                    {/* Story Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#7EBBBF' }}>
                          {categories.find(c => c.value === story.category)?.label}
                        </span>
                        <span className="text-xs" style={{ color: '#B8A0FF' }}>{story.date}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:transition-colors" style={{ color: '#FFFFFF' }}>
                        {story.title}
                      </h3>

                      <p className="text-sm mb-4 line-clamp-3" style={{ color: '#E8F4FF' }}>
                        {story.excerpt}
                      </p>

                      <button
                        onClick={() => {
                          setSelectedStory(story);
                          setIsModalOpen(true);
                        }}
                        className="font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all hover:underline"
                        style={{ color: '#7EBBBF' }}
                      >
                        Read Story →
                      </button>
                    </div>
                  </article>
              ))}
            </div>

            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No stories found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-ocean">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a story to share?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              We love hearing from our community members, partners, and beneficiaries. Share your story with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Share Your Story
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Story Modal */}
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedStory(null);
          }}
          categories={categories}
        />
      </div>
    </Layout>
  );
};

export default News;
