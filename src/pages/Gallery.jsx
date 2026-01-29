import React from 'react';
import Layout from '../components/Layout';
import ImageSlideshow from '../components/ImageSlideshow';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const imageDescriptions = [
    'Community outreach and youth empowerment initiatives',
    'Educational programs and workshops',
    'Health awareness campaigns',
    'Environmental conservation projects',
    'Gender equality and women empowerment',
    'Youth leadership development',
  ];

  return (
    <Layout>
      <div className="min-h-screen text-white bg-gradient-indigo">
        <section className="py-10 px-6">
          <h1 className="text-3xl font-semibold mb-8 text-center text-white">
            Gallery
          </h1>

          <ImageSlideshow
            images={images}
            descriptions={imageDescriptions}
            containerHeight="h-64 sm:h-96 md:h-[480px]"
          />
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
