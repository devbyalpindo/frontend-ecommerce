import { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { getproduct } from "../../api/user";

const Index = () => {
  const [product, setProduct] = useState([]);

  const callproduct = useCallback(async () => {
    const response = await getproduct();
    console.log(response);
  }, [product]);

  useEffect(() => {
    callproduct();
  }, []);
  return (
    <div className='m-3 p-5 rounded-xl border border-gray-300'>
      <p className='font-semibold text-2xl'>Produk terlaris</p>
      <div className='grid grid-cols-3 gap-5'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Index;
