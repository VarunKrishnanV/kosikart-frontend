import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductCarousel.css'
import { productDetails } from './CarouselData'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import StarRateIcon from '@material-ui/icons/StarRate';

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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function ProductCarousel(props) {
    return (
        <div className="productcarousel__container">
            <div className="carousel__productContainer" >
            <h4 className="productcarousel__heading">{props.heading}</h4>
                <Slider className="slider"
                    {...settings}
                    autoplaySpeed={3000}
                    dots
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                >
                    {
                        productDetails.map((item) => {
                            return <Card item={item} />
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
            <img className="product__image" src={item.productImageUrl} alt="" />
            <h6 className="product__title">{item.productTitle}</h6>
            <p className="productRatingReview">
                <span className="star">5<StarRateIcon/></span>
                <span className="review">500 Reviews</span>
            </p>
            <p className="price">
                <span className="price__offer">{item.productPrice}</span>
                <span className="price__actual">{item.originalPrice}</span>
                <span className="price__percentage">{item.discountPercentage}</span>
            </p>
        </div>
    );
}

export default ProductCarousel
