import React, { useState } from "react";
import { Navbar } from "../components";
import CategorySlider from "../components/Category/CategorySlider";
import Header from "../components/Header";
import TopProduct from "../components/TopProduct";

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <Header />
      <CategorySlider />
      <TopProduct />
    </div>
  );
};

export default Home;
