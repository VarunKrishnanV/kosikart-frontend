import React from 'react'
import styled from 'styled-components';
import requestBook from './requestBook.svg'

// icons
import PhoneIcon from '@material-ui/icons/Phone';

function Contact() {

    return (
        <div>
            <Container>
                <div className="contact__mobile">
                    <PhoneIcon style={{fontSize : "16px", marginRight : ".5em"}}/>
                    (+91) 94720 09151
                </div>
                <ContactMenu className="contact__menu">
                    <ul>
                        <li className="requestBook">
                            <a href="#">
                                <img src={requestBook} alt="" />
                                Request Book
                            </a>
                        </li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </ContactMenu>
                
            </Container>

            
        </div>
    )
}

export default Contact

const Container = styled.div`
    background-color : #CAF0F8;
    display : flex;
    align-items: center;
    justify-content: space-between;
    color : #0077B6;
    font-size : 1.6em;
    font-weight : 500;
    padding : .3em 2em;
    .contact__menu ul{
        margin-bottom : 0;
    }
    .contact__mobile{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const ContactMenu = styled.div`
    ul{
        display:flex;
        align-items: center;
        justify-content: center;
        
        .requestBook a{
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width : 1.5em; 
                margin-right : .5em;
            }
    }

    li{
        list-style-type : none;
        padding: 0em 1em;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

`