import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <section className="product">
        <div className="product__wrapper">
          {
            productData.map((item) => (
              <ProductItem key={item.id} data={item} />
            ))
          }
        </div>
    </section>
  );
};

export default ProductList;
