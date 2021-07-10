import React from 'react'
import styled from 'styled-components'
import book from '../../assets/images/products/product1.png'
import ShareIcon from '@material-ui/icons/Share';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

function Checkout() {
    return (
        <>
            <Container>
                <CartItemContainer>
                    <h1>Shopping Cart</h1>
                    <CartItem>
                        <input type="checkbox" name="" class="check" />
                        <img src={book} alt="" />
                        <ItemDetails>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <Quantity>
                                    <button className="increment"><AddRoundedIcon className="icon" /></button>
                                    <input type="text" className="quantity__input" />
                                    <button className="decrement"><RemoveRoundedIcon className="icon" /></button>
                                </Quantity>
                                <div className="itemPrice">₹675</div>
                            </div>
                                <div className="deleteShare">
                                    <button className="itemDelete">
                                        Remove
                                    </button>
                                    <button className="shareIcon">
                                        <ShareIcon className="icon" />
                                    </button>
                                </div>
                        </ItemDetails>
                    </CartItem>
                    <CartItem>
                        <input type="checkbox" name="" class="check" />
                        <img src={book} alt="" />
                        <ItemDetails>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <Quantity>
                                    <button className="increment"><AddRoundedIcon className="icon" /></button>
                                    <input type="text" className="quantity__input" />
                                    <button className="decrement"><RemoveRoundedIcon className="icon" /></button>
                                </Quantity>
                                <div className="itemPrice">₹675</div>
                            </div>
                                <div className="deleteShare">
                                    <button className="itemDelete">
                                        Remove
                                    </button>
                                    <button className="shareIcon">
                                        <ShareIcon className="icon" />
                                    </button>
                                </div>
                        </ItemDetails>
                    </CartItem>
                    <CartItem>
                        <input type="checkbox" name="" class="check" />
                        <img src={book} alt="" />
                        <ItemDetails>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <Quantity>
                                    <button className="increment"><AddRoundedIcon className="icon" /></button>
                                    <input type="text" className="quantity__input" />
                                    <button className="decrement"><RemoveRoundedIcon className="icon" /></button>
                                </Quantity>
                                <div className="itemPrice">₹675</div>
                            </div>
                                <div className="deleteShare">
                                    <button className="itemDelete">
                                        Remove 
                                    </button>
                                    <button className="shareIcon">
                                        <ShareIcon className="icon" />
                                    </button>
                                </div>
                        </ItemDetails>
                    </CartItem>
                </CartItemContainer>

                <PriceDetails>
                    <div className="category">
                        <span className="title">Price (2 items)</span>
                        <span className="price">₹1350</span>
                    </div>
                    <div className="category">
                        <span className="title">Discount</span>
                        <span className="price">₹125</span>
                    </div>
                    <div className="category">
                        <span className="title">Price</span>
                        <span className="price">₹125</span>
                    </div>
                    <hr />
                    <div className="category category__total">
                        <span className="title">Total</span>
                        <span className="price">₹1600</span>
                    </div>
                    <button className="btn btn-primary" style={{background : "#0077B6", fontSize : "1.1em", marginTop : "1em" }}>Proceed to Buy</button>
                </PriceDetails>
            </Container>


        </>
    )
}

export default Checkout


const Container = styled.div`
    margin : 3em;
    display : flex;
    flex-wrap : wrap;
    align-items : flex-start;
    justify-content : space-between;

    h1{
        font-size : 3em;
        font-weight : 700;
        @media all and (max-width : 768px){
            margin-left : 20px;
        }
    }
    @media all and (max-width : 768px){
        margin : 0;
    }
`

const CartItemContainer = styled.div`
    // margin-top : 4rem;
`
const CartItem = styled.div`

display : flex;
padding : 15px;
border-bottom : 1px solid #bfbfbf;

    input.check{
        align-self : center;
        // width : 20px;
        // height : 20px;
        margin-right : 30px;
        margin-right : 10px
        @media screen and (max-width : 768px){
            // height : 50px;
            // width : 50px;
        }
    }
    img{
        width : 150px;
        object-fit : contain;
    }


`

const ItemDetails = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    h6{
        font-size : 18px;
        line-height : 1.3;
        @media all and (max-width : 768px){
            font-size : 16px;
        }
    }
    .itemPrice{
        font-size : 1.9em;
        font-weight : 700;
        color : #0077B6;
    }
    .deleteShare{
        display : flex;
        align-items : center;
        justify-content : flex-start;
    }
    .itemDelete{
        color : #9E0000;
        font-size : 14px;
        background-color : transparent;
        border: none;
        @media all and (max-width : 768px){
            margin-left : 10px;
        }
    }
    .shareIcon{
        border : none;
        padding:5px;
        border-radius : 50%;
        background-color : #CAF0F8;
        margin-left : 40px;
        .icon{
            font-size : 1.9em;
            color : #000;
        }
        @media all and (max-width : 768px){
            margin-left : 10px;
        }
    }

`
const Quantity = styled.div`
  display : flex;
  align-items :center;
  justify-content : flex-start;
  margin : 15px 0;
  
  .increment, .decrement{
    width : 20px;
    background : #838383;
    color : white;
    border:none;
    font-size : 10px;
    vertical-align : center;
    margin : 5px;
    border-radius : 4px;

    .icon{
        font-size : 1.8em;
    }
}
.quantity__input{
    font-size : 1.6em;
    padding : 2px;
    width : 40px;
    text-align : center;
  }
`;


const PriceDetails = styled.div`
    border : 1px solid #0077B6;
    background : #F3FDFF;
    width : 30%;
    padding :20px;
    display : flex;
    flex-direction : column;
    font-weight : 500;
    font-size : 1.8em;

    hr{
        margin-bottom : 0;
    }
    .category{
        display : flex;
        justify-content : space-between;
        align-items : center;
        .price{
            color: #0077B6;
        }
    }
    .category__total{
        

        .price{
            font-size : 1.8em;
        } 
    }

    @media all and (max-width : 768px){
        width : 80%;
        margin-top : 30px;
        margin-left : auto;
        margin-right : auto;

    }

`


