import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
// import { instance } from "../../Api/instance";
import { Container } from "../../Utils/Components";
const CategoriesList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <section className="category">
      <Container>
        <h2 className="category__title">Bosh toifalar</h2>
        <div className="category__wrapper">
          {categoryData.map((item) => (
            <CategoryItem img={item.image} title={item.name} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesList;
