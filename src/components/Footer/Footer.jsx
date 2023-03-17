import React from 'react';
import './Footer.scss'
import { Container } from '../../Utils/Components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <hr />
            <Container>
                <div className="footer__wrapper">
                    <ul>
                        <li><Link to={'/mobileapps'} className='footer__link' >Mobil Ilovalar</Link></li>
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
                        <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-landing"><img className='googleplay' src="src/assets/images/GooglePlay.png" />
                        </a>
                        <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                            <img src="src/assets/images/AppStore.png" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
