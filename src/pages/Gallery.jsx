import React, { useState } from 'react';
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
import img10 from '../assets/gallery10.jpg';
import gallery12 from '../assets/gallery12.jpeg';
import gallery13 from '../assets/gallery13.jpeg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const imageDescriptions = [
    'Community outreach and youth empowerment initiatives',
    'Educational programs and workshops',
    'Health awareness campaigns',
    'Environmental conservation projects',
    'Gender equality and women empowerment',
    'Youth leadership development',
    'Team building and collaborative planning sessions',
    'Capacity building workshops for community leaders',
    'Advocacy and awareness raising activities',
    'Partnership meetings and stakeholder engagements',
  ];

  // Mission-aligned quotes for captions
  const missionQuotes = [
    '"Empowering youth to shape a better tomorrow through education and action."',
    '"Building resilient communities through collaborative development."',
    '"Every young person deserves the opportunity to thrive and lead."',
  ];

  // In Action section - photos and videos of members/executives
  const actionItems = [
    {
      type: 'photo',
      src: gallery12,
      alt: 'NGO executives and members during outdoor team building activity',
      caption: 'Team building session - Fostering togetherness and collaboration',
    },
    {
      type: 'photo',
      src: gallery13,
      alt: 'NGO leadership engaging in outdoor activities',
      caption: 'Leadership retreat - Connecting beyond the field work',
    },
    {
      type: 'video',
      src: video1,
      caption: 'Outdoor activities showcasing team unity and spirit',
    },
    {
      type: 'video',
      src: video2,
      caption: 'Executive members bonding through recreational activities',
    },
    {
      type: 'video',
      src: video3,
      caption: 'Team building exercises promoting unity and trust',
    },
    {
      type: 'video',
      src: video4,
      caption: 'Outdoor engagement session with all members',
    },
    {
      type: 'video',
      src: video5,
      caption: 'Collaborative activities strengthening our team bond',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const shareText = `Check out YoNISeRD's gallery - ${imageDescriptions[currentIndex]}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>
      <div className="text-white bg-gradient-indigo">
        <section className="py-4 px-3 sm:py-8 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-6 text-center text-white">
            Gallery
          </h1>

          {/* Main Slideshow - reduced height on mobile */}
          <ImageSlideshow
            images={images}
            descriptions={imageDescriptions}
            containerHeight="h-48 sm:h-72 md:h-[420px]"
            onSlideChange={setCurrentIndex}
          />

          {/* Compact Engagement Section */}
          <div className="mt-3 sm:mt-5">
            {/* Caption Block - compact on mobile */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-5 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-white/90 mb-1">
                {imageDescriptions[currentIndex]}
              </p>
              <p className="text-xs text-white/60 italic hidden sm:block">
                {missionQuotes[currentIndex % missionQuotes.length]}
              </p>
            </div>

            {/* Thumbnail Strip - compact on mobile */}
            <div className="mb-3 sm:mb-4">
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-md overflow-hidden transition-all duration-200 ${
                      index === currentIndex
                        ? 'ring-2 ring-white scale-105'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Compact Share CTA */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
              <span className="text-xs text-white/60">
                Share:
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-1.5 sm:p-2 rounded-full bg-blue-600/80 hover:bg-blue-600 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-1.5 sm:p-2 rounded-full bg-sky-500/80 hover:bg-sky-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="p-1.5 sm:p-2 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-1.5 sm:p-2 rounded-full bg-slate-500/80 hover:bg-slate-500 transition-colors"
                  aria-label="Copy link"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* In Action Section - Members & Executives */}
        <section className="py-6 px-3 sm:py-10 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-white">
            In Action
          </h2>
          <p className="text-sm sm:text-base text-white/70 text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our team members and executives fostering togetherness through outdoor activities - 
            strengthening bonds beyond field work.
          </p>

          {/* Responsive Grid - 1 column mobile, 2 columns tablet, 3 columns desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {actionItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300"
              >
                {/* Photo or Video */}
                <div className="relative aspect-video bg-black/20">
                  {item.type === 'photo' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      aria-label={item.caption}
                      playsInline
                    >
                      <p className="text-white p-4">Your browser does not support the video tag.</p>
                    </video>
                  )}
                </div>
                
                {/* Caption */}
                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
