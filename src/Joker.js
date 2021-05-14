import React, { useState } from "react";
import A from "../src/Panting/A.jpg";

const Joker = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItems] = useState([]);
  
  const itemEvent = (e) =>{
    setInputList(e.target.value)
   
  }
  const addComment = (e) => {
    e.preventDefault();
    if (!inputList) {
      alert("entery your thoughts");
      console.log("entery your thoughts");
    }
    else{
      setItems((oldItems) =>{
        return [...oldItems, inputList]
      })
    }
    
  }

  return (
    <>
      <div className="joker">
        <div className="left-joker">
          <img src={A} />
        </div>
        <div className="right-joker">
          <p>
            It is a long established fact that a reader
            will be distracted by the readable content of
            a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
                </p>
        </div>
      </div>
      <div className="comment-box">
        <h1 className="thoughts">Your Thoughts</h1>
        
          <div className="form">
            <form>
            <input type="text" placeholder="please enter your thoughts" onChange={itemEvent} required />              
            <button onClick={addComment}>Thoughts</button>
            <ol className="comment-display">
              {/* <li>{inputList}</li> */}
              {
                item.map((itemval) =>{
                  return <li>{itemval}</li>
                })
              }
            </ol>
            </form>
          </div>
        
      </div>
    </>
  )
}

export default Joker;
