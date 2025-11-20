import React, { useEffect, useState } from "react";
import "../pagesstyles/home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import cart from "../assets/cart.png";
import prod1 from "../assets/products/prod1.png";
import prod2 from "../assets/products/prod2.png";
import prod3 from "../assets/products/prod3.png";
import prod4 from "../assets/products/prod4.png";
import prod6 from "../assets/products/prod6.png";
import prod8 from "../assets/products/prod8.png";
import prod9 from "../assets/products/prod9.jpeg";
import prod10 from "../assets/products/prod10.png";
import prod11 from "../assets/products/prod11.png";
import prod14 from "../assets/products/prod14.png";
import prod15 from "../assets/products/prod15.jpeg";
import prod16 from "../assets/products/prod16.jpeg";



const fallbackImages = [prod2,prod15,prod1,prod3,prod6,prod9,prod16,prod4,prod8,prod10,prod11,prod14];

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://genglow-backend.vercel.app/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="homebody">
        <div className="hometop">
          <h1>
            <span style={{ color: "green" }}>ORGANIC CARE</span>
            <br />
            GENETICALLY PERSONALIZED <br /> FOR YOUR{" "}
            <span style={{ color: "green" }}>GLOW</span>
          </h1>

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

        <div className="homemiddle">
          <h1>Unlock Your True Glow with GENGLOW</h1>
          <p>
            With a quick and easy genetic test we personalize your skincare like
            never before backed by science powered by you
          </p>

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

        <div className="homebottom">
          <h1>
            OR BUY OUR <span style={{ color: "green" }}>PRODUCTS</span>{" "}
            DIRECTLY
          </h1>

          <div className="container">
            <div className="row justify-content-center">
              {products.map((product, index) => (
                <div className="col-auto" key={product._id}>
                  <div className="wsk-cp-product">
                    <div className="wsk-cp-img">
                      <img
                        src={product.image || fallbackImages[index % fallbackImages.length]}
                        alt={product.name}
                        className="img-responsive"
                      />
                    </div>

                    <div className="wsk-cp-text">
                      <div className="category">
                        <span>{product.category}</span>
                      </div>

                      <div className="title-product">
                        <h3>{product.name}</h3>
                      </div>

                      <div className="description-prod">
                        <p>{product.description}</p>
                      </div>

                      <div className="card-footer">
                        <div className="wcf-left">
                          <span className="price">{product.price} EGP</span>
                        </div>

                        <a className="add-to-cart-btn" onClick={() => navigate(`/product/${product._id}`)} style={{ cursor: "pointer" }}>
                        <img src={cart} alt="cart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && <p>Loading products...</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
