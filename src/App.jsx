import "./App.scss";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";

const App   = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
      </Routes>


    </>
  );
};

export default App;
