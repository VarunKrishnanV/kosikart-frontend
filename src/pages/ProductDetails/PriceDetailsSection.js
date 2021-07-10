import React from 'react'
import styled from 'styled-components'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

function PriceDetailsSection() {
  return (
    <PriceDetails className="price__details">
      <span className="price__offer">₹675</span>
      <div>
        <span className="price__actual">₹950</span>
        <span className="price__percentage">30% OFF</span>
      </div>
      <Quantity>
        <button className="increment"><AddRoundedIcon /></button>
        <input type="text" className="quantity__input" value="1" />
        <button className="decrement"><RemoveRoundedIcon /></button>
      </Quantity>
      <ActionButtons>
        <a href="">
          <button className="addToCart" type="button">Add to cart</button>
        </a>
        <a href="">
          <button className="buyNow" type="button">Buy now</button>
        </a>
      </ActionButtons>
    </PriceDetails>
  )
}

export default PriceDetailsSection

const PriceDetails = styled.div`
  font-size : 1.6em;
  width : 30%;
  margin-top : 20px;
  margin : 20px;
  border : 2px solid #70707055;
  align-self : flex-start;
  padding : 10px;
  .price__offer{
    font-size : 2.5em;
    font-weight : 700;
    color : #0077B6;
  }
  .price__actual{
    width : 100%;
    font-size : 1.2em;
    color : #0077B6;
    text-decoration : line-through;
    margin-right : 10px;
  }
  .price__percentage{}

    @media screen and (max-width : 768px) {
    width : 80%;
    align-self : center;
  }
`

const Quantity = styled.div`
  display : flex;
  align-items :center;
  justify-content : flex-start;
  margin : 15px 0;
  .increment, .decrement{
    width : 30px;
    background : #838383;
    color : white;
    border:none;
    // font-size : 1.2em;
    vertical-align : center;
    margin : 5px;
  }
  .quantity__input{
    width : 40px;
    text-align : center;
  }
`;


const ActionButtons = styled.div`

button{
    padding: 10px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5em;
    background-color: #0077b6;
    color: white;
    border: none;
    font-weight: 500;
}
.buyNow{
  background-color : #0096C7;
}


`