import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { Container } from '../../Utils/Components';
import './CategoryFilter.scss'

const CategoryFilter = () => {
    const { categoryId } = useParams()
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [categoryId]);

    return (
        <>
            <Container>
                <Header />
                <Hero />
                <section>
                    <div className="products">
                        {
                            category.map(product => {
                                return (
                                    <article className='product-item' key={product.id}>
                                        <Link to={`/singleproduct/${product.id}`}>
                                            <img src={product.images.at(0)} />
                                        </Link>
                                        <div className='products__info'>
                                            <div className='products__info--left'>
                                                <h1>{product.title}</h1>
                                                <p>{product.description}</p>
                                            </div>
                                            <strong className='products__price'>{product.price} 000 so'm</strong>
                                        </div>
                                    </article>)

                            })
                        }
                    </div>
                </section>
            </Container>
        </>
    );
}

export default CategoryFilter;
