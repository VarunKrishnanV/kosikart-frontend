import React, {useState} from 'react'
import logo from '../../assets/images/logo.png'
import './Signup.css'
import Header from "../../components/Header/Header";
import {signUp} from "../../APIs/SignUp";
function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] =useState('');
    const [phoneNumber,setPhoneNumber] = useState(null);
    const [password,setPassword] =useState(null);
    const[confirmPassword,setConfirmPassword]=useState(null);
    return (
        <div><Header/>
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
                    <input type="text" id="name"
                    onChange={text=>setName(text)}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="phoneNumber">Contact number</label>
                    <input type="text" id="phoneNumber"
                    onChange={text=>setPhoneNumber(text)}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"

                    onChange={text=>setEmail(text)}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"

                    onChange={password=>setPassword(password)}/>
                </div>
                <div className="form__item">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" id="confirmPassword"
                    onChange={password=>setConfirmPassword(password)}
                    />
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
        </div>
    )
}

export default Signup
