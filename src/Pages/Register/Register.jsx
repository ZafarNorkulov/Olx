import React from 'react';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import './Register.scss'
const Register = () => {
    return (
        <div className='register'>
            <div className="register__wrapper">
                <div className="acc__header">
                    <button className={`register__header--btn `}  >Kirish</button>
                    <button className={`register__header--btn `} >Ro'yxatdan o'tish</button>
                </div>
                <Login />
                {/* <Signup /> */}
            </div>
        </div>
    );
}

export default Register;
