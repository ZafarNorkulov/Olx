import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { Container } from '../../Utils/Components';
import "./SearchProduct.scss"

const SearchProducts = () => {
    const { searchtitle } = useParams()
    const [resultSearch, setResultSearch] = useState([])
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/?title=${searchtitle}`)
            .then(res => res.json())
            .then(data => setResultSearch(data))
    }, []);

    return (
        <div>
            <Header />

            <Container>
                <Hero />
                <div className="products">
                    {
                        resultSearch.map(product =>
                            <article className='product-item' key={product.id}>
                                <Link to={`/singleproduct/${product.id}`}>
                                    <img src={product.images.at(0)} />
                                </Link>
                                <div className='products__info'>
                                    <div >
                                        <h1>{product.title}</h1>
                                        <p>{product.description}</p>
                                    </div>
                                    <strong className='products__price'>{product.price} 000 so'm</strong>
                                </div>
                            </article>
                        )
                    }
                </div>
            </Container>
        </div>
    );
}

export default SearchProducts;