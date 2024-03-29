"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};

const ProductImage = ({ product, fill }: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          alt={product.title}
          fill
          onLoad = {() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          alt={product.title}
          width={400}
          height={1000}
          onLoad = {() => setLoading(false)}
        />
      )}
    </>
  );
};

export default ProductImage;
