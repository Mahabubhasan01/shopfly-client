import React from "react";
import "../../slider.css";
const HeaderCategory = () => {
  const containerStyle2 = {
    width: "fit-content",
    animation: "carouselAnim 10s infinite alternate linear",
  };
  const headingStyle = {
    fontFamily: "'Dancing Script', cursive, sans-serif",
  };
  const containerStyle = {
    background:
      "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
  };
  const containerStyles = {
    backgroundImage:
      "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
  };
  return (
    <div className="body">
      <div class="slider-container">
<div class="container">
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
	<div class="container-box">
		<header><h4>Lorem Ipsum</h4></header>
	</div>
</div>
</div>
<div class="buttons">
<span id="prev" class="btn prev">
	<i class="fas fa-angle-left"></i>
	<i class="fas fa-angle-left"></i>
</span>
<span id="next" class="btn next">
	<i class="fas fa-angle-right"></i>
	<i class="fas fa-angle-right"></i>
</span>
</div>
    </div>
  );
};

export default HeaderCategory;
