import React from "react";
import "./Product.scss";
import { FiHeart } from "react-icons/fi";
const ProductItem = ({ img, title, price }) => {
  return (
    <div className="product__main">
      <img src={img} className="product__image" />
      <h2 className="product__name">{title}</h2>
      <div className="product__body">
        <h2 className="product__price">{price} 000 so'm</h2>
        <FiHeart />
      </div>
    </div>
  );
};

export default ProductItem;
