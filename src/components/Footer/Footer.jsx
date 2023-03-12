import React from 'react';
import './Footer.scss'
import { Container } from '../../Utils/Components';

const Footer = () => {
    return (
        <>
            <Container>
                <div className="footer__wrapper">
                    <ul>
                        <li><a className='footer__link' href="#">Mobil Ilovalar</a></li>
                        <li><a className='footer__link' href="#">Yordam</a></li>
                        <li><a className='footer__link' href="#">Pullik xizmatlar</a></li>
                        <li><a className='footer__link' href="#">OLX-da biznes</a></li>
                        <li><a className='footer__link' href="#">Saytda reklama</a></li>
                        <li><a className='footer__link' href="#">Foydalanish shartlari</a></li>
                        <li><a className='footer__link' href="#">Maxfiylik siyosati</a></li>
                        <li><a className='footer__link' href="#">Hamkorlar</a></li>
                    </ul>
                    <ul>
                        <li><a className='footer__link' href="#">Qanday sotib olish va sotish?</a></li>
                        <li><a className='footer__link' href="#">Xavfsizlik qoidalari</a></li>
                        <li><a className='footer__link' href="#">Sayt xaritasi</a></li>
                        <li><a className='footer__link' href="#">Mintaqalar xaritasi</a></li>
                        <li><a className='footer__link' href="#">Career</a></li>
                        <li><a className='footer__link' href="#">Teskari aloqa</a></li>

                    </ul>
                    <div className="footer__apps">
                        <img className='googleplay' src="src/assets/images/GooglePlay.png" />
                        <img src="src/assets/images/AppStore.png" />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Footer;
