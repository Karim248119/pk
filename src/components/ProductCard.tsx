import { StaticImageData } from "next/image";
import React from "react";
import FlipImg from "./FlipImg";
import Header from "./Typo";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  model: StaticImageData;
  item: StaticImageData;
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="space-y-3">
      <FlipImg
        src1={product.model}
        src2={product.item}
        className="xl:h-96 xl:w-80 h-72 w-52"
      />
      <Header className="flex justify-between items-center !xl:text-2xl !text-xl">
        <h2 className=" capitalize">{product.name}</h2>
        <p className="text-gray-500">{product.price} $</p>
      </Header>
      <div className=" space-y-[2px]">
        <div className="h-[1px] w-full bg-dark" />
        <div className="h-[1px] w-full bg-dark" />
      </div>
    </div>
  );
}
