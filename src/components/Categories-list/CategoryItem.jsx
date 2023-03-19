import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";
const CategoryItem = ({ img, title, id }) => {
  return (
    <Link to={`/category/${id}`} className="category__main">
      <img src={img} className="category__image" />
      <h2 className="category__name">{title}</h2>
    </Link>
  );
};

export default CategoryItem;
