import React from 'react'
import './Home.css'
import Carousel from './bannerCarousel/Carousel'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'

function Home() {
    return (
        <div className="home">
            {/* Caraousel */}
            <Carousel />
            <ProductCarousel heading={"Stationeries"}/>
            <ProductCarousel heading={"Get our latest products"}/>
            <ProductCarousel heading={"Competative"}/>
            <ProductCarousel heading={"University Question Banks"}/>
        </div>
    )
}

export default Home
