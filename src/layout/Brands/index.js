// Core
import React from 'react';

// Components
import { SectionTitle } from '../../components';

// Instruments
import './Brands.scss';
import brandImg1 from '../../images/brand-1.png';
import brandImg2 from '../../images/brand-2.png';
import brandImg3 from '../../images/brand-3.png';
import brandImg4 from '../../images/brand-4.png';
import brandImg5 from '../../images/brand-5.png';
import brandImg6 from '../../images/brand-6.png';

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-title-wrapper">
        <SectionTitle>Our Brand</SectionTitle>
      </div>

      <div className="brands__band">
        <div className="brands__band-img-wrapper">
          <img src={ brandImg1 } alt="Bakery logo" />
        </div>

        <div className="brands__band-img-wrapper">
          <img src={ brandImg2 } alt="Lavalier logo" />
        </div>

        <div className="brands__band-img-wrapper">
          <img src={ brandImg3 } alt="Harvest Co Logo" />
        </div>

        <div className="brands__band-img-wrapper">
          <img src={ brandImg4 } alt="Landlock logo" />
        </div>

        <div className="brands__band-img-wrapper">
          <img src={ brandImg5 } alt="Spectrum logo" />
        </div>

        <div className="brands__band-img-wrapper">
          <img src={ brandImg6 } alt="Home energy logo" />
        </div>
      </div>
    </div>
  );
};

export { Brands };
