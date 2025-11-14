import React from 'react'
import "../pagesstyles/home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div class="homebody">
      <div class="hometop">
      <h1><span style={{ color: 'green' }}>ORGANIC CARE</span><br/> GENETICALLY PERSONALIZED <br/> FOR YOUR <span style={{ color: 'green' }}>GLOW</span></h1>
 
<div className="home-cta">
          <button
            type="button"
            className="btn-quiz"
            onClick={() => navigate("/requestsample")}
          >
            TRY SAMPLE NOW
          </button>
        </div>
    
      </div>
      <div class="homemiddle">
        <h1>Unlock Your True Glow with GENGLOW</h1>
        <p>With a quick and easy genetic test we personalize your skincare like never before backed by science powered by you</p>
        <div className="home-cta">
          <button
            type="button"
            className="btn-quiz"
            onClick={() => navigate("/genquiz")}
          >
            TAKE GENETIC QUIZ
          </button>
        </div>
      </div>


        
      </div>
    </div>
  )
}

export default Home