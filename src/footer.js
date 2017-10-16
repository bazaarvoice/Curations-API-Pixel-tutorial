import React, { Component } from 'react';
import $scriptjs from 'scriptjs';

class Footer extends Component {

  componentDidMount() {
  }


  render() {
    return (

      <footer>
        <div>
          <span className="sprite footer-icon"></span>
        </div>
        <div id="stay-the-path">
          Curations Cantina
        </div>
        <div id="footer-breadcrumbs" role="navigation" aria-label="secondary">
          <ul>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <br className="show-for-small-only" />
            <li>
              <a href="#">Terms of Use</a>
            </li>            
            <li>
              <a href="#" className="feedback" title="Site Feedback">Site Feedback</a>
            </li>
          </ul>
        </div>
        <div id="footer-social">
          <ul>
            <li>
              <a href="#" target="_blank" title="Facebook Link">
                <span className="sprite facebook"></span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title="Twitter Link">
                <span className="sprite twitter"></span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title="Pinterest Link">
                <span className="sprite pinterest"></span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title="Instagram Link">
                <span className="sprite instagram"></span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" title="YouTube Link">
                <span className ="sprite youtube"></span>
              </a>
            </li>
          </ul>
        </div>
        <div id="footer-phone">
          <a href="tel:5125516000" aria-label="Click to call">(512) 551-6000</a>
        </div>
        <div id="footer-copyright">Bazaarvoice inspired</div>
      </footer>
    );
  }
}
export default Footer;