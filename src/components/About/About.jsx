import React from 'react';
import { Container } from '../../Utils/Components';
import { useTranslation } from 'react-i18next';
import './About.scss'


const About = () => {

    const { t } = useTranslation()

    return (
        <section className='about'>
            <Container>
                <img src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg
"/>
                <p>
                    {t('about__text1')}
                </p>
                <p>
                    {t('about__text2')}
                </p>
                <p>
                    {t('about__text3')}
                </p>
                <p>
                    {t('about__text4')}
                </p>
                <p>
                    {t('about__text5')}
                </p>

            </Container>
        </section>
    );
}

export default About;
