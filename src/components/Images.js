import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Images() {
  // Mock data for images and videos
  const mediaData = [
    { id: 1, type: 'image', url: 'https://example.com/image1.jpg', alt: 'Image 1' },
    { id: 2, type: 'video', url: 'https://example.com/video1.mp4', alt: 'Video 1' },
    // Add more items as needed
  ];

  // Function to render image and video items
  const renderMediaItems = () => {
    return mediaData.map(media => (
      <div key={media.id}>
        {media.type === 'image' ? (
          <img src={media.url} alt={media.alt} />
        ) : (
          <video controls>
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    ));
  };

  // Settings for React Slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section>
      <h2>Game Media</h2>
      <Slider {...settings}>
        {renderMediaItems()}
      </Slider>
    </section>
  );
}

export default Images;
