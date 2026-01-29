import React from 'react';
import Layout from '../components/Layout';
import ImageSlideshow from '../components/ImageSlideshow';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';
import img7 from '../assets/gallery7.jpg';
import img8 from '../assets/gallery8.jpg';
import img9 from '../assets/gallery9.jpg';

const OurWork = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const imageDescriptions = [
    'Community outreach and youth empowerment initiatives',
    'Educational programs and workshops',
    'Health awareness campaigns',
    'Environmental conservation projects',
    'Drug awareness and community mobilization campaign',
    'National Mental Health Walk - Community engagement in Kisii',
    'Youth mental health advocacy and awareness messaging',
    'Youth leaders promoting mental health and stress awareness',
    'Youth counseling and peer support sessions',
  ];

  const galleryImages = [
    {
      image: img1,
      title: 'Community Anti-Substance Abuse Campaign',
      category: 'Community Awareness',
      details: 'Youth champions led a massive community march against substance abuse, alcohol, and gender-based violence. With colorful placards and banner displays showcasing the NGO\'s mission, they mobilized over 500 community members across multiple locations. Result: Successfully raised awareness among vulnerable populations and inspired community commitment to drug-free living.'
    },
    {
      image: img2,
      title: 'Youth Advocacy Walk on Substance Abuse',
      category: 'Community Awareness',
      details: 'Young advocates participated in an organized community walk carrying empowering messages about zero tolerance for substance abuse and its effects. The participants engaged in peer-to-peer conversations with community members about health risks. Result: Reached hundreds of people with critical prevention messages and strengthened youth voice in community health decisions.'
    },
    {
      image: img3,
      title: 'Drug-Free Community Mobilization',
      category: 'Community Awareness',
      details: 'A large-scale community outreach event combining youth leadership with government partnership for substance abuse prevention. Youth advocates distributed educational materials and shared personal stories to build community resilience against drug addiction. Result: Successfully positioned substance abuse prevention as a community priority with strong government backing and media coverage.'
    },
    {
      image: img4,
      title: 'World AIDS Day Community Commemoration',
      category: 'Health',
      details: 'Youth leaders from Kisii University collaborated with the National AIDS Control Council in a commemorative march celebrating progress in HIV prevention and care. Participants shared messages of hope and unity for affected communities. Result: Strengthened community awareness on HIV/AIDS prevention and improved stigma reduction initiatives.'
    },
    {
      image: img5,
      title: 'National Mental Health Walk Kisii',
      category: 'Health',
      details: 'A landmark community event where thousands marched in solidarity to advocate for mental health awareness and break stigma. The march united government officials, healthcare workers, teachers, and youth to promote mental wellness and community support. Result: Massive media coverage and government commitment to integrate mental health resources into schools.'
    },
    {
      image: img6,
      title: 'Mental Health Awareness Campaign',
      category: 'Health',
      details: 'Youth advocates partnered with the Kenya Counselling and Psychological Association in a national mental health walk promoting wellness and resilience. Participants marched through communities spreading messages about the importance of mental health care. Result: Established 8 new support groups and connected 65+ individuals to professional mental health services.'
    },
    {
      image: img7,
      title: 'Youth Mental Wellness Advocacy',
      category: 'Health',
      details: 'Young advocates conducted community outreach promoting mental health awareness with focus messages on stress management and emotional wellbeing. Presenters shared strategies for healthy living while addressing stigma around mental health challenges. Result: Trained 150+ youth as peer mental health ambassadors deployed across schools and communities.'
    },
    {
      image: img8,
      title: 'Stress Management & Mental Health Dialogue',
      category: 'Support',
      details: 'Youth leaders facilitated open community dialogues addressing stress, mental health, and healthy coping mechanisms. In safe spaces, participants shared experiences and learned practical techniques for emotional wellness. Result: Created 8 ongoing peer support networks with 650+ active members meeting weekly for mutual support.'
    },
    {
      image: img9,
      title: 'One-on-One Peer Counseling Sessions',
      category: 'Support',
      details: 'Trained peer counselors conducted confidential one-on-one sessions under sheltered spaces, providing listening support and basic mental health guidance to individuals facing personal challenges. Sessions included initial assessment and referral to professional services when needed. Result: Delivered 3,200+ counseling sessions with 94% participant satisfaction and successful referrals to psychiatric care.'
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-indigo">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-brand-blue to-brand-pink py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Action
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Real stories and moments from our community-led programs and initiatives across Kenya.
            </p>
          </div>
        </section>

        {/* Main Slideshow */}
        <section className="py-12 md:py-16 px-6 bg-gradient-indigo">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Photo Gallery
            </h2>

            <ImageSlideshow
              images={images}
              descriptions={imageDescriptions}
              containerHeight="h-64 sm:h-96 md:h-[480px]"
            />
          </div>
        </section>

        {/* Community Initiatives Gallery */}
        <section className="py-16 md:py-24 px-6 bg-gradient-ocean">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              Featured Community Initiatives
            </h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-16">
              A closer look at the programs and campaigns making a real difference in our communities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  <div className="p-6" style={{ backgroundColor: '#050F2A' }}>
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#7EBBBF' }}>
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#E8F4FF' }}>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurWork;
