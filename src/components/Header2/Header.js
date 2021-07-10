import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" className="logo" />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__option header__optionBasket">
                    <ShoppingBasketOutlinedIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>

        </div>
    );
}

export default Header;
