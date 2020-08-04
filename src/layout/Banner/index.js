// Core
import React from 'react';

// Instruments
import './Banner.scss';
import { ReactComponent as PlaneIcon } from '../../images/icon-plane.svg';
import { ReactComponent as ClockIcon } from '../../images/icon-clock.svg';
import { ReactComponent as QuestionIcon } from '../../images/icon-question.svg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__left">
        <PlaneIcon className="banner__icon" />

        <p>
          Free Shipping
          <span className="banner__description">In order Min &#36;200</span>
        </p>
      </div>

      <div className="banner__center">
        <ClockIcon className="banner__icon" />

        <p>
          30-Days Returns
          <span className="banner__description">Money Back Guarantee</span>
        </p>
      </div>

      <div className="banner__right">
        <QuestionIcon className="banner__icon" />

        <p>
          24&#47;4 Support
          <span className="banner__description">Lifetime Support</span>
        </p>
      </div>
    </div>
  );
};

export { Banner };
