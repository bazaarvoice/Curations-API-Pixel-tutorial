import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
      super(props); 
    }
  render() {
    return (
      
      <header>
        <div id="tablet-top-bar" className="row align-middle hide-for-small-only">
          <div className="column">
            <a href="">Our Story</a>
            <a href="">Where to Buy</a>
          </div>
          <div className="column">
              <a className="go-to-cart" href="">Shopping Bag</a>
              <a href="/confirmation" className="icon-cart-light"></a>
            
          </div>
        </div>
        <div id="logo-bar" className="row align-middle">
          <div className="column small-1">
            <span className="sprite icon-menu" data-open="offCanvasLeft" aria-expanded="false" aria-controls="offCanvasLeft"></span>
          </div>
          <div className="column small-10 logos">
            <a href="#">
              <span className="sprite calia-logo-small show-for-small-only"></span>
              <span className="sprite calia-logo-medium show-for-medium-only"></span>
              <span className="sprite calia-logo-large show-for-large"></span>
            </a>
          </div>
          <div className="column small-1">
            <a className="sprite icon-cart-dark" href="/OrderItemDisplay"></a>
          </div>
        </div>
        <div id="tablet-bottom-bar" className="row hide-for-small-only">
          <ul>
              <li>
                <a href="#">Cans</a>
              </li>
              <li>
                <a href="#">Bottles</a>
              </li>
              <li>
                <a href="#">Growlers</a>
              </li>
              <li>
                <a href="#">Kegs</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gear</a>
              </li>
              <li>
                <a href="#">Sale Items</a>
              </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;