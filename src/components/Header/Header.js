import React from 'react'
import Categories from './Categories'
import Contact from './Contact'
import PrimaryHeader from './PrimaryHeader'
import styled from 'styled-components'

function Header() {
    return (
        <div>

            <HeaderDesktop>
                <Contact />
                <PrimaryHeader/>
                <Categories />
            </HeaderDesktop>

            <HeaderMobile>
                <Contact />
                <Categories />
                <PrimaryHeader/>
            </HeaderMobile>

        </div>
    )
}

export default Header


const HeaderDesktop = styled.div`
@media screen and (max-width : 768px){
    display: none;
}
`
const HeaderMobile = styled.div`
@media screen and (min-width : 768px){
    display: none;
}
`
