import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const look = {
    fontSize: 30, 
    color: "black",
    marginLeft: 0.1,
    marginTop: 10,
    border: 2,
    borderRadious: 15,
     
}

const Footer = () => {
    return <>
        <div className="parent_footer">
            <div className="footer_title">
                <h1>
                    VRINIDA
                </h1>
            </div>
            <div className="footer_mid">
                <h1>How Was Your Experience</h1>
                <p>Please Share Your Feedback</p>
                <br></br>
                <Link>Send</Link>
            </div>
            <div className="footer_last">
                <Link>Contact Us</Link>
                <br></br>
                <Link>Blog</Link>
                 <br></br>   
                <h1>Follow Us</h1>
                <a href="https://www.youtube.com/results?search_query=how+to+link+facebook+in+react+js+project"><TwitterIcon style={look} /></a>
                <a href="https://www.youtube.com/results?search_query=how+to+link+facebook+in+react+js+project"><InstagramIcon style={look} /></a>
                <a href="https://www.youtube.com/results?search_query=how+to+link+facebook+in+react+js+project"><FacebookIcon style={look} /></a>
                <a href="https://www.youtube.com/results?search_query=how+to+link+facebook+in+react+js+project"><HomeIcon style={look} /></a>
            </div>  
        </div>
    </>
}

export default Footer;