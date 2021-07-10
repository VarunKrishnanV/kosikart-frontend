import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './DetailsCarousel.css'
import { carouselImages } from './CarouselData'
import { carouselImagesPhone } from './CarouselData'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


const PreviousBtn = (props) => {
    const {className, onClick} = props
    return(
        <div className={className}  onClick={onClick}>
            <ArrowBackIosSharpIcon style={{color:"white", fontSize : "18px"}} />
        </div>
    )
}

const NextBtn = (props) => {
    const {className, onClick} = props
    return(
        <div className={className}  onClick={onClick}>
            <ArrowForwardIosSharpIcon style={{color:"white", fontSize : "18px"}} />
        </div>
    )
}



function Carousel() {

    return (
        <>
        <div className = "carousel__container" >
            <Slider 
                // autoplay 
                autoplaySpeed={3000} 
                dots 
                initialSlide={2} 
                infinite
                prevArrow={<PreviousBtn/>}
                nextArrow={<NextBtn/>}
                customPaging = {
                    (i) => {
                        return (
                            <div>
                                <img src={carouselImages[i]} style={{width:"50px", height:"50px", objectFit:"contain",}} />
                            </div>
                        );
                    }
                }
                dotsClass = "slick-dots custom-indicator"
            >
                {
                    carouselImages.map((item) => {
                        return (
                            <div className="banner">
                                <img className="banner__image" src={item} alt="" />
                            </div>
                        );
                    })
                }
            </Slider>
        </div>
    </>
    )
}

export default Carousel
