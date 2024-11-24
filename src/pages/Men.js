import React from 'react';
// import { Link } from 'react-router-dom';
import cm2 from './images/cm2.webp';
import cm3 from './images/cm3.webp';
import cm4 from './images/cm4.webp';
import cm5 from './images/cm5.webp';
import cm6 from './images/cm6.webp';
import mc1 from './images/mc1.webp';
import sm1 from './images/sm1.webp';
import sm3 from './images/sm3.webp';
import sm4 from './images/sm4.webp';
import sm5 from './images/sm5.webp';
import fm1 from './images/fm1.webp';
import fm2 from './images/fm2.webp';
import fm3 from './images/fm3.webp';
import fm5 from './images/fm5.webp';
import fm6 from './images/fm6.webp';
import fm7 from './images/fm7.webp';
import fm8 from  './images/fm8.webp';
import fm10 from './images/fm10.webp';
import fm11 from  './images/fm11.webp';
import fm12 from  './images/fm12.webp';
import sam1 from './images/sam1.webp';
import sam2 from './images/sam2.webp';
import sam3 from './images/sam3.webp';
import sam4 from './images/sam4.webp';
import sam5 from './images/sam5.webp';
import sam6 from './images/sam6.webp';
import sam7 from './images/sam7.webp';
import sam9 from './images/sam9.webp';
import  cart from './images/cart.png';
import rating from  './images/rating.png';
import  m15 from './images/m15.jpg';
import m19 from  './images/m19.webp';
import m18 from  './images/m18.webp';
import sm2 from   './images/sm2.webp';
import sm7 from   './images/sm7.webp';
import sm9 from   './images/sm9.webp';
import { useOutletContext } from 'react-router-dom';
import './Men.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Men = () => {
  const { addToCart } = useOutletContext();

  const products = [
    { id: 1, name: "OFF LIMITS", image: mc1, price: 650, description: "Hachiko Shoes for Men" },
    { id: 2, name: "CULTSPORT", image: cm2, price: 700, description: "Men's Active Running Shoes" },
    { id: 3, name: "U.S. POLO ASSN.", image: cm4, price: 500, description: "Men's Sneaker" },
    { id: 4, name: "ASIAN", image: cm3, price: 500, description: "Men's Sneaker" },
    { id: 5, name: "ASIAN", image: cm6, price: 600, ratings: 3, description: "Men's Mexico-02 Casual" },
    { id: 6, name: "YOHO", image: m18, price: 790, ratings: 3, description: "Colored PU Fashion Sneaker" },
    { id: 7, name: "Red Tape", image: m19, price: 890, ratings: 4, description: "Casual Sneaker Shoes" },
    { id: 8, name: "SPARX", image: m15, price: 890, ratings: 4, description: "Men's Canvas Sneakers" }
  ];

  const productss = [
    { id: 9, name: "Zoom Shoes", image: fm5, price: 690, rating:4, description: "Leather Derby Formal Shoes" },
 { id: 10, name: "Neeman's", image: fm1, price: 840, rating:3, description: "Knit Faux Leather Sneakers" },
 { id: 11, name: "Hush Puppies", image: fm3, price: 700, rating:4, description: "HPO2 Flex Slipon Formal" },   
 { id: 12, name:  "Neeman's", image: fm2, price: 910, rating:4, description: "All Purpose Loafers Men Formal" },
 { id: 13, name: "LOUIS STITCH", image: fm8, price: 850, rating:4, description: "Loafers Formal Shoes for Men" },  
 { id: 14, name: "Bata", image: cm5, price: 770, rating:4, description: "Men Edgar Black Formal Shoes" },  
 { id: 15, name: "Hush Puppies", image: fm12, price: 920, rating:4, description: "Men's Taylor Slip ON E Formal" },  
 { id: 16, name: "PROVOGUE", image: fm11, price: 900, rating:4, description: "Slip On For Men" },  
  ];
  
  const sportsShoes = [
    { id: 17, name: 'ASICS', price: 700, description: "Men's Gel-Contend 4B+ Running", image: sm9, ratings: 4 },
    { id: 18, name: 'Bacca Bucci', price: 780, description: "Men's Energy Afterburn Disruptor", image: sm1, ratings: 5 },
    { id: 19, name: 'Red Tape', price: 880, description: 'Athleisure Sport Shoes for Men', image: sm5, ratings: 3 },
    { id: 20, name: 'Puma', price: 900, description: 'Unisex Electron 2.0 Sport Sneaker', image: sm4, ratings: 4 },
    { id: 21, name: 'SPARX', price: 800, description: "Men's Mesh Running Shoe", image: sm3, ratings: 4 },
    { id: 22, name: 'CLYMB', price: 890, description: 'Lace up Waterproo', image: sm2, ratings: 5 },
    { id: 23, name: 'BRUTON', price: 890, description: 'Trendy Sports Running', image: sm7, ratings: 3 },
    { id: 24, name: ' BIRDE', price: 890, description: ' Men Premium Comfortable Reg', image: sm9, ratings: 4 },
  ];
  const sandalsAndFloaters = [
    { id: 25, name: "WALKAROO", image: sam1, price: 700, description: "Mens Roman Sandals formalwear" },
    { id: 26, name: "Bata", image: sam2, price: 750, description: "LUCIUS MULE Brown Casual Slipon" },
    { id: 27, name: "Khadim's", image: sam3, price: 600, description: "Washable Clog Sandal for Men" },
    { id: 28, name: "Campus", image: sam4, price: 800, description: "Men's Water-Resistant" },
    { id: 29, name: "Hush Puppies", image: sam5, price: 670, description: "Men's Miles Mule E Slipper" },
    { id: 30, name: "Khadim's", image: sam6, price: 590, description: " Casual Slip On Sandal for Men" },
    { id: 31, name: "BRUTON", image: sam7, price: 780, description: "Mens Roman Sandals formalwear" },
    { id: 32, name: "UNDERROUTE", image: sam9, price: 800, description: "Men Sandall" }, 
  ];

  return (
    <div className="men-container">
      <div className="vertical-menu">
        <a href="#collections" className="active">Men's Collections</a>
        <a href="#casual">Casual Shoes</a>  
        <a href="#formal">Formal Shoes</a>
        <a href="#sport">Sports Shoes</a>
        <a href="#sandal">Sandals & Floaters</a>
        <div className="category-section">
          <h5>Category</h5>
          <form>
            <div>
              <input type="radio" id="nike" name="brand" value="Nike" />
              <label id='r2' name="nike">Nike ($800-600)</label>
            </div>
            <div>
              <input type="radio" id="adidas" name="brand" value="Adidas" />
              <label id='r3' name="adidas">Adidas ($600-400)</label>
            </div>
            <div>
              <input type="radio" id="puma" name="brand" value="Puma" />
              <label id='r4' name="puma">Puma ($400-200)</label>
            </div>
            <div className="color-selection" style={{ marginBottom: '8px' }}>
              <h5>Color</h5>
              <div>
                <input type="checkbox" id="black" name="color" value="Black" />
                <label id='c1' name="black">Black</label>
              </div>
              <div>
                <input type="checkbox" id="white" name="color" value="White" />
                <label id='d2' name="white">White</label>
              </div>
              <div>
                <input type="checkbox" id="blue" name="color" value="Blue" />
                <label id='c3' name="blue">Blue</label>
              </div>
              <div>
                <input type="checkbox" id="red" name="color" value="Red" />
                <label id='c4' name="red">Red</label>
              </div>
            </div>
            <div className="size-selection" style={{ marginBottom: '8px' }}>
              <h5>Discount</h5>
              <div>
                <input type="checkbox" id="discount-50" name="size" value="6" />
                <label id='d1' name="discount-50">50% or more</label>
              </div>
              <div>
                <input type="checkbox" id="discount-40" name="size" value="7" />
                <label id='d2' name="discount-40">40% or more</label>
              </div>
              <div>
                <input type="checkbox" id="discount-30" name="size" value="8" />
                <label id='d3' name="discount-30">30% or more</label>
              </div>
              <div>
                <input type="checkbox" id="discount-20" name="size" value="9" />
                <label id='d1' name="discount-20">20% or more</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      

      <div className="section-content">
        {/* Casual Shoes Section */}
        <h2 id="casual" style={{ textAlign: 'center', marginBottom:'30px' }}>Casual Shoes</h2>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-img-container">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="overlay">
                  <h4>Add To Cart</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6>
                  ${product.price}
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                </h6>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)} // Add to Cart functionality
                >
                  Buy Now
                  <img src={cart} alt="cart" />
                </button>
              </div>
            </div>
          ))}
          </div>
   {/* Formal Shoes Section */}
   <h2 id="formal" style={{ textAlign: 'center', marginTop:'30px', marginBottom:'30px' }}>Formal Shoes</h2>
    <div className="card-container">
      {productss.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-img-container">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="overlay">
              <h4>Add To Cart</h4>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6>${product.price} 
            <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
            </h6>
            <p className="card-text">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Buy Now
              <img src={cart} alt="cart" />
            </button>
          </div>
        </div>
      ))}
{/* Sports Shoes Section */}
<h2 id="sport" style={{ alignItems:'center',paddingLeft:'400px' }}>Sports Shoes</h2>
<div className="card-container">
  {sportsShoes.map((product) => (
    <div className="card" key={product.id}>
      <div className="card-img-container">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
        />
        <div className="overlay">
          <h4>Add To Cart</h4>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6>${product.price} 
        <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
        </h6>
        <p className="card-text">{product.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Buy Now
          <img src={cart} alt="cart" />
        </button>
      </div>
    </div>
  ))}
{/* Sandals & Floaters Section */}
<h2 id="sandal" style={{ alignItems:'center', paddingLeft:'400px' }}>Sandals & Floaters</h2>
<div className="card-container">
  {sandalsAndFloaters.map((product) => (
    <div className="card" key={product.id}>
      <div className="card-img-container">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
        />
        <div className="overlay">
          <h4>Add To Cart</h4>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6>${product.price}
        <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
                  <img src={rating} alt="rating" style={{ width: "20px", height: "20px" }} />
           
        </h6>
        <p className="card-text">{product.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Buy Now
          <img src={cart} alt="cart" />
        </button>
      </div>
    </div>
  ))}
</div>
</div>
</div>
</div>
</div>


  );
};

export default Men; 