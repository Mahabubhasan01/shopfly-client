"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slidercard from "./Slidercard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const cardDetails = [
  {
    category: "vegetables",
    img: "https://i.ibb.co/QNr2LBL/7-3edd060e-53fe-4d4d-a0e1-43ad2e4a4059-590-X668-crop-center.webp",
    link: "vegetable",
  },
  {
    category: "Fruites",
    img: "https://i.ibb.co/DfV9JQ2/25-525c2823-683a-445e-b187-6fe7ca3f5a8e-590-X668-crop-center.webp",
    link: "vegetable",
  },
  {
    category: "Icecream",
    img: "https://i.ibb.co/Q9nY4HN/20-f7612305-f805-4e8a-8650-d8585e026fb2-590-X668-crop-center.webp",
    link: "vegetable",
  },
  {
    category: "Groccery",
    img: "https://i.ibb.co/QM1zZtG/34-34bd8b89-338f-40cb-b956-3aab4af3067b-590-X668-crop-center.webp",
    link: "vegetable",
  },
  {
    category: "Cloth",
    img: "https://i.ibb.co/QNr2LBL/7-3edd060e-53fe-4d4d-a0e1-43ad2e4a4059-590-X668-crop-center.webp",
    link: "vegetable",
  },
];

const SliderComponent = ({ deviceType }) => {
  const isMobile = deviceType === "mobile";

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={!isMobile}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {cardDetails.map((c, index) => (
        <Slidercard key={index} name={c.category} img={c.img} link={c.link} />
      ))}
    </Carousel>
  );
};

export default SliderComponent;
