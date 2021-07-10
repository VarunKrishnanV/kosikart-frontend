import React from 'react'
import logo from '../../assets/images/logo.png'
import './Signup.css'

function Signup() {
    return (
        <div className="form__container">
            <div className="form__logo">
                <img src={logo} alt="" />
            </div>

            <div className="form__heading">
                <h2>Create Account</h2>
            </div>

            <form className="form">

                <div className="form__item">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Contact number</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Email</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Password</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Confirm password</label>
                    <input type="text" id="name" />
                </div>

                <div className="form__item">
                    <button type="submit">Create Account</button>
                </div>

            </form>

            <p className="redirect">
                Already a user? <a href="">Sign in here</a>
            </p>

            <div className="form__item form__redirectBtn">
                    <button type="submit">Create Account</button>
            </div>

        </div>
    )
}

export default Signup
