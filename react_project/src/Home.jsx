import React from "react";
import "./home.css";
import { FaSearch } from "react-icons/fa";
// import { GoArrowDown } from "react-icons/go";
// import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { HiArrowLongDown } from "react-icons/hi2";
import Services from "./Services";
const Home = () => {
  return (
    <>
    <div id="vinod">
      <div className="main">
        
        <div className="mainhead">
          <div className="header">
            <div className="logo">
              <img
                src="	https://store.adveits.com/project/malex/react-js/demo/assets/img/logo/logo-light.svg"
                alt="logo"
              />
            </div>
            <div className="utility">
              <ul>
                <li>
                  <a href="">SERVICES</a>
                </li>
                <li>
                  <a href="">ABOUTUS</a>
                </li>
                <li>
                  <a href="">TEAM</a>
                </li>
                <li>
                  <a href="">PRICING</a>
                </li>
                <li>
                  <a href="">TESTIMONIALS</a>
                </li>
                <li>
                  <a href="">NEWS</a>
                </li>
                <li>
                  <a href="">CONTACTS</a>
                </li>
                <button>
                  <FaSearch />
                </button>
              </ul>
            </div>
          </div>
        </div>

        <br />

        <div className="middle">
          <div className="sub">
            <h1>
              Business <br />
              Consulting Agency
            </h1>
            <br />
            <p>
              We are digital business consulting agency that helps companies
              increase
              <br />
              better incomes and help with branding for faster business
              growing.
            </p>

            <button id="lm">Learn More</button>
          </div>
        </div>


        <div className="footer">
         <div className="arrow">
         <a href="#sujith"><HiArrowLongDown /></a>
         </div>
         <div className="words" >
          <h2 className="en">EN</h2>
          <h2 className="ru">RU</h2>
         </div>
        </div>



      </div>
    </div>
    {<Services/>}
    </>
  );
};

export default Home;
