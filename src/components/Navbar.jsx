import { useState } from "react";

const Navbar = ({cartProducts, setCartProducts, showPreview, setShowPreview}) => {

  const [secondaryNav, setSecondaryNav] = useState(false);

  function handleSecondaryNav() {
    setSecondaryNav(!secondaryNav);
  }
  function showCart() {
    setShowPreview(prevState => !prevState)
  }
  function emptyCart() {
    setCartProducts([]);
  }
  function getCartContent() {
    if (cartProducts > 0) {
      return (
        <div>
          <div>
            <img src="./images/image-product-1-thumbnail.jpg" alt="Product" />
            <p>Fall Limited Edition Sneakers <br /> {cartProducts > 1 ? `125$ x ${cartProducts}` : '125$'} <span>{cartProducts > 1 ? `${125 * cartProducts}$` : '125$'}</span></p>
            <img onClick={emptyCart} className="trash" src="./images/icon-delete.svg" alt="Delete Icon" />
          </div>
          <button className="btn">Checkout</button>
        </div>
      );
    } else {
      return <p className="empty">Your cart is empty!</p>;
    }
  }

  return (
    <header>
      <div className="container">
        <div className="box">
          {/* Logo with links */}
          <div className="left-side">
            <a href="#" className="burger" onClick={() => handleSecondaryNav()}>
              <img src={secondaryNav ? "./images/icon-close.svg" : "./images/icon-menu.svg"} alt="Close Icon" />
            </a>
            {/* Logo */}
            <a href="#" id="logo">
              <img src="./images/logo.svg" alt="Logo" />
            </a>
            {/* Nav with links */}
            <nav className="primary-nav" id={secondaryNav ? 'secondary-nav' : ''}>
              <ul role='list' className="nav-list">
                <li className="nav-list-item"><a className="nav-link" href="#">Collections</a></li>
                <li className="nav-list-item"><a className="nav-link" href="#">Men</a></li>
                <li className="nav-list-item"><a className="nav-link" href="#">Women</a></li>
                <li className="nav-list-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-list-item"><a className="nav-link" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/* Cart icon and avatar */}
          <div className="right-side">
            {/* Cart */}
            <a className="icon cart" href="#" onClick={showCart}>
              <img src="./images/icon-cart.svg" alt="Cart Icon"/>
              <div className="cart-items">{cartProducts > 0 ? cartProducts : ''}</div>
              {
                showPreview ? (
                  <div className="cart-preview">
                    <div className="cart-preview-header">
                      <p>Cart</p>
                    </div>
                    <div className="cart-product">
                      {getCartContent()}
                    </div>
                  </div>
                ) : false
              }
            </a>

            {/* Avatar */}
            <a className="icon avatar" href="#"><img src="./images/image-avatar.png" alt="Avatar" /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;