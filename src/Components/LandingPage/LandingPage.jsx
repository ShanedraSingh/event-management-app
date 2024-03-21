import React from "react"
import "./LandingPage.css"
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate=useNavigate();
  
  const redirectToParent=()=>{
    navigate("/dineinoptions");
  };
  return (
    <>
      <div className="landing_container">
        <div className="landing_page">
          <h1>welcome to Dinein</h1>
          <p>Discover, Share and fill your appetite with love and laughter</p>
          <button className="landing_btn" onClick={()=>redirectToParent()}>Eatery World</button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
