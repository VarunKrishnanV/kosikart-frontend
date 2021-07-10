import React from 'react'
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate'
import DetailsCarousel from '../../components/DetailsCarousel/DetailsCarousel'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined'

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import DetailsSection from './DetailsSection'
import PriceDetaislSection from './PriceDetailsSection'
import ReviewSection from './ReviewSection'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function ProductDetailsPage() {


  return (
    <>
      <DetailsContainer>


        {/* <ImageContainer> */}
        <Carousel className="productcarousel__container">
          <div className="likeShare">
            <Share className="share"><FavoriteIcon/></Share>
            <AddToFav className="addToFav"><ShareIcon/></AddToFav>
          </div>
          <DetailsCarousel />
        </Carousel>


        {/* </Products details> */}
        <DetailsSection />


        {/* </Price details> */}
        <PriceDetaislSection />
          

      </DetailsContainer>

      <ProductCarousel heading={"Products related to this item"} />

      <ReviewSection />

    </>
  )
}

export default ProductDetailsPage

const Share = styled.button``
const AddToFav = styled.button``

const DetailsContainer = styled.div`
width : 100%;
display: flex;
margin-top :4em;
// overflow-x : hidden;
@media only screen and (max-width : 800px){
  flex-direction : column;
}
`

const Carousel = styled.div`
  width : 40%;
  margin-top : 0;
  @media screen and (max-width : 768px) {
    width : 100%  
  }
  .likeShare{
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 5em;
    button{
      padding : 10px;
      border-radius : 50%;
      background : #CAF0F8;
      border : none;
      color : #0077B6;
    }
  }
}

`