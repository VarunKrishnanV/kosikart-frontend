import Header from './components/Header/Header';
import Home from './pages/home/Home'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AddNewBook from "./pages/AddNewBook/AddNewBook";
import Checkout from "./pages/Checkout/Checkout";
import MySQLserver from "./config/modules/server";
import {useEffect, useState} from "react";
import {FirebaseConfig} from "./config/FirebaseConfig";
import {FirebaseAdmin} from "./config/FirebaseAdmin";
function App() {
    const [currentUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        loadCurrentUser()
    },[currentUser]);
    const loadCurrentUser=()=>{
        FirebaseConfig.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                setCurrentUser(user)
            } else {
                // User not logged in or has just logged out.
            }
        });
    }
  return (

    <div className="app-body">
        <BrowserRouter>
        <Switch>
            <Route path="/"
                   render={() => <MySQLserver />}/>

            <Home  exact path="/" />
            <Route path="/login"
                   render={() => <Login />}/>
            <Route path="/signup"
                   render={() => <Signup />}/>
            <Route path="/addBook"
                   render={() => <AddNewBook />}/>

            <Route path="/checkout"
                   render={() => <Checkout />}/>

        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
