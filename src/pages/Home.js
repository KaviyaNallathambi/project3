import React from 'react';
import b3 from './images/b3.jpg';
import b6 from './images/b6.jpg';
import b8 from './images/b8.jpg';
import k2 from './images/k2.webp';
import bg7   from     './images/bg7.jpg';
import bg8     from     './images/bg8.jpg';
import bg1  from './images/bg1.jpg';
import cm6 from './images/cm6.webp';
import img1 from './images/img1.jpg';
import shp from './images/shp.png';
import seq from  './images/seq.png';
import ret  from  './images/ret.png';
import sup  from  './images/sup.png';
import b11 from './images/b11.jpg';
import mc1 from './images/mc1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <div className="container-fluid">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bg7} className="d-block w-100" alt="Carousel Image 1" />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="Carousel Image 2" />
            </div>
            <div className="carousel-item">
              <img src={bg8} className="d-block w-100" alt="Carousel Image 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container-fluid features py-4">
      <center><h2>Our Delivery Process</h2></center>
  <div class="container py-5">
        <div class="row g-4">
            {/* <!-- Free Shipping Card --> */}
          <div class="col-md-6 col-lg-3">
                <div class="features-item text-center rounded bg-light p-4">
                    <div class="features-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                        <i class="fas fa-car-side fa-3x text-white"><img src={shp}/></i>
                    </div>
                    <div class="features-content">
                        <h5>Free Shipping</h5>
                        <p class="mb-0">Free on orders over $300</p>
                    </div>
                </div>
            </div>
{/* 
            <!-- Secure Payment Card --> */}
            <div class="col-md-6 col-lg-3">
                <div class="features-item text-center rounded bg-light p-4">
                    <div class="features-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                        <i class="fas fa-user-shield fa-3x text-white"><img src={seq}/></i>
                    </div>
                    <div class="features-content">
                        <h5>Security Payment</h5>
                        <p class="mb-0">100% secure payment</p>
                    </div>
                </div>
            </div>

            {/* <!-- 30-Day Return Card --> */}
            <div class="col-md-6 col-lg-3">
                <div class="features-item text-center rounded bg-light p-4">
                    <div class="features-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                        <i class="fas fa-exchange-alt fa-3x text-white"><img src={ret}/></i>
                    </div>
                    <div class="features-content">
                        <h5>30-Day Return</h5>
                        <p class="mb-0">30-day money-back guarantee</p>
                    </div>
                </div>
            </div>

            {/* <!-- 24/7 Support Card --> */}
            <div class="col-md-6 col-lg-3">
                <div class="features-item text-center rounded bg-light p-4">
                    <div class="features-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                        <i class="fas fa-phone-alt fa-3x text-white"><img src={sup}/></i>
                    </div>
                    <div class="features-content">
                        <h5>24/7 Support</h5>
                        <p class="mb-0">Fast support anytime</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<center><h3>Our Shope New Arrivals</h3></center>
<div className='s1-container'>
<img src={b3} className="card-img-top" alt="Casual Shoe 1" />
<img src={b6} className="card-img-top" alt="Casual Shoe 1" />
<img src={b8} className="card-img-top" alt="Casual Shoe 1" />
<img src={cm6} className="card-img-top" alt="Casual Shoe 1" />
<img src={bg1} className="card-img-top" alt="Casual Shoe 1" />
<img src={mc1} className="card-img-top" alt="Casual Shoe 1" />
<img src={k2} className="card-img-top" alt="Casual Shoe 1" />
<img src={b11} className="card-img-top" alt="Casual Shoe 1" />
</div>



{/* Footer Section */}
<footer className="bg-dark text-white text-center py-4">
  <div className="container">
    <div className="row">
      {/* About Us Section */}
      <div className="col-md-4 mb-3">
        <h5>About Us</h5>
        <p>
          Shopey is your one-stop destination for premium shoes. We bring you the best styles, comfort, and quality for every occasion.
        </p>
      </div>
      
      {/* Links Section */}
      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#products" className="text-white text-decoration-none">Products</a></li>
          <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
          <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
        </ul>
      </div>
      
      {/* Contact Section */}
      <div className="col-md-4 mb-3">
        <h5>Contact Us</h5>
        <p>
          Email: <a href="mailto:info@shopey.com" className="text-white">info@shopey.com</a>
        </p>
        <p>Phone: +1 (123) 456-7890</p>
        <div className="social-icons d-flex justify-content-center">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div className="border-top pt-3 mt-3">
      <p className="mb-0">&copy; 2024 Shopey. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Home;
