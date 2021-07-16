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
function App() {
  return (

    <div className="app-body">
        <BrowserRouter>
        <Switch>

            <Home exact path="/" />
            <Route path="/login"
                   render={() => <Login />}/>
            <Route path="/signup"
                   render={() => <Signup />}/>
            <Route path="/addBook"
                   render={() => <AddNewBook />}/>

        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
