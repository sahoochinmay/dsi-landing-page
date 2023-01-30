import React from "react";
// import logo from "../assets/images/logo.svg";
import logo from "../assets/images/logo-wiser.png";
import bar from "../assets/images/bar.svg";

const Nav = () => {
  return (
    <nav style={{background:"#094D94", color:"white"}}>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <img id="btn" src={bar} />
        <i className="fa fa-times" id="cancel"></i>
      </label>
      <section className="navContainer">
        <img id="logo" src={logo} style={{height:"75px",position:"relative",left:"0" }} />
      
        <section className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" style={{textDecoration:"none",color:"#fff"}}>About</a></li>
            {/* <li className="nav-item">Services</li> */}
            <li className="nav-item"><a href="#products" style={{textDecoration:"none",color:"#fff"}}>Services</a></li>
            <li className="nav-item"><a href="#contact" style={{textDecoration:"none",color:"#fff"}}>Contact</a></li>
          </ul>
        </section>
        
      </section>
    </nav>
  );
};

export default Nav;
