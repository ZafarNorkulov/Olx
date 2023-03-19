import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
// import { instance } from "../../Api/instance";
import { useTranslation } from "react-i18next";
const CategoriesList = () => {

  const {t} = useTranslation()

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <section className="category">
      <h2 className="category__title">{t("category__title")}</h2>
      <div className="category__wrapper">
        {
        categoryData.map((item) => (
          <CategoryItem img={item.image} title={item.name} id={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
