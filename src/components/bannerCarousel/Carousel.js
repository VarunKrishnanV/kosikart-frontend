import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'
import { carouselImages } from './CarouselData'
import { carouselImagesPhone } from './CarouselData'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


const PreviousBtn = (props) => {
    const {className, onClick} = props
    return(
        <div className={className}  onClick={onClick}>
            <ArrowBackIosSharpIcon style={{color:"black"}} />
        </div>
    )
}

const NextBtn = (props) => {
    const {className, onClick} = props
    return(
        <div className={className}  onClick={onClick}>
            <ArrowForwardIosSharpIcon style={{color:"black"}} />
        </div>
    )
}

function Carousel() {

    return (
        <div>
        <div className = "carousel__container carousel__containerDesktop" >
            <Slider 
                autoplay 
                autoplaySpeed={3000} 
                dots 
                initialSlide={2} 
                infinite
                prevArrow={<PreviousBtn/>}
                nextArrow={<NextBtn/>}
                // customPaging = {
                //     (i) => {
                //         return (
                //             <div>
                //                 <img src={carouselImages[i]} style={{width:"100px", height:"100px", objectFit:"contain",}} />
                //             </div>
                //         );
                //     }
                // }
                // dotsClass = "slick-dots custom-indicator"
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

        <div className = "carousel__container carousel__containerMobile" >
            <Slider 
                autoplay 
                autoplaySpeed={3000} 
                dots 
                initialSlide={2} 
                infinite
                prevArrow={<PreviousBtn/>}
                nextArrow={<NextBtn/>}
                // customPaging = {
                //     (i) => {
                //         return (
                //             <div>
                //                 <img src={carouselImages[i]} style={{width:"100px", height:"100px", objectFit:"contain",}} />
                //             </div>
                //         );
                //     }
                // }
                // dotsClass = "slick-dots custom-indicator"
            >
                {
                    carouselImagesPhone.map((item) => {
                        return (
                            <div className="banner">
                                <img className="banner__image" src={item} alt="" />
                            </div>
                        );
                    })
                }
            </Slider>
        </div>
    </div>
    )
}

export default Carousel
