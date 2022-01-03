import React from "react";

const CategorySlider = () => {
  const categories = [
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
  ];
  return (
    <div className="overflow-x-scroll variant-scroll hide-scrollbar mx-3">
      <div className="flex w-[1500px] space-x-3">
        {categories.map((catagory, id) => (
          <div
            key={id}
            className="flex justify-center bg-white  rounded-md shadow-sm relative "
          >
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-1.jpg&w=1920&q=100"
              alt=""
              className="rounded-md brightness-75"
            />
            <p className="md:top-[40%] top-[30%] text-center font-semibold text-white absolute">
              Baju & Celana
            </p>
            <div className="md:w-[300px] w-32"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
