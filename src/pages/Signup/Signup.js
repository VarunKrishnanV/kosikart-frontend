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
    const handleSubmit=(event)=>{
        event.preventDefault()
        event.nativeEvent.stopImmediatePropagation()
        signUp(email,password,phoneNumber,name)


    }
    const handleChange=(e)=>{
        if(e.target.id==='email'){
            setEmail(e.target.value)
        }
        if(e.target.id==='name') {
            setName(e.target.value)
        }
        if(e.target.id==='phoneNumber'){
            setPhoneNumber(e.target.value)
        }
        if(e.target.id==='password'){
            setPassword(e.target.value)
        }
    }
    return (

        <div><Header/>
        <div className="form__container">
            <div className="form__logo">
                <img src={logo} alt="" />
            </div>

            <div className="form__heading">
                <h2>Create Account</h2>
            </div>

            <form className="form" >

                <div className="form__item">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="phoneNumber">Contact number</label>
                    <input type="text" id="phoneNumber"
                    onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"
                    onChange={handleChange}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                    onChange={handleChange}/>
                </div>
                <div className="form__item">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" id="confirmPassword"
                    onChange={handleChange}
                    />
                </div>

            </form>

            <p className="redirect">
                Already a user? <a href="/login">Sign in here</a>
            </p>

            <div className="form__item form__redirectBtn">
                    <button type="submit"onClick={handleSubmit}>Create Account</button>
            </div>
        </div>
        </div>
    )
}

export default Signup
