import React from 'react'
import "../pagesstyles/home.css"
import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.png"
import prod1 from "../assets/products/prod1.png"
import prod2 from "../assets/products/prod2.png"
import prod3 from "../assets/products/prod3.png"
import prod4 from "../assets/products/prod4.png"
import prod8 from "../assets/products/prod8.png"
import prod6 from "../assets/products/prod6.png"
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
      <div class="homebottom">
        <h1>OR BUY OUR <span style={{ color: 'green' }}>PRODUCTS</span> DIRECTLY</h1>

        <div class="container">
  <div class="row justify-content-center">
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod1} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Skin Care</span>
            </div>
            <div class="title-product">
              <h3>Herb Cleanser</h3>
            </div>
            <div class="description-prod">
              <p>A gentle foaming gel enriched with chamomile and green tea extracts to remove impurities, calm redness, and maintain skin hydration.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">220 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod2} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Skin Care</span>
            </div>
            <div class="title-product">
              <h3>Glow Serum</h3>
            </div>
            <div class="description-prod">
              <p>Brightening serum powered by stabilized vitamin C, and niacinamide for an even-toned, radiant complexion.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">480 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod3} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Skin Care</span>
            </div>
            <div class="title-product">
              <h3>Repair Cream</h3>
            </div>
            <div class="description-prod">
              <p>Barrier-strengthening moisturizer formulated with squalane, oat peptides, and aloe to deliver smooth, long-lasting hydration.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">590 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod4} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Skin Care</span>
            </div>
            <div class="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div class="description-prod">
              <p>Gel-cream mask infused with bakuchiol, centella asiatica, and an antioxidant herbal blend to support night-time skin renewal.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">350 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod8} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Hair Care</span>
            </div>
            <div class="title-product">
              <h3>Scalp Oil</h3>
            </div>
            <div class="description-prod">
              <p>Herbal oil blend featuring argan, rosemary, and fenugreek to nourish the scalp, reduce breakage, and enhance natural shine.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">260 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>
    <div class="col-auto">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={prod6} alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Hair Care</span>
            </div>
            <div class="title-product">
              <h3>Repair Shampoo</h3>
            </div>
            <div class="description-prod">
              <p>Strengthening shampoo with fenugreek, nettle extract, and panthenol to cleanse gently while supporting stronger, healthier hair.</p>
            </div>
            <div class="card-footer">
              <div class="wcf-left"><span class="price">420 EGP</span></div>
               <a class="add-to-cart-btn" href="/shop" aria-label="View cart" title="View cart">
    <img src={cart} alt="" />
  </a>
            </div>
          </div></div>
    </div>  
  </div>
         </div>
      </div>


        
      </div>
    </div>
  )
}

export default Home