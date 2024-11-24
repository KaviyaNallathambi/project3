import React from 'react';
// import cm2 from './images/cm2.webp';
// import cm3 from './images/cm3.webp';
import b1  from  './images/b1.jpg';
import b2  from  './images/b2.jpg';
import b3  from  './images/b3.jpg';
import b4  from  './images/b4.jpg';
import b5  from  './images/b5.jpg';
import b6  from  './images/b6.jpg';
import b7  from  './images/b7.jpg';
import b8  from  './images/b8.jpg';
import b11  from  './images/b11.jpg';
import w3  from  './images/w3.webp';
import ba1 from   './images/ba1.jpg'
import ba2 from   './images/ba2.jpg';
import k8  from  './images/k8.webp';
import w1  from   './images/w1.jpeg'
import cart from './images/cart.png';
import w9 from  './images/w9.webp';
import sm3 from  './images/sm3.webp';
import  m8m from  './images/m8m.jpg';
import  sm5  from  './images/sm5.webp';
import m8mm from  './images/m8mm.jpg';
import sm4 from './images/sm4.webp';
// import rating from  './images/rating.png';
import { useOutletContext } from 'react-router-dom';
import './allshoe.css';
// import { SiHtml5 } from 'react-icons/si';

const Allshoe = () => {
  const { addToCart } = useOutletContext();
  const products = [
    {
      id: 1,
      name: "BRUTON",
      image: b4,
      price: 990,
      description: "Stylish and comfortable casual shoes.",
      ratings: 3,
    },
    {
      id: 2,
      name: "SPARX",
      image: b2,
      price: 900,
      description: "Men's Mesh White Casual Sneaker Formal Shoes in Men.",
      ratings: 5,
    },
    {
      id: 3,
      name: "LANCER",
      image: b3,
      price: 750,
      description: "Mens Indus-215 Sports Velcro Sneakers Shoes.",
      ratings: 4,
    },
    {
      id: 4,
      name: "HEALTH FIT",
      image: b5,
      price: 800,
      description: "Orthopedic & Diabetic Sports Shoes.",
      ratings: 4,
    },
    {
      id: 5,
      name: "CAMPUS",
      image: b11,
      price: 1100,
      description: "Flash 2.0 Nexon-03 Sports Running, Badminton Shoes.",
      ratings: 4,
    },
    {
      id: 6,
      name: "Nivia",
      image: b6,
      price: 800,
      description: "TripStar  Downshifter Shoes 13Nike Downshifter Sports Shoes",
      ratings: 4,
    },
    {
      id: 7,
      name: "Bourge",
      image: b7,
      price: 920,
      description: "Mens Akron Memory Foam Comfort Loire Running Shoess",
      ratings: 4,
    },
    {
      id: 8,
      name: "Layasa",
      image: b8,
      price: 1050,
      description: " Casual Lace Up Sneaker, Trigger Walking Superior Casual Shoes.",
      ratings: 5,
    },
    {
      id: 9,
      name: "ATHCO",
      image: w9,
      price: 900,
      description: "Mens Kandy Dynamite Walking Memory Foam Comfort",
      ratings: 3,
    },
     {
      id: 10,
      name: "BOOMER CUBS",
      image: k8,
      price: 800,
      description: " Lace Hachiko Ethylene VRunning Shoes For Boys",
      ratings: 4,
    },
    {
      id: 11,
      name: "BUCADIA",
      image: ba1,
      price: 1050,
      description: "Lace Sneakers Roger Running Shoes For Girls",
      ratings: 4,
    },
     {
      id: 12,
      name: "DOCTOR EXTRA SOFT",
      image: w3,
      price: 800,
      description: "Men's Sports Roger Running Lace Sneakers Shoes",
      ratings: 4,
    },
  {
      id: 13,
      name: "Trendmode",
      image: ba2,
      price: 1200,
      description: "Lace Sneakers Men Slip Cushion For Boys & Girls",
      ratings: 5,
    },
     {
      id: 14,
      name: "HEALTH FIT",
      image: w1,
      price: 950,
      description: "Orthopedic & Diabetic Sports Shoes",
      ratings: 4,
    },
 {
      id: 15,
      name: "Boldfit",
      image: sm5,
      price: 850,
      description: "Walking Shoes for Men Slip Cushion Shoes",
      ratings: 4,
    },
    {
      id: 16,
      name: "ASIAN",
      image: sm3,
      price: 900,
      description: "Walking Shoes for Men Slip Cushion Shoes",
      ratings: 4.5,
    },
{
      id: 17,
      name: "ATHCO",
      image: sm4,
      price: 1050,
      description: "Men's Kandy  On for Men Cushion Black Running Shoes",
      ratings: 5,
    },
    {
      id: 18,
      name: "Bacca Bucci",
      image: m8mm,
      price: 1200,
      description: "Men's Energy Afterburn Disruptor for Multiple",
      ratings: 4,
    },
        {
      id: 19,
      name: "BRUTON",
      image: m8m,
      price: 1200,
      description: "Men's Sport Men Slip On for Men Cushion Shoes Casual Shoe",
      ratings: 4,
    },
       {
      id: 20,
      name: "RED TAPE ",
      image: b1,
      price: 1200,
      description: "Lace Sneakers Men Slip Cushion For Boys & Girls",
      ratings: 4,
    },
    // Add other products here...
  ];

  // Function to display stars based on rating
  const renderRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? 'gold' : 'gray' }}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="section-content">
      <h3 id="casual" style={{ textAlign: 'center', marginBottom:'15px' }}>All Shoes</h3>
      <div className="card-container">
        {products.map((product) => (
          <div className="card flip-card" key={product.id}>
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <h5 className="card-title">{product.name}</h5>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p className="card-text mt-3">{product.description}</p>
                <h5 className="card-title mt-0">
                  ${product.price}
                  <div>
                    {/* Render stars based on rating */}
                    {renderRating(product.ratings)}
                  </div>
                </h5>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => addToCart({ ...product, price: product.price })}
                >
                  Add to cart <img src={cart} alt="cart" style={{ width: '25px', height: '25px' }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allshoe;
