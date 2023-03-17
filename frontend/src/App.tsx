import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }


  return (
    <div className="grid-container">

      <head>
        <link rel="stylesheet" href="style.css" />
        <title>Operation: Draconic Beat</title>
      </head>

      <body>
        <div>
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <a href="index.html">Operation: Draconic Beat</a>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="login.html">Login</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">All Products</a>
              </li>
              <li>
                <a href="index.html">Shirts</a>
              </li>
              <li>
                <a href="index.html">Pants</a>
              </li>
              <li>
                <a href="index.html">Shoes</a>
              </li>
            </ul>
          </aside>
          <main className="main">
            <ul className="products">
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="d1 " />
                  <div className="product-name">
                    <a href="product.html">d1 Shirt</a>
                  </div>
                  <div className="product-brand">d1 </div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="d1 " />
                  <div className="product-name">
                    <a href="product.html">d1 Shirt</a>
                  </div>
                  <div className="product-brand">d1 </div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="d1 " />
                  <div className="product-name">
                    <a href="product.html">d1 Shirt</a>
                  </div>
                  <div className="product-brand">d1 </div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="d1 " />
                  <div className="product-name">
                    <a href="product.html">d1 Shirt</a>
                  </div>
                  <div className="product-brand">d1 </div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
            </ul>
          </main>
          <footer className="footer">
            &copy; 2023 Operation: Draconic Beat
          </footer>
        </div>
      </body>
    </div>
  );
}

export default App;
