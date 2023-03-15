import React from 'react';
import './Setpopular.scss'
import { Container } from '../../Utils/Components';

const Setpopular = () => {
    return (
        <section className='setpopular'>
            <Container>
                <img src="	https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg" />
                <p className='setpopular__text'>
                    <strong>OLX servisining boʻlimlari: </strong> 
                    <a href="#">Bolalar dunyosi</a>, <a href="#">Ko'chmas mulk</a>, <a href="#">Transport</a>, <a href="#">Ish</a>, <a href="#">Hayvonlar</a>, <a href="#">Uy va bog'</a>, <a href="#">Elektr jihozlari</a>, <a href="#">Xizmatlar</a>, <a href="#">Moda va stil</a>, <a href="#">Xobbi</a>, <a href="#">dam olish sport</a>, <a href="#">Tekinga beraman</a>, <a href="#">Ayirboshlash</a>``
                </p>
            </Container>

        </section>
    );
}

export default Setpopular;
