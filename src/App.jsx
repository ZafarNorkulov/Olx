import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CategoriesList from "./components/Categories-list/CategoriesList";
import ProductList from './components/Products/Product'
import Details from "./components/Details/Details";
import About from "./components/About/About";
import Setpopular from "./components/SetPopular/Setpopular";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="wrapper">
        <main>
          <Hero />
          <CategoriesList />
          <ProductList />
          <Details />
          <About />
          <Setpopular />
        </main>
        <hr />
        <footer>
          <Footer />
        </footer>
      </div>

    </>
  );
};

export default App;
