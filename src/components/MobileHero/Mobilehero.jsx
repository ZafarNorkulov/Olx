import React from 'react';
import { Container } from '../../Utils/Components';
import './Mobilehero.scss'
const Mobilehero = () => {
    return (
        <section className="mobilehero">
            <Container>
                <div className="mobilehero__left">
                    <h1>Ilova bilan OLX doim yoningizda</h1>
                    <ul className="mobilehero__list">
                        <li className="mobilehero__item">
                            <img className='mobilehero-item__img' src="	https://static.olx.uz/static/olxuz/packed/font/2f16280613d3c09797606e2f0b502c9c28.svg" alt="" />
                            <span>Smartfoningiz uchun qulay va bepul ilovani yuklab oling</span>
                        </li>
                        <li className="mobilehero__item">
                            <img className='mobilehero-item__img' src="	https://static.olx.uz/static/olxuz/packed/font/2f16280613d3c09797606e2f0b502c9c28.svg" alt="" />
                            <span>Bir zumda e’lonni yarating va joylashtiring</span>
                        </li>
                        <li className="mobilehero__item">
                            <img className='mobilehero-item__img' src="	https://static.olx.uz/static/olxuz/packed/font/2f16280613d3c09797606e2f0b502c9c28.svg" alt="" />
                            <span>E’lonlarni izlang va istalgan joydan muloqot qiling</span>
                        </li>

                    </ul>
                    <div className="mobilehero__apps">
                        <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                            <img src="src/assets/images/AppStore.png" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-landing">
                            <img src="src/assets/images/GooglePlay.png" />
                        </a>

                    </div>
                </div>
                <div className="mobilehero__right">
                    <span className="mobilehero-right__back"><img className='mobilehero__image' src="https://static.olx.uz/static/olxuz/packed/img/2fb666ead34773f24a9b66bb4474a72ebe.png" alt="" /></span>
                    
                </div>
            </Container>
        </section>
    );
}

export default Mobilehero;

