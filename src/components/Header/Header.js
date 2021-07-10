import React from 'react'
import Categories from './Categories'
import Contact from './Contact'
import PrimaryHeader from './PrimaryHeader'

function Header() {
    return (
        <div>
            <Contact />
            <PrimaryHeader/>
            <Categories />
        </div>
    )
}

export default Header
