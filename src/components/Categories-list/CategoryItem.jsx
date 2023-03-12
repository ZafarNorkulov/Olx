import React from "react";
import "./CategoryItem.scss";
const CategoryItem = ({ img, title }) => {
  return (
    <div className="category__main">
      <img src={img} className="category__image" />
      <h2 className="category__name">{title}</h2>
    </div>
  );
};

export default CategoryItem;
