/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import React from 'react';

// Components
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon
} from '../../components';

// Instruments
import './index.scss';

const Header = () => {
  return (
    <header className="content">
      <div className="header">
        <ul className="header-menu">
          <li>
            <a className="header-menu__link" href="#">Home</a>
          </li>

          <li>
            <a className="header-menu__link" href="#">Gallery</a>
          </li>

          <li>
            <a className="header-menu__link" href="#">Categories</a>
          </li>

          <li>
            <a className="header-menu__link" href="#">Pages</a>
          </li>
        </ul>

        <h1 className="header-title">Shophia</h1>

        <div className="header-right">
          <ul className="header-socials">
            <li className="header-socials__item">
              <a className="header-socials__link" href="#">
                <FacebookIcon />
              </a>
            </li>

            <li className="header-socials__item">
              <a className="header-socials__link" href="#">
                <TwitterIcon />
              </a>
            </li>

            <li className="header-socials__item">
              <a className="header-socials__link" href="#">
                <PinterestIcon />
              </a>
            </li>

            <li className="header-socials__item">
              <a className="header-socials__link" href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>

          <select className="header-select">
            <option value="rupiah">Rupiah</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export { Header };
