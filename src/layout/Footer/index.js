/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import React from 'react';

// Components
import {
  FooterMenu,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  RSSIcon,
} from '../../components';

// Instruments
import './index.scss';
import footerMenu from './footerMenu.json';
import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import americanExpress from '../../images/american-express.png';
import discover from '../../images/discover.png';

const Footer = () => {
  const footerMenuJSX = footerMenu.map((menu, i) => {
    return (
      <div key={ i } className="footer-left__menu-item-wrapper">
        <FooterMenu {...menu} />
      </div>
    );
  });

  return (
    <footer className="footer-backstage">
      <div className="content">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-left__menu-wrapper">
              {footerMenuJSX}
            </div>
          </div>

          <div className="footer-right-wrapper">
            <div className="footer-right">
              <h6 className="footer-right__title">Stay Connected</h6>

              <ul className="footer-right__connections">
                <li className="footer-right__connections-item">
                  <a className="footer-right__connections-link" href="#">
                    <FacebookIcon />
                  </a>
                </li>

                <li className="footer-right__connections-item">
                  <a className="footer-right__connections-link" href="#">
                    <TwitterIcon />
                  </a>
                </li>

                <li className="footer-right__connections-item">
                  <a className="footer-right__connections-link" href="#">
                    <InstagramIcon />
                  </a>
                </li>

                <li className="footer-right__connections-item">
                  <a className="footer-right__connections-link" href="#">
                    <PinterestIcon />
                  </a>
                </li>

                <li className="footer-right__connections-item">
                  <a className="footer-right__connections-link" href="#">
                    <RSSIcon />
                  </a>
                </li>
              </ul>

              <h6 className="footer-right__title">
                Subscribe <span className="footer-right__title-in">in</span> our news letter
              </h6>

              <form className="footer-right__subscribe">
                <input
                  className="footer-right__subscribe-input"
                  placeholder="Enter Your Email Address"
                />

                <button className="footer-right__subscribe-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__copy">
            <p>&#169; {new Date().getFullYear()} Shophia Fashion Store Shopify.</p>

            <p>All Rights Reserved. Ecommerce Softrware by Shopify.</p>

            <p>Designed by <a href="#">MoccaLabs.com</a></p>
          </div>

          <ul className="footer-bottom__payments">
            <li className="footer-bottom__payments-item">
              <img src={ visa } alt="" />
            </li>

            <li className="footer-bottom__payments-item">
              <img src={ mastercard } alt="" />
            </li>

            <li className="footer-bottom__payments-item">
              <img src={ americanExpress } alt="" />
            </li>

            <li className="footer-bottom__payments-item">
              <img src={ discover } alt="" />
            </li>
          </ul>

          <button className="footer-bottom__scroll-btn" />
        </div>
      </div>

      <div className="footer-backstage-bottom" />
    </footer>
  );
};

export { Footer };
