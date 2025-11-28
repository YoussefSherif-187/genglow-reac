import React, { useEffect, useState } from "react";
import "../pagesstyles/singleproduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";
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



const fallbackImages = [prod1, prod2, prod3, prod4, prod6, prod8, prod9, prod10,prod11, prod14, prod15 , prod16];


const Singleproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  


  useEffect(() => {
    axios
      .get(`https://genglow-backend.vercel.app/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const fallbackIndex =
    id
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0) % fallbackImages.length;
  const image = product.image || fallbackImages[fallbackIndex];


const placeOrder = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please sign in to place an order.");
      return;
    }

    const data = qs.stringify({
      "products[0][product]": product._id || product.id,
      "products[0][quantity]": 1
    });

    const res = await axios.post(
      "https://genglow-backend.vercel.app/api/orders",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    alert("Order placed successfully!");
    console.log(res.data);

  } catch (error) {
    console.log("Order Error:", error.response?.data || error);
    alert(error.response?.data?.error || "Failed to place order");
  }
};




  return (
    <div className='singleproduct'>
<div class="sinprod-container">
  <div class="sinprod-left-section">
    <img src={image}
  alt="Example img" />
    <p class="sinprod-left-text">{product.name}</p>
  </div>

  <div class="sinprod-right-section">
    <div class="sinprod-text-blockup">Description: {product.description}</div>
    <div class="sinprod-text-blockdown">Price:{product.price} EGP</div>
    <button className="order-btn" onClick={placeOrder}>
  Place Order
</button>

  </div>
</div>

    </div>
  )
}

export default Singleproduct