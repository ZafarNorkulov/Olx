import "./App.scss";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";
import Mobileapps from "./Pages/Mobileapps/Mobileapps";
import Hero from "./components/Hero/Hero";
import Register from "./Pages/Register/Register";
import CategoryFilter from "./Pages/CategoryFilter/CategoryFilter";
import SearchProducts from "./Pages/SearchProduct/SearchProduct";
import Like from "./Pages/Like/Like";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/mobileapps" element={<Mobileapps />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search/:searchtitle' element={<SearchProducts />} />
        <Route path='category/:categoryId' element={<CategoryFilter />} />
        <Route path='/products/like' element={<Like />} />
      </Routes>


    </>
  );
};

export default App;
