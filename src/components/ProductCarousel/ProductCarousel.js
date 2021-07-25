import React, {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductCarousel.css'
import product1 from '../../assets/images/products/product1.png'
import { productDetails } from './CarouselData'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import StarRateIcon from '@material-ui/icons/StarRate';

import {FirebaseConfig} from "../../config/FirebaseConfig";


const PreviousBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosSharpIcon style={{ color: "#fff", marginLeft : "-3px", fontSize : "15px" }} />
        </div>
    )
}

const NextBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosSharpIcon style={{  color: "#fff", marginRight : "-3px", fontSize : "15px" }} />
        </div>
    )
}

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};

function ProductCarousel(props) {

    const [info, setInfo] = useState([]);

    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data using the get() method
    const Fetchdata = () => {
        FirebaseConfig.firestore().collection('BookType').doc('Engineering').collection('1')
            .get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);

            });
        })
    }

    return (

            <div className="productcarousel__container">
                <div className="carousel__productContainer">
                    <div className="viewAllContainer">
                        <h4 className="productcarousel__heading">{props.heading}</h4>
                        <button className="viewAll">View All</button>
                    </div>

                    <Slider className="slider"
                            {...settings}
                            autoplaySpeed={3000}
                            dots
                            prevArrow={<PreviousBtn/>}
                            nextArrow={<NextBtn/>}
                    >
                        {
                            info.map((item) => {
                                return <Card item={item}/>
                            })
                        }
                    </Slider>

                </div>
            </div>

    )
}

const Card = ({ item }) => {
    return (
        <div className="product__card" >
            <img className="product__image" src={product1} alt="" />
            <h6 className="product__title">{item.title}</h6>
            <p className="productRatingReview">
                <span className="star">5<StarRateIcon className="starIcon"/></span>
                <span className="review">500 Reviews</span>
            </p>
            <p className="price">
                <span className="price__offer">{item.offPrice}</span>
                <span className="price__actual">{item.mrpPrice}</span>
                <span className="price__percentage"></span>
            </p>
        </div>
    );
}

export default ProductCarousel
