import React from 'react';
import './Footer.scss'
import { Container } from '../../Utils/Components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation()

    return (
        <footer className='footer'>
            <hr />
            <Container>
                <div className="footer__wrapper">
                    <ul>
                        <li><Link to={'/mobileapps'} className='footer__link' >{t("footer__apps")}</Link></li>
                        <li><a className='footer__link' href="#">{t("footer__help")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__paid")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__bussines")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__terms")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__privacy")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__privacy")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__partners")}</a></li>
                    </ul>

                    <ul>
                        <li><a className='footer__link' href="#">{t("footer__howsell")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__safety")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__map")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__map--region")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__career")}</a></li>
                        <li><a className='footer__link' href="#">{t("footer__feedback")}</a></li>

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
