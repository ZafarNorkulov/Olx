import React from 'react';
import './Signup.scss'
import { Button } from '../../Utils/Components';
const Signup = () => {
    return (
        <div className='login'>
            <div className="wrapper">
                <div className="acc__container">
                    <form className='acc__signup'>
                        <div className="acc__or">
                            <span className='acc__line' />
                            <span className='acc-or__text'>YOKI</span>
                            <span className='acc__line' />
                        </div>
                        <label htmlFor='email'>Telefon raqami yoki email</label>
                        <input type="email" id='email' required />
                        <label htmlFor='password'>Parol</label>
                        <input type="password" id='password' required />
                        <span className='acc__condition--signup'>
                            Men xizmatdan <a className='acc__help' target={'_blank'} href='https://help.olx.uz/hc/uz/articles/360009197178'>foydalanish qoidalarini,</a> shuningdek, OLX ga mening ma'lumotlarimni uzatish va qayta ishlashga rozilik bildiraman. Men voyaga yetganligimni va e'lon joylashtirish uchun javobgarligimni tasdiqlayman.
                        </span>
                        <input type="checkbox" className='acc__checkbox' />
                        <span>
                            Ha, men OLX dagi yangiliklar va aksiyalar haqida ma'lumot olishni xohlayman.
                        </span>


                        <Button mode={'dark'} text='Kirish' />



                        <span className='acc__condition'>Kirib, bizning <a href="https://help.olx.uz/hc/uz/articles/360009197178"> Foydalanish shartlari</a> qabul qilasiz.</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
