import React, {useState} from 'react'
import logo from '../../assets/images/logo.png'
import './Login.css'
import Header from "../../components/Header/Header";
import {login} from "../../APIs/SignUp";


function Signup() {
    const[email,setEmail] =useState(null)
    const [password,setPassword] = useState(null)
const handleSubmit=(event)=>{
        event.preventDefault()
    login(email,password)
}
const handleChange=(e)=>{
        if(e.target.id==='email'){
            setEmail(e.target.value)
        }
        if(e.target.id==='password'){
            setPassword(e.target.value)
        }
}
    return (<div>

    <Header/>
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
                    <input type="text" id="email"

                    onChange={handleChange}/>
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                    onChange={handleChange}
                    />
                    <a className="forgotPassword">Forgot password?</a>
                </div>

                <div className="form__item">
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>

            </form>

            <p className="redirect">
                New user? <a href="">Register here</a>
            </p>

            <div className="form__item form__redirectBtn2">
                    <a href=""><button type="submit">Return to shopping</button></a>
            </div>

        </div>
        </div>
    )
}

export default Signup
