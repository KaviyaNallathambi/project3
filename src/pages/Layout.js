import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Modal, ListGroup } from 'react-bootstrap';
import cartIcon from './images/cart.png'; // Cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart state
  const [cartCount, setCartCount] = useState(0); // Notification count
  const [showCart, setShowCart] = useState(false); // Modal visibility

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setCartCount((prevCount) => prevCount + 1);
  };

  // Increment item quantity
  const incrementItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setCartCount((prevCount) => prevCount + 1);
  };

  // Decrement item quantity
  const decrementItem = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      const totalCount = prevItems.find((item) => item.id === productId)?.quantity || 0;
      if (totalCount > 1) setCartCount((prevCount) => prevCount - 1);
      return updatedItems.filter((item) => item.quantity > 0); // Remove item if quantity is 0
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      const removedItem = prevItems.find((item) => item.id === productId);
      setCartCount((prevCount) => prevCount - (removedItem?.quantity || 0));
      return updatedItems;
    });
  };

  // Calculate total amount
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        className={`gradient-navbar ${scrolled ? "navbar-scrolled" : ""}`}
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">Shopey</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/men">Men</Nav.Link>
            <Nav.Link as={Link} to="/allshoe">All Shoes</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex me-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Button onClick={() => setShowCart(true)} style={{ position: "relative" }}>
              <img src={cartIcon} alt="cart" style={{ width: '25px', height: '30px' }} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={() => setShowCart(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <>
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                      />
                      <div>
                        <p>{item.name}</p>
                        <p>
                          ${item.price} x {item.quantity} = ${item.price * item.quantity}
                        </p>
                        <div>
                          <Button size="sm" onClick={() => decrementItem(item.id)}>-</Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button size="sm" onClick={() => incrementItem(item.id)}>+</Button>
                        </div>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <h5 className="mt-3">Total: ${calculateTotal()}</h5>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCart(false)}>
            Close
          </Button>
          <Button variant="primary">Proceed to Checkout</Button>
        </Modal.Footer>
      </Modal>

      {/* Page Content */}
      <Container className="mt-5 pt-4">
      </Container>
      <Outlet context={{ addToCart }} />
    </div>
  );
};

export default Layout;
