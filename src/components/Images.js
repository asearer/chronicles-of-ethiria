import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Images() {
  // Mock image data
  const imageData = [
    { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
    { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
    { id: 3, url: 'https://example.com/image3.jpg', alt: 'Image 3' },
    { id: 4, url: 'https://example.com/image4.jpg', alt: 'Image 4' },
    { id: 5, url: 'https://example.com/image5.jpg', alt: 'Image 5' },
    { id: 6, url: 'https://example.com/image6.jpg', alt: 'Image 6' },
    { id: 7, url: 'https://example.com/image7.jpg', alt: 'Image 7' },
    { id: 8, url: 'https://example.com/image8.jpg', alt: 'Image 8' },
    { id: 9, url: 'https://example.com/image9.jpg', alt: 'Image 9' },
    { id: 10, url: 'https://example.com/image10.jpg', alt: 'Image 10' }
  ];

  // Function to render image items
  const renderImageItems = () => {
    return imageData.map(image => (
      <div key={image.id}>
        <img src={image.url} alt={image.alt} />
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
      <h2>Game Images</h2>
      <Slider {...settings}>
        {renderImageItems()}
      </Slider>
    </section>
  );
}

export default Images;
