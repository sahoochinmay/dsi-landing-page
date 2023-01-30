import React from "react";
// import logo from "../assets/images/logo.svg";
import logo from "../assets/images/logo-wiser.png";
import moment from "moment";
import FontAwesome from 'react-fontawesome'

const Footer = () => {
  return (
    <section className=" contact" style={{ background: "#094D94", color: "white", padding: "0" }}>
      <section className="container" >
        <div className="threeRow">

          <div className="contactWrapper rowLeft " style={{ textAlign: "center" }}>
            <img src={logo} alt="" srcSet="" width="170px" />
            <h3>SPA Wiser Global Communication</h3>

            <ul>
              <li>Sareg CLS 03 GRP 446 Loc N°5</li>
              <li>1<sup>st</sup> Floor B2 N°Lot 23  </li>
            </ul>
          </div>

          <div className="contactWrapper rowMiddle" id="contact" style={{ paddingTop: "20px", textAlign: "center" }}>
            <p style={{ color: "#47C8E3" }}>Contact</p>

            <ul>
              {/* <li style={{marginBottom:"10px"}}><FontAwesome
                name="phone"
                size="x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', border: "1px solid white",borderRadius:"5px" , padding:"2px 5px",marginRight:"10px" }}
              />
              +62.21.5314.1135</li> */}
              <li>
              <FontAwesome
                name="at"
                size="x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', border: "1px solid white",borderRadius:"5px" , padding:"2px 5px",marginRight:"10px" }}
              />
              contact@wisergc.com</li>
            </ul>
          </div>

          <div className="contactWrapper rowRight" style={{ paddingTop: "20px", textAlign: "center" }}>
            <p style={{ color: "#47C8E3" }}>Follow us</p>

            <ul>
              <li>
                <a href="https://www.facebook.com/SARLWGC/" style={{color:"#fff"}}>
                <FontAwesome
                name="facebook"
                size="x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', border: "1px solid white",borderRadius:"5px" , padding:"2px 5px",marginRight:"10px" }}
              />
                  </a>
                  <a href="https://dz.linkedin.com/company/sarl-wiser-global-communication" style={{color:"#fff"}}>
                  <FontAwesome
                name="linkedin"
                size="x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',borderRadius:"5px" , border: "1px solid white", padding: "2px" }}
              />
                  </a>
              
              </li>
            </ul>
          </div>

        </div>
        {/* <div className="threeRow">
          <div className="contactWrapper rowLeft">
            <img src={logo} alt="" srcSet="" width="170px" />
            <h3>PT Dwidasa Samsara Indonesia</h3>

            <ul>
              <li>Ruko Jalur Sutera 29A No. 53</li>
              <li>Alam Sutera Serpang, Tangerang 15323</li>
            </ul>
          </div>

          <div className="contactWrapper rowRight">
            <div className="contactWrapper connect rowMiddle">
              <p>Contact</p>

              <ul>
                <li>Phone:+62.21.5314.1135</li>
                <li>Fax:+62.21.5314.1135</li>
                <li>Email:community@dwidasa.com</li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
      <section id="footer" style={{ background: "#47C8E3", }}>
        <p style={{ width: "100%", textAlign: "center" }}>Copyrights &copy; {moment().year()} - SPA Wiser Global Communication</p>
      </section>
    </section>
  );
};

export default Footer;
