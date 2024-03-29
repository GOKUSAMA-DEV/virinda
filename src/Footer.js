import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";


// const look = {
//     fontSize: 35, 
//     color: "white",
//     marginLeft: 42,
//     border: 2,
//     borderRadious: 15,

// }

const styles = {
    root: {
        fontSize: 25,
        color: "white",
        marginLeft: 42,
        border: 2,
        borderRadious: 15,
        "&:hover": {
            color: "grey"    
        }
    }
}
const useStyles = makeStyles(styles);

const Footer = () => {

    const look = useStyles();

    return <>
        <div className="parent_footer">
            <div className="main-footer">
                <div className="footer_title">
                    <h1>
                        VRINIDA
                </h1>
                </div>
                <div className="footer_mid">
                    <h1>How Was Your Experience</h1>
                    <p>Please Share Your Feedback</p>
                    <br></br>
                    <a href="mailto:gouravsahu394@gmail.com">Send</a>
                </div>
                <div className="footer_last">
                    <Link>Contact Us</Link>
                    <br></br>
                    <Link to="/blog">Blog</Link>
                    <br></br>
                </div>
            </div>
            <div className="follow-us">
                <a href="https://twitter.com/gauravsahu394"><TwitterIcon className={look.root} /></a>
                <a href="https://www.instagram.com/i.am.gaurav.sahu/"><InstagramIcon className={look.root} /></a>
                <a href="https://www.facebook.com/gourav.shau/"><FacebookIcon className={look.root} /></a>
                <a href="https://www.youtube.com/channel/UCzYyFi-DXnpuQrz_wOZKF4w"><YouTubeIcon className={look.root} /></a>

            </div>
        </div>

    </>
}

export default Footer;