import React, { useState } from 'react';
import { Button } from '../../Utils/Components';
import './Login.scss'
const Login = () => {

    return (
        <div className={'login'}>
            <div className="login__container">
                <form className='login__login '>
                    <label htmlFor='email'>Telefon raqami yoki email</label>
                    <input type="email" id='email' required />
                    <label htmlFor='password'>Parol</label>
                    <input type="password" id='password' required />
                    <a className='login__help' href="#">Parolingizni unutdingizmi?</a>
                    <Button mode={'dark'} text='Kirish' />
                    <div className="login__or">
                        <span className='login__line' />
                        <span className='login-or__text'>YOKI</span>
                        <span className='login__line' />
                    </div>


                    <span className='login__condition'>Kirib, bizning <a href="https://help.olx.uz/hc/uz/articles/360009197178"> Foydalanish shartlari</a> qabul qilasiz.</span>
                </form>
            </div>
        </div>
    );
}

export default Login;
