 import React from 'react'
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate'
import DetailsCarousel from '../../components/DetailsCarousel/DetailsCarousel'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined'

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

function DetailsSection() {
    return (
        <div>
            <Details>
          <h1 className="product__heading">
            GATE 2022: Mechanical Engineering Previous Year Solved Papers
          </h1>

          <p className="product__author">
            by MADE EASY Editorial Board (Author)
          </p>

          <RatingReview className="product__ratingReview">
            <span className="rating">
              5<StarRateIcon className="icon" />
            </span>
            <span className="review">500 Reviews</span>
          </RatingReview>

          <Price className="price">
            <span className="price__offer">₹675</span>
            <span className="price__actual">₹950</span>
            <span className="price__percentage">30% OFF</span>
          </Price>

          <Offers className="product__offers">
            <h6>Special Offers</h6>
            <ul className="offers">
              <li className="offer">
                <LocalOfferOutlinedIcon className="tagIcon" />
                3% Extra Discount On Cart Amount RS ₹200 and Above
              </li>
              <li className="offer">
                <LocalOfferOutlinedIcon className="tagIcon" />
                5% Extra Discount On Cart Amount RS ₹300 and Above
              </li>
              <li className="offer">
                <LocalOfferOutlinedIcon className="tagIcon" />
                7% Extra Discount On Cart Amount RS ₹700 and Above
              </li>
            </ul>
          </Offers>

          <Description className="product__descriptions">
            <h6>Description</h6>
            <ul className="description__list">
              <li className="description__item">Competition</li>
              <li className="description__item">B.Tech</li>
              <li className="description__item">
                GATE 2022: Mechanical Engineering ( MADE EASY) 35 years question
                papers
              </li>
              <li className="description__item">
                This book contains all previous year questions subjectwise.
              </li>
            </ul>
            <p className="product__showmore">Show more...</p>
          </Description>
        </Details>
        </div>
    )
}

export default DetailsSection



const DetailsContainer = styled.div`
  width : 100%;
  display: flex;
  margin-top :4em;
  // overflow-x : hidden;
  @media only screen and (max-width : 800px){
    flex-direction : column;
  }
`
const Details = styled.div`
  font-size: 1.6em;
  padding : 5px;

  .product__heading {
    font-size: 1.6em;
      @media screen and (max-width : 768px) {
        margin-top: 5em;
      }
  }

  .product__author {
    color: #707070;
    margin-bottom: 0;
  }

      @media screen and (max-width : 768px) {
        margin : 1.5em;
      }

`

const RatingReview = styled.div`
  margin-top: 0;
  font-weight: 400;

  .rating {
    background-color: #caf0f8;
    padding: 0px 3px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    margin: 10px 0;
    margin-right: 10px;
    font-weight: 500;
    color: #0077b6;
    .icon {
      font-size: 16px;
    }
  }

  .review {
    color: #0077b6;
  }
`
const Price = styled.div`
  margin-bottom: 2em;
  .price__offer {
    font-weight: 600;
    color: #0077b6;
    font-size: 1.8em;
    margin-right: 10px;
  }
  .price__actual {
    text-decoration: line-through;
    margin-right: 5px;
  }
  .price__percentage {
  }
`

const Offers = styled.div`
  h6{
    font-size : 18px;
  }
  .offers {
    list-style-type: none;
    padding: 0;
  }
  .offer {
    font-size : 16px;
  }
  .tagIcon {
    color: #0077b6;
    font-size: 1.4em;
    margin-right: 5px;
  }

`

const Description = styled.div`
h6{

  font-size : 18px;
}

margin-top : 2em;;
    .product__showmore{
      padding-left : 32px;
      margin-top : -10px;
      color : #0077B6;
  }
`
