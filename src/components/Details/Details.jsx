import React from 'react';
import './Details.scss'
import { Button, Container } from '../../Utils/Components';

const Details = () => {
    return (
        <section className='details'>
            <Container >
                <img src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" />
                <strong>OLX bilan internetda biznesingizni boshlang!</strong>
                <Button type={'light'} text={'Batafsil'} />
            </Container>
        </section>
    );
}

export default Details;
