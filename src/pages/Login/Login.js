import React from 'react'
import logo from '../../assets/images/logo.png'
import './Login.css'

function Signup() {
    return (
        <div className="form__container">
            <div className="form__logo">
                <img src={logo} alt="" />
            </div>

            <div className="form__heading">
                <h2>Login</h2>
            </div>

            <form className="form">

                <div className="form__item">
                    <label htmlFor="email">Email / Phone number</label>
                    <input type="text" id="email" />
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" />
                    <a className="forgotPassword">Forgot password?</a>
                </div>
                
                <div className="form__item">
                    <button type="submit">Login</button>
                </div>

            </form>

            <p className="redirect">
                New user? <a href="">Register here</a>
            </p>

            <div className="form__item form__redirectBtn2">
                    <a href=""><button type="submit">Return to shopping</button></a>
            </div>

        </div>
    )
}

export default Signup
