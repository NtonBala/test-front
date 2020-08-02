/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import React from 'react';

// Components
import { PhoneIcon } from '../../components';

// Instruments
import './index.scss';

const TopBar = () => {
  return (
    <div className="top-bar-backstage">
      <div className="content">
        <div className="top-bar">
          <a className="top-bar-phone" href="tel:+001555801">
            <PhoneIcon className="top-bar-phone__icon" />
            Call +001 555 801
          </a>

          <ul className="top-bar-menu">
            <li>
              <a className="top-bar-menu__link" href="#">Welcome MSG!</a>
            </li>

            <li>
              <a className="top-bar-menu__link" href="#">My account</a>
            </li>

            <li>
              <a className="top-bar-menu__link" href="#">My wishlist</a>
            </li>

            <li>
              <a className="top-bar-menu__link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { TopBar };
