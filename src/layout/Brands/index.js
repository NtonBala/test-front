// Core
import React from 'react';

// Components
import { SectionTitle } from '../../components';

// Instruments
import './Brands.scss';
import brandsImgLeft from '../../images/brands-left.png';
import brandsImgRight from '../../images/brands-right.png';

const Brands = () => {
  return (
    <div>
      <div className="brands-title-wrapper">
        <SectionTitle>Customers Says</SectionTitle>
      </div>

      <div className="brands-backstage">
        <div className="content">
          <div className="brands">
            <div className="brands__inner">
              <div className="brands__inner-left">
                <div className="brands__img-wrapper">
                  <img className="brands__img" src={ brandsImgLeft } alt="" />
                </div>

                <div className="brands__testimonial">
                  <p className="brands__testimonial-text">
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                  </p>

                  <p className="brands__testimonial-author">
                    Sandra Dewi <span className="brands__testimonial-author-position">Fashion stylish</span>
                  </p>
                </div>
              </div>

              <div className="brands__inner-right">
                <div className="brands__testimonial">
                  <p className="brands__testimonial-text">
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                  </p>

                  <p className="brands__testimonial-author">
                    Shaheer Sheikh <span className="brands__testimonial-author-position">Designer</span>
                  </p>
                </div>

                <div className="brands__img-wrapper">
                  <img className="brands__img" src={ brandsImgRight } alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Brands };
