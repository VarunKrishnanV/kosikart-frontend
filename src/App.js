import './App.css';
import Carousel from './components/bannerCarousel/Carousel';
import Header from './components/Header/Header';
import Home from './pages/home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import AddNewBook from './pages/AddNewBook/AddNewBook'
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import Checkout from './pages/Checkout/Checkout';
import AccountDetails from './pages/AccountDetails/AccountDetails';

function App() {
  return (
    <div className="App">  

          {/* header */}

          <Header />
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <AddNewBook /> */}
          {/* <Home /> */}
          {/* <ProductDetailsPage /> */}
          {/* <Checkout /> */}
          {/* <AccountDetails /> */}
    </div>
  );
}

export default App;
