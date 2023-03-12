import React from 'react';
import { Container } from '../../Utils/Components';
import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <Container>
                <img src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg
"/>
                <p>
                    Oʻzbekistonda 1-raqamli eʼlonlar servisi
                </p>
                <p>
                    Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda izlaganingizni topasiz.
                </p>
                <p>
                    "Eʼlon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid onlayn-eʼlonni joylashtira olasiz – ish qidirish, xizmat koʻrsatish, avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.
                </p>
                <p>
                    OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv funksiyasidan foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud eʼlonlarni hech bir qiyinchiliksiz topa olasiz.
                </p>
                <p>
                    OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.
                </p>
            </Container>
        </section>
    );
}

export default About;
