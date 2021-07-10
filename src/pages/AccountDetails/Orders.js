import React from 'react'
import styled from 'styled-components'
import book from '../../assets/images/products/product1.png'
import ShareIcon from '@material-ui/icons/Share';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

function Orders() {
    return (
        <Container>
            <h1>My Orders</h1>
            <Order>
                <OrderDetails>
                <div className="detailsLeft">
                    <div className="date">
                        <div className="line1">ORDER PLACED</div>
                        <div className="line2">12 April 2021</div>
                    </div>
                    <div className="total">
                        <div className="line1">TOTAL</div>
                        <div className="line2">₹1000</div>
                    </div>
                    <div className="shipTo">
                        <div className="line1">SHIP TO</div>
                        <div className="line2">Varun Krishnan</div>
                    </div>
                </div>
                <div className="orderId">
                    <div className="line1">ORDER #123123123</div>
                    <div className="line2">Get invoice</div>
                </div>
            </OrderDetails>

            {/* <CartItemContainer> */}
                <CartItem>
                    <ItemDetails>
                        <img src={book} alt="" />
                        <div>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <div className="itemPrice">₹675</div>
                                <p>Quantity : 1</p>
                            </div>
                            <div className="deleteShare">
                                <button className="shareIcon">
                                    <ShareIcon className="icon" />
                                </button>
                            </div>
                        </div>
                    </ItemDetails>
                    <TrackMyOrder>

                        <div className="buttons">
                            <button className="btn btn-primary">Track my order</button>
                            <button className="btn btn-primary">Review &amp; Rating</button>
                        </div>
                        <div>
                            <div class="row d-flex justify-content-center">

                                <div class="col-12">
                                    <ul id="progressbar" class="text-center">
                                        <li class="active step0">Processing</li>
                                        <li class="active step0">Packed</li>
                                        <li class="active step0">Shipped</li>
                                        <li class="step0">Delivered</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TrackMyOrder>
                </CartItem>
            {/* </CartItemContainer> */}
            </Order>
            <Order>
                <OrderDetails>
                <div className="detailsLeft">
                    <div className="date">
                        <div className="line1">ORDER PLACED</div>
                        <div className="line2">12 April 2021</div>
                    </div>
                    <div className="total">
                        <div className="line1">TOTAL</div>
                        <div className="line2">₹1000</div>
                    </div>
                    <div className="shipTo">
                        <div className="line1">SHIP TO</div>
                        <div className="line2">Varun Krishnan</div>
                    </div>
                </div>
                <div className="orderId">
                    <div className="line1">ORDER #123123123</div>
                    <div className="line2">Get invoice</div>
                </div>
            </OrderDetails>

            {/* <CartItemContainer> */}
                <CartItem>
                    <ItemDetails>
                        <img src={book} alt="" />
                        <div>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <div className="itemPrice">₹675</div>
                                <p>Quantity : 1</p>
                            </div>
                            <div className="deleteShare">
                                <button className="shareIcon">
                                    <ShareIcon className="icon" />
                                </button>
                            </div>
                        </div>
                    </ItemDetails>
                    <TrackMyOrder>

                        <div className="buttons">
                            <button className="btn btn-primary">Track my order</button>
                            <button className="btn btn-primary">Review &amp; Rating</button>
                        </div>
                        <div>
                            <div class="row d-flex justify-content-center">

                                <div class="col-12">
                                    <ul id="progressbar" class="text-center">
                                        <li class="active step0">Processing</li>
                                        <li class="active step0">Packed</li>
                                        <li class="step0">Shipped</li>
                                        <li class="step0">Delivered</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TrackMyOrder>
                </CartItem>
            {/* </CartItemContainer> */}
            </Order>
            <Order>
                <OrderDetails>
                <div className="detailsLeft">
                    <div className="date">
                        <div className="line1">ORDER PLACED</div>
                        <div className="line2">12 April 2021</div>
                    </div>
                    <div className="total">
                        <div className="line1">TOTAL</div>
                        <div className="line2">₹1000</div>
                    </div>
                    <div className="shipTo">
                        <div className="line1">SHIP TO</div>
                        <div className="line2">Varun Krishnan</div>
                    </div>
                </div>
                <div className="orderId">
                    <div className="line1">ORDER #123123123</div>
                    <div className="line2">Get invoice</div>
                </div>
            </OrderDetails>

            {/* <CartItemContainer> */}
                <CartItem>
                    <ItemDetails>
                        <img src={book} alt="" />
                        <div>
                            <div>
                                <h6>GATE 2022: Mechanical Engineering Previous Year Solved Papers</h6>
                                <div className="itemPrice">₹675</div>
                                <p>Quantity : 1</p>
                            </div>
                            <div className="deleteShare">
                                <button className="shareIcon">
                                    <ShareIcon className="icon" />
                                </button>
                            </div>
                        </div>
                    </ItemDetails>
                    <TrackMyOrder>

                        <div className="buttons">
                            <button className="btn btn-primary">Track my order</button>
                            <button className="btn btn-primary">Review &amp; Rating</button>
                        </div>
                        <div>
                            <div class="row d-flex justify-content-center">

                                <div class="col-12">
                                    <ul id="progressbar" class="text-center">
                                        <li class=" step0">Processing</li>
                                        <li class=" step0">Packed</li>
                                        <li class=" step0">Shipped</li>
                                        <li class="step0">Delivered</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TrackMyOrder>
                </CartItem>
            {/* </CartItemContainer> */}
            </Order>


        </Container>
    )
}

export default Orders

const Order = styled.div`
    border : 1px solid gray;
    width: 100%;
    margin-top: 20px;
`

const OrderDetails = styled.div`
    width : 100%;
    padding: 15px;
    background : #f1f1f1;
    display : flex;
    justify-content: space-between;
    .line1{
        font-size : .7em;
    }
    .line2{
        font-weight : 600;
    }
    .detailsLeft{
        display: flex;
    }
    .date, .total, .shipTo{
        margin-right : 4em;
        @media all and (max-width : 768px){
            margin : 10px;
            font-size: .8em;
        }
    }
    .orderId{
        @media all and (max-width : 768px){
            margin : 10px;
            font-size: .8em;
        }
    }
    @media all and (max-width : 768px){
    justify-content: flex-start
    }

    
`


const Container = styled.div`
    /* background : #eaffb2; */
    margin : 3em;
    display : flex;
    flex-direction: column;
    flex-wrap : wrap;
    align-items : flex-start;
    justify-content : space-between;

    h1{
        font-size : 1.6em;
        font-weight : 700;
        @media all and (max-width : 768px){
            margin-left : 20px;
        }
    }
    @media all and (max-width : 768px){
        margin : 0;
    }
`

const CartItem = styled.div`
width: 100%;
display : flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
padding : 15px;
border-bottom : 1px solid #bfbfbf;
    img{
        width : 150px;
        object-fit : contain;
    }
@media all and (max-width : 768px){
    justify-content: center;
}

`

const ItemDetails = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    h6{
        font-size : 18px;
        line-height : 1.3;
        @media all and (max-width : 768px){
            font-size : 16px;
        }
    }
    .itemPrice{
        font-size : 1em;
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
        .icon{
            font-size : 1.3em;
            color : #000;
        }
        @media all and (max-width : 768px){
            margin-left : 10px;
        }
    }

`

const TrackMyOrder = styled.div`
.buttons{
    display: flex;
    flex-direction: column;
    button{
        margin: 10px;
        background-color: #0077B6;
    }
}
    .card {
    z-index: 0;
    background-color: #ECEFF1;
    padding-bottom: 20px;
    margin-top: 90px;
    margin-bottom: 90px;
    border-radius: 10px;
    width : 300px;
}

.top {
    padding-top: 40px;
    padding-left: 13% !important;
    padding-right: 13% !important
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: #455A64;
    padding-left: 0px;
    margin-top: 30px;
    width : 300px;
}

#progressbar li {
    list-style-type: none;
    font-size: 13px;
    width: 25%;
    float: left;
    position: relative;
    font-weight: 400
}

#progressbar .step0:before {
    font-family: FontAwesome;
    content: "\f10c";
    color: #fff
}

#progressbar li:before {
    width: 40px;
    height: 40px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    background: #C5CAE9;
    border-radius: 50%;
    margin: auto;
    padding: 0px
}

#progressbar li:after {
    content: '';
    width: 100%;
    height: 12px;
    background: #C5CAE9;
    position: absolute;
    left: 0;
    top: 16px;
    z-index: -1
}

#progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    left: -50%
}

#progressbar li:nth-child(2):after,
#progressbar li:nth-child(3):after {
    left: -50%
}

#progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    left: 50%
}

#progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px
}

#progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: #0077B6
}

#progressbar li.active:before {
    font-family: FontAwesome;
    content: "\f00c"
}
`




