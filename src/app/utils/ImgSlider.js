import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ imageUrl }) => (
  <div>
    <img src={imageUrl} alt="slide" />
  </div>
);

const SliderComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <Slide key={index} imageUrl={imageUrl} />
      ))}
    </Slider>
  );
};

const ImageSlider = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  return (
    <div>
      <h1>Multi-Image Slider</h1>
      <SliderComponent images={images} />
    </div>
  );
};

export default ImageSlider;
