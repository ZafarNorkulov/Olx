import "./App.scss";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";
import Mobileapps from "./Pages/Mobileapps/Mobileapps";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/mobileapps" element={<Mobileapps />} />
        <Route path='/search/:searchtitle' element={<Hero />} />
      </Routes>


    </>
  );
};

export default App;
