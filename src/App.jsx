import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategoriesList from "./components/Categories-list/CategoriesList";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CategoriesList />
    </div>
  );
};

export default App;
