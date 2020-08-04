/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import React from 'react';

// Instruments
import './HeroSlider.scss';
import slideImg from '../../images/header-slide-1.png';

const HeroSlider = () => {
  return (
    <div className="header-slider-wrapper">
      <div className="content">
        <div className="header-slider">
          <div className="header-slide-1">
            <picture>
              <source media="" srcSet="" />

              <img className="header-slide-1__image" src={ slideImg } alt="" />
            </picture>

            <div className="header-slide-1__center">
              <div className="header-slide-1__sale">
                <h2 className="header-slide-1__title">
                  Mid-season
                  <strong>sale</strong>
                </h2>

                <p className="header-slide-1__message">
                  <span className="header-slide-1__text-decor-top">
                    <span className="header-slide-1__text-decor-bottom">
                      <span className="header-slide-1__text">Up to</span>
                    </span>
                  </span>

                  <strong>
                    <span>
                      50
                      <span className="header-slide-1__message-percentage"> &#37;</span>
                    </span>

                    <span>off</span>
                  </strong>
                </p>
              </div>

              <a className="header-slide-1__shop-link" href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSlider };
