// Core
import React from 'react';

// Components
import { SectionTitle } from '../../components';

// Instruments
import './Showcase.scss';
import bootsImg from '../../images/boots.png';
import collectionImg from '../../images/collection.png';
import coulombImg from '../../images/coulomb.png';
import braceletImg from '../../images/bracelet.png';
import coverImg from '../../images/cover.png';

const Showcase = () => {
  return (
    <div>
      <div className="showcase-title-wrapper">
        <SectionTitle>HandPicked</SectionTitle>
      </div>

      <div className="showcase">
        <div className="showcase__aside-card">
          <img className="showcase-image" src={ bootsImg } alt="" />

          <div className="showcase__card-inner">
            <button className="showcase__card-inner-btn">Shop now</button>
          </div>
        </div>

        <div className="showcase__center-card">
          <img className="showcase-image" src={ collectionImg } alt="" />

          <div className="showcase__card-inner">
            <button className="showcase__card-inner-btn">Shop now</button>
          </div>
        </div>

        <div className="showcase__aside-card">
          <img className="showcase-image" src={ coulombImg } alt="" />

          <div className="showcase__card-inner">
            <button className="showcase__card-inner-btn">Shop now</button>
          </div>
        </div>

        <div className="showcase__aside-card">
          <img className="showcase-image" src={ braceletImg } alt="" />

          <div className="showcase__card-inner">
            <button className="showcase__card-inner-btn">Shop now</button>
          </div>
        </div>

        <div className="showcase__aside-card">
          <img className="showcase-image" src={ coverImg } alt="" />

          <div className="showcase__card-inner">
            <button className="showcase__card-inner-btn">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Showcase };
