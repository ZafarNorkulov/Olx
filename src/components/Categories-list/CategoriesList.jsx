import React, { useState, useEffect } from "react";
import { instance } from "../../Api/instance";
import { Container } from "../../Utils/Components";
const CategoriesList = () => {

    
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        instance.get("/categories")
            .then(response => setCategoryData(response.data))
    }, []);

  return (
    <></>
  );
};

export default CategoriesList;
