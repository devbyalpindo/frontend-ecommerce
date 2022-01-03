import React from "react";

const ProductCard = () => {
  return (
    <div className="rounded-xl bg-gray-200 flex items-center space-x-5">
      <img
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20-m.png&w=384&q=100"
        alt=""
        className="w-32"
      />
      <div className="p-3 space-y-3">
        <p className="font-semibold">Maniac Red Boys</p>
        <p className="text-sm line-clamp-2">
          Sporty essentials, these Under Armour athletic shorts are smooth and
          lightweight in moisture-wicking material.
        </p>
        <p className="font-semibold">$15.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
