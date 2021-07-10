import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import styled from 'styled-components'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

function ReviewSection() {
    return (
        <Container className="container">

            <RatingContainer>
                <h1>Ratings and reviews</h1>

                <div className="value">
                    <div className="valueContainer">
                        <span className="ratingValue">4.5</span>
                        <StarRateIcon className ="ratingStarIcon"/>
                    </div>
                    <span className="valueDescription">343 Rating Ratings &amp; 68 Reviews</span>
                </div>

                <div className="progressContainer">
                    <div className="ratingScale">
                        5<StarRateIcon />
                        <progress value="23" max="100"></progress>
                        <span className="percentage">20%</span>
                    </div>
                    <div className="ratingScale">
                        4<StarRateIcon />
                        <progress value="53" max="100"></progress>
                        <span className="percentage">20%</span>
                    </div>
                    <div className="ratingScale">
                        3<StarRateIcon />
                        <progress value="63" max="100"></progress>
                        <span className="percentage">20%</span>
                    </div>
                    <div className="ratingScale">
                        2<StarRateIcon />
                        <progress value="10" max="100"></progress>
                        <span className="percentage">20%</span>
                    </div>
                    <div className="ratingScale">
                        1<StarRateIcon />
                        <progress value="5" max="100"></progress>
                        <span className="percentage">20%</span>
                    </div>
                </div>
            </RatingContainer>


            <ReviewContainer>
                <a href=""><button className="writeReview">Write your review</button></a>
                <Review>
                    <ReviewHeading>
                        <span className="rating">
                            5<StarRateIcon className="icon" />
                        </span>
                        <span className="reviewHeading">Must have book</span>
                    </ReviewHeading>
                    <ReviewContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu quis facilisis eget purus congue dignissim dignissim facilisis. Quis ipsum vel erat porttitor. Vulputate sit orci tristique vel ultrices tortor mattis.
                    </ReviewContent>
                    <ReviewDetails>
                        <div className="ReveiwerNameDate">
                            <span className="reviewerName">
                                Yash Agarwal
                            </span>
                            <span className="dateOfReview">
                                10/10/2020
                            </span>
                        </div>
                        <div className="likeDislike">
                            <div className="like">
                                <button><ThumbUpAltIcon className="icon"/>56</button>
                            </div>
                            
                            <div className="dislike">
                                <button><ThumbDownAltIcon className="icon"/>10</button>
                            </div>
                        </div>
                    </ReviewDetails>
                </Review>
                <Review>
                    <ReviewHeading>
                        <span className="rating">
                            5<StarRateIcon className="icon" />
                        </span>
                        <span className="reviewHeading">Must have book</span>
                    </ReviewHeading>
                    <ReviewContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu quis facilisis eget purus congue dignissim dignissim facilisis. Quis ipsum vel erat porttitor. Vulputate sit orci tristique vel ultrices tortor mattis.
                    </ReviewContent>
                    <ReviewDetails>
                        <div className="ReveiwerNameDate">
                            <span className="reviewerName">
                                Yash Agarwal
                            </span>
                            <span className="dateOfReview">
                                10/10/2020
                            </span>
                        </div>
                        <div className="likeDislike">
                            <div className="like">
                                <button><ThumbUpAltIcon className="icon"/>56</button>
                            </div>
                            
                            <div className="dislike">
                                <button><ThumbDownAltIcon className="icon"/>10</button>
                            </div>
                        </div>
                    </ReviewDetails>
                </Review>
                <Review>
                    <ReviewHeading>
                        <span className="rating">
                            5<StarRateIcon className="icon" />
                        </span>
                        <span className="reviewHeading">Must have book</span>
                    </ReviewHeading>
                    <ReviewContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu quis facilisis eget purus congue dignissim dignissim facilisis. Quis ipsum vel erat porttitor. Vulputate sit orci tristique vel ultrices tortor mattis.
                    </ReviewContent>
                    <ReviewDetails>
                        <div className="ReveiwerNameDate">
                            <span className="reviewerName">
                                Yash Agarwal
                            </span>
                            <span className="dateOfReview">
                                10/10/2020
                            </span>
                        </div>
                        <div className="likeDislike">
                            <div className="like">
                                <button><ThumbUpAltIcon className="icon"/>56</button>
                            </div>
                            
                            <div className="dislike">
                                <button><ThumbDownAltIcon className="icon"/>10</button>
                            </div>
                        </div>
                    </ReviewDetails>
                </Review>
                <ViewAllReview>
                    <a href=""><button>View All Reviews</button></a>
                </ViewAllReview>
            </ReviewContainer>
        </Container>
    )
}

export default ReviewSection

const Container = styled.div`
    display : flex;
    margin-top :5em;
    font-size : 1.6em;
    @media only screen and (max-width : 768px){
        flex-direction : column;
    }
`


const RatingContainer = styled.div`
    padding : 2em;
    h1{
        font-size : 1.3em;
        font-weight : 500;
    }

    .valueContainer{
        display : flex;
        align-items : center;
        justify-content: flex-start;
    }
    .ratingValue{
        font-size : 4em;
        font-weight : 700;
    }
    .ratingStarIcon{
        font-size : 4em;
        margin-top : 10px;
        color : #0077B6;
    }
    .valueDescription{
        display:inline-block;
        margin-top : -150px;
    }



    .ratingScale{
        display : flex;
        align-items : center;

        progress{
            height : 30px;
            margin-left :10px; 
            color : red;     
            background-color: "orange";
        }

        .percentage{
            font-weight : 500;
            margin-left :10px;      
        }
    }
`
const ReviewContainer = styled.div`
    padding : 2em;
    width : 80ch;
    .writeReview{
        padding : 5px 20px;
        background : #0077B6;
        color : white;
        border : none;
        border-radius : 4px;
    }

        @media only screen and (max-width : 768px){
        width : auto;
    }


`
const Review = styled.div`
    margin-top : 3em;
`
const ReviewHeading = styled.div`
    .rating{
        background : #CAF0F8;
        color : #0077B6;
        font-weight : 700;
        padding : 1px 3px;
        display : inline-flex;
        align-items : center;
        justify-content : center;
    }
    .reviewHeading{
        font-weight : 700;
        margin-left : 10px;
        font-size :1.1em;
    }
`
const ReviewContent = styled.p`
    margin-top : 10px;
    @media only screen and (max-width : 768px){
        margin-bottom : 5px;
    }
`
const ReviewDetails = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    justify-content : space-between;
    
    .ReveiwerNameDate{
        color : #7E7E7E;
        font-weight : 500;
    }
    .dateOfReview{
        margin-left : 20px;
    }

    .likeDislike{
        font-size : 14px;
        display : flex;
        
        .like, .dislike{
            margin-left : 20px;
            @media only screen and (max-width : 768px){
                margin-left : 0;
            }
        }
        .dislike{
            margin-left : 20px;          
        }
        
        button{
            font-weight : 500;
            color : #404040;
            background : #D8D8D8;
            padding : 3px 5px;
            border-radius : 4px;
            display : flex;
            // align-items : center;
            justify-content : center;
            border : none;
            border : 1px solid #AEAEAE;
            .icon{
                margin-right : 5px;
            }
        }
        @media only screen and (max-width : 768px){
                margin-top : 10px;
        }
    }
`
const ViewAllReview = styled.div`
    margin-top : 1.5em;
    button{
        padding : 5px 10px;
        border-radius : 4px;
        border: none;
        background : #D8D8D8;
        border : 1px solid #AEAEAE;
    }

`













