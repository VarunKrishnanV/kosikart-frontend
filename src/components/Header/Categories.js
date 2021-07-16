import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import MenuIcon from '@material-ui/icons/Menu';

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const categories = [
  "Engineering",
  "Competitive",
  "Polytechnic",
  "Stationeries and tools",
  "AKU questions bank",
  "School books",
  "Study materials",
  "Others",
];

function Categories() {
  {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".dropdown-menu").forEach(function (element) {
        element.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      });

      if (window.innerWidth < 768) {
        document
          .querySelectorAll(".navbar .dropdown")
          .forEach(function (everydropdown) {
            everydropdown.addEventListener("hidden.bs.dropdown", function () {
              this.querySelectorAll(".submenu").forEach(function (
                everysubmenu
              ) {
                everysubmenu.style.display = "none";
              });
            });
          });

        document
          .querySelectorAll(".dropdown-menu a")
          .forEach(function (element) {
            element.addEventListener("click", function (e) {
              let nextEl = this.nextElementSibling;
              if (nextEl && nextEl.classList.contains("submenu")) {
                e.preventDefault();
                console.log(nextEl);
                if (nextEl.style.display == "block") {
                  nextEl.style.display = "none";
                } else {
                  nextEl.style.display = "block";
                }
              }
            });
          });
      }
    });
  }

  return (
    <Container>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            
            
            
            <div className="mobile__left">
              <div
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </div>

              <a className="navbar-brand" href="#" className="mobile__logo">
                {" "}
                <img src={logo} style={{ width: "100px" }} />
              </a>
            </div>




            <div className="mobile__right">
              <a href="" className="mobile__item login">
                Login
              </a>

              <Buttons>
                <li className="cart">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "3em" }} />
                  <span className="itemCount">1</span>
                </li>
              </Buttons>
            </div>






            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Competative{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        UPSC{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        BPSC{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        RRB{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        State Services{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Handbooks{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        GATE{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        ESE{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        SSC{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        NEET{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        JEE{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Agriculture{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Management{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        General Competition{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        IBPS{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    AKU Questions Bank{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Computer Science Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Mechanical Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Civil Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electronics and Comm. Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electrical Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Information Technology &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Leather Technology &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electrical and Electronics Engineering &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 6
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Semester 8
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Engineering Books{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Computer Science Engineering & IT{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electrical, Electronics & Comm. Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Mechanical Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Civil Engineering{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Polytechnic{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electrical, Electronics and Comm. Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Computer Science Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Mechanical Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Civil Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electrical Engineering{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Electronics and Comm. Engineering{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Books{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Mathematics{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Physics{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Chemistry{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Biology{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        NCERT{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Other Subjects{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Stationeries{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Stationery{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Engineering Tools{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Others{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Garments{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Study Materials{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Matric{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Inter{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        B.A.,{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        B.Com.,{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        B.Sc.,{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        BBA{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        IGNOU{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        NIOS{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Novels{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Magazines{" "}
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item mobile__item">
                  <a class="nav-link" href="#">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>

                <li class="nav-item mobile__item">
                  <a class="nav-link" href="#">
                    {" "}
                    Terms and Conditions{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Categories;

const Buttons = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 0;
  color: white;
  font-size: 11px;

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
      background: #ffffff;
      color: #0e0e0e;
      border-radius: 50%;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.nav`
  background: #353535;
  font-size: 1.6em;
  padding: 3px;

  .mobile__left, .mobile__right{
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .mobile__left .navbar-toggler{
    color: white;
    border : none;
    outline : none;
    padding : 0;
    margin-right : 20px;
  }
  .mobile__right .login{
      margin-right : 20px;
  }


  .login {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
  .mobile__item {
    display: none;
    @media all and (max-width: 768px) {
      display: block;
    }
  }
  .mobile__logo {
    display: none;
    @media all and (max-width: 768px) {
      display: block;
    }
  }

  a:hover {
    /* background-color: skyblue; */
  }

  @media all and (min-width: 992px) {
    * {
      margin: 0;
      padding: 0;
    }

    .dropdown-menu li {
      position: relative;
    }
    .dropdown-menu .submenu {
      display: none;
      position: absolute;
      left: 100%;
      top: -7px;
    }
    .dropdown-menu .submenu-left {
      right: 100%;
      left: auto;
    }

    .dropdown-menu > li:hover {
      background-color: #f1f1f1;
    }
    .dropdown-menu > li:hover > .submenu {
      display: block;
    }

    .bg-primary {
      background-color: #353535 !important;
    }

    .dropdown-menu li {
      padding: 3px 10px;
    }
  }

  @media (max-width: 991px) {
    .dropdown-menu .dropdown-menu {
      margin-left: 0.7rem;
      margin-right: 0.7rem;
      margin-bottom: 0.5rem;
    }
  }
`;
