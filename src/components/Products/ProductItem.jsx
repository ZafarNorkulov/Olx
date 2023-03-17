import React, { useState } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
const ProductItem = ({ data }) => {
  const [click, setClick] = useState(false)

  const like = () => {
    setClick(click => !click)
  }
  let checkBtn = click ? 'fa-solid' : 'fa-regular'

  return (
    <div className="product__main">
      <Link className='product__link' to={`/singleproduct/${data.id}`}>
        <img src={data.images[0]} className="product__image" />
        <h2 className="product__name">{data.title}</h2>
      </Link>

      <div className="product__body">
        <h2 className="product__price">{data.price} 000 so'm</h2>
        <i className={`${checkBtn} fa-heart `} onClick={like} />
      </div>
    </div >
  );
};

export default ProductItem;
