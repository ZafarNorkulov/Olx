import "./App.scss";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";
import Mobileapps from "./Pages/Mobileapps/Mobileapps";
import CategoryFilter from "./Pages/CategoryFilter/CategoryFilter";
import SearchProducts from "./Pages/SearchProduct/SearchProduct";
import Like from "./Pages/Like/Like";
import Auth from "./Pages/Auth/Auth";
import Login from "./Pages/Auth/Login/Login";
import Create from "./Pages/Auth/Create/Create";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/mobileapps" element={<Mobileapps />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="create" element={<Create />}></Route>
        </Route>
        <Route path="/search/:searchtitle" element={<SearchProducts />} />
        <Route path="category/:categoryId" element={<CategoryFilter />} />
        <Route path="/products/like" element={<Like />} />
      </Routes>
    </>
  );
};

export default App;
