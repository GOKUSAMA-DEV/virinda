import React from "react";
import A from "./Blog/A.jpg";


const Blog = (props) => {
  return (
    <>
    <div className="blog">
      <h1 className="my-journey">My Journey</h1>
      <div className="education-main">
      <div className="journey">
        <h2>Education</h2>
        <p className="year"><i>Year</i> 2013</p>
        <p>10<sup>th</sup> completed from C.B.S.E Delhi.</p>
        <p className="year"><i>Year</i> 2015</p>
        <p>12<sup>th</sup> completed from C.B.S.E, "Commerce Stream" Delhi. </p>
      </div>
      <div className="journey">
      <h2>Education</h2>
        <p className="year"><i>Year</i> 2015-2019</p>
        <p><b>1.</b> I have completed my Software Engineering from NIIT Janakpuri.</p>
        <p className="year"><i>Year</i> 2015-2019</p>
        <p><b>2.</b> I have completed my Graduation from SOL (B.A Programme).</p>
      </div>
      <div className="journey">
      <h2>Work AT</h2>
        <p><i>Year</i> May 2019-May 2021</p>
        <p><b>Noida</b></p>
        <p>I have 2 years experience in Magic Software in UI based project.</p>
      </div>
      </div>
      <div className="blog-front"><img src={A} /></div>
      </div>
    </>
  )
}

export default Blog;
