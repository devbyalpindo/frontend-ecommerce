import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeaderCarousel = () => {
  const options = {
    showArrows: false,
    showStatus: false,
    infiniteLoop: true,
    stopOnHover: true,
    showThumbs: false,
    useKeyboardArrows: true,
    swipeable: true,
    centerMode: true,
    centerSlidePercentage: 80,
    autoPlay: true,
  };
  return (
    <Carousel {...options}>
      <div className="p-3  rounded-md">
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-1.jpg&w=1920&q=100"
          alt=""
          className="rounded-md shadow-lg"
        />
      </div>
      <div className="p-3  rounded-md">
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-2.jpg&w=1920&q=100"
          alt=""
          className="rounded-md shadow-lg"
        />
      </div>
      <div className="p-3  rounded-md">
        <img
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-3.jpg&w=1920&q=100"
          alt=""
          className="rounded-md shadow-lg"
        />
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
