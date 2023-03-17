import React from 'react';
import './Mobilehelp.scss'
import { Container } from '../../Utils/Components'
const Mobilehelp = () => {
    return (
        <section className="mobilehelp">
            <Container>
                <h2>E’LONLARNI ILOVAMIZ YORDAMIDA TEZROQ SOTING</h2>
                <ul className="mobilehelp__cards">
                    <li className="mobilehelp__item">
                        <img src="	https://static.olx.uz/static/olxuz/packed/font/2f1168e220014cc0dc779ae6fda79655da.svg" />
                        <div className="mobilehelp__body">
                            <h3>E’lonlaringizni joylashtiring</h3>
                            <p>
                                Tafsilotlar qancha ko’p bo’lsa, shuncha yaxshi. Yorqin sarlavha va tavsif yozing, kerakli rukn tanlang va rasm qo’shing.
                            </p>
                        </div>

                    </li>
                    <li className="mobilehelp__item">
                        <img src="https://static.olx.uz/static/olxuz/packed/font/2fdc365d4023fc336057c8df6b5e4dcf51.svg" />
                        <div className="mobilehelp__body">
                            <h3>Rasmlar oling</h3>
                            <p>
                                Buning uchun OLX ilovasidan foydalaning. Mahsulotni suratga olib shu zumdayoq e’longa kiriting.
                            </p>
                        </div>

                    </li>
                    <li className="mobilehelp__item">
                        <img src="https://static.olx.uz/static/olxuz/packed/font/2f91382f3f70a423329fb1c09582290eb0.svg" />
                        <div className="mobilehelp__body">
                            <h3>Tezkor javob yo’llang</h3>
                            <p>
                                Tezkor javoblar tezkor kulishuvlar demak. Xaridor sizga xabar yo’llashi bilan, bu haqida ogohlantirishlar orqali xabardor bo’ling.
                            </p>
                        </div>

                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default Mobilehelp;
