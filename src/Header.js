import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">
            VRINIDA
        </h1>
        <p className="sub-title">New Generation</p>
        <Link to="/"><HomeIcon style={{ fontSize: 50, color: "black", marginTop: -5, textAlign: "center" }} /></Link> 
      </div>
    </>
  )
}

export default Header;