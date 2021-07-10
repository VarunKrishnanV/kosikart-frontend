import React from 'react'
import styled from 'styled-components'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const categories = [
    'Engineering',
    'Competitive',
    'Polytechnic',
    'Stationeries and tools',
    'AKU questions bank',
    'School books',
    'Study materials',
    'Others'
]

function Categories() {
    return (
        <Container>
            <CategoryItems class="category__items">
                {
                    categories.map(item => {
                        return (
                            <li>
                                <a href='#'>
                                    {item}
                                    <KeyboardArrowDownIcon style={{ display: "inlineBlock", marginTop: "5px" }} />
                                </a>
                            </li>
                        );
                    })
                }
            </CategoryItems>
        </Container>
    )
}

export default Categories

const Container = styled.nav`
    background : #353535;
    font-size : 1.6em;
    padding : 3px;
    @media all and (max-width:768px){
        display : none;
    }
`

const CategoryItems = styled.ul`
    display : flex;
    list-style-type : none;
    justify-content : space-around;
    margin-bottom : 0;
    padding : 5px;

    a{
        display:flex;
        align-items : center;
        justify-contet: center;
        text-decoration: none;
   color: #fff;
   

    }

    li{

    }
`
