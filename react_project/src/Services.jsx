import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Services.css";
function Services() {
  return (
    <div id="sujith">
      <div id="serv">
        <div id="services">
          <div className="cards">
            <img src="/camel.png" alt="" className="ser_img" />
            <h4>Strategic Planning</h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <div className="arrow">
              <IoIosArrowRoundForward />
              {/* <p className="tool">READ MORE</p> */}
            </div>
          </div>
          <div className="cards">
            <img src="/person.png" alt="" className="ser_img" />
            <h4>Consulting & Marketing</h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <div className="arrow">
              <IoIosArrowRoundForward />
              {/* <p className="tool">READ MORE</p> */}
            </div>
          </div>
          <div className="cards">
            <img src="/file.png" alt="" className="ser_img" />
            <h4>Financial</h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <div className="arrow">
              <IoIosArrowRoundForward />
              {/* <p className="tool">READ MORE</p> */}
            </div>
          </div>
        </div>
      </div>
      <div id="abt">
        <div id="about">
          <div id="about1">
            <h6>ABOUT US</h6>
          </div>
          <div id="cont">
            <div id="cont1">
              <h2>Keep Your Business Safe & Ensure <br />High Availability</h2>
              <div id="sign">
                <div>
                  <img src="/sign.png" alt=""  className="sign"/>
                </div>
                <div>
                  <h5>Tom Henders</h5>
                  <p>CEO of Company</p>
                </div>
              </div>
            </div>
            <div id="cont2">
              <p>
                A business consulting agency is involved in the planning,
                implementation, and education of businesses. We work directly
                with business owners on developing a business plan, identifying
                marketing needs and developing the necessary skills for business
                ownership.
              </p>
              <p>
                Marketing consultant is an advisor who works with companies to
                create and implement marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
