import React from 'react';
import About from '../../components/About/About';
import Header from '../../components/Header/Header'
import CategoriesList from '../../components/Categories-list/CategoriesList';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import ProductList from '../../components/Products/Product';
import Setpopular from '../../components/SetPopular/Setpopular';
import Details from '../../components/Details/Details'

const Home = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Hero />
                <CategoriesList />
                <ProductList />
                <Details />
                <About />
                <Setpopular />
                <hr />
                <Footer />
            </div>
        </>
    );
}

export default Home;
