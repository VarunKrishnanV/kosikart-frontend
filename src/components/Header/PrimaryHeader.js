import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function PrimaryHeader() {
  return (
    <Container>
        <a href="/">
      <Logo src={logo} />
        </a>
      <Search>
        <form action="">
          <input
            type="search"
            name=""
            id=""
            placeholder="Try Engineering books , GATE Books"
          />
          <button type="submit">
            <SearchIcon style={{ fontSize: "1em" }} />
          </button>
        </form>
      </Search>

      <Buttons>
        <li className="login btn">
          <a href="/login">Login</a>
        </li>
        <li className="register btn">
          <a href="/signup">Register</a>
        </li>
        <li className="cart">
          <ShoppingCartOutlinedIcon style={{ fontSize: "3em" }} />
          <span className="itemCount">1</span>
        </li>
      </Buttons>
    </Container>
  );
}

export default PrimaryHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
`;

const Logo = styled.img`
  width: 15em;
  @media screen and (max-width : 768px){
      display: none;
  }
`;

const Search = styled.div`
  flex: 0.7;
  border: 2px solid #0077b6;
    @media screen and (max-width : 768px){
      flex: 1;
  }

  form {
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4em;
  }

  input {
    flex: 1;
    height: 100%;
    font-size: 1.4em;
    padding: 0.5em;
    // border : 2px solid #00bcd4;
    border: none;
    outline: none;
  }

  button {
    height: 100%;
    font-size: 2em;
    padding: 5px 10px;
    border: none;
    background-color: #0077b6;
    color: white;
  }
`;

const Buttons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 0;

  li {
    padding: 0 0.5em;
    a {
      text-decoration: none;
      color: white;
      font-size: 1em;
    }
  }

  .btn {
    padding: 0.5em 1em;
    margin: 5px;
    border-radius: 4px;
    background-color: #0077b6;
    font-weight: 500;
  }

  .login {
    background-color: #fff;
    border: 1px solid #0077b6;
    a {
      color: #0077b6;
    }
  }
  .register {
  }

  .cart {
    position: relative;
    .itemCount {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: -3px;
      right: 5px;
      text-align: center;
      background: #000;
      color: #fff;
      border-radius: 50%;
      font-weight: 700;
    }
  }

@media screen and (max-width : 768px){
      display: none;
  }
`;
