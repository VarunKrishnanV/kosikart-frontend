import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { carouselImages } from './CarouselData'
import { carouselImagesPhone } from './CarouselData'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';


const PreviousBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosSharpIcon style={{ color: "black" }} />
        </div>
    )
}

const NextBtn = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosSharpIcon style={{ color: "black" }} />
        </div>
    )
}

function Carousel() {

    return (
        <Container>
            <div className="carousel__container carousel__containerDesktop" >
                <Slider
                    autoplay
                    autoplaySpeed={3000}
                    dots
                    initialSlide={2}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
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

            <div className="carousel__container carousel__containerMobile" >
                <Slider
                    autoplay
                    autoplaySpeed={3000}
                    dots
                    initialSlide={2}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
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
        </Container>
    )
}

export default Carousel

const Container = styled.div`
.carousel__container{
    margin: 30px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    @media all and (max-width : 768px){
        width : 100%;
        margin : 0;
    }
}
.banner__image{
    width: 100%;
}

/* .slick-prev:hover:before, .slick-prev:focus:before, .slick-next:hover:before, .slick-next:focus:before{
    background-color: orange;
    width: 40px;
    height: 40px;
    z-index: 2;
} */
.slick-arrow.slick-prev, .slick-arrow.slick-next{
    background-color: #00bcd4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @media all and (max-width : 768px){
       width : 30px;
       height : 30px;
    }
}

.slick-prev{
    left: 0;
    @media all and (max-width : 768px){
       left : 10px;
    }
}
.slick-next{
    right: 0;
    @media all and (max-width : 768px){
       right : 20px;
    }
}

.slick-prev::before, .slick-next::before{
    display: none;
}
.custom-indicator li{
    width: 100px;
    height: 100px;
    object-fit: contain;
    filter: grayscale(100%);
}

.custom-indicator{
    top : 100%;
}
.custom-indicator li.slick-active{
    filter: grayscale(0%);
}

.carousel__container.carousel__containerMobile{
    display: none;
}
.carousel__container.carousel__containerDesktop{
    display: block;
}

@media screen and (max-width : 768px) {
    
    .carousel__container.carousel__containerMobile{
        display: block;
    }
    .carousel__container.carousel__containerDesktop{
        display: none;
    }
}
`


