// Core
import React from 'react';

// Components
import { SectionTitle } from '../../components';

// Instruments
import './Customers.scss';
import customersImgLeft from '../../images/customers-left.png';
import customersImgRight from '../../images/customers-right.png';

const Customers = () => {
  return (
    <div>
      <div className="customers-title-wrapper">
        <SectionTitle>Customers Says</SectionTitle>
      </div>

      <div className="customers-backstage">
        <div className="content">
          <div className="customers">
            <div className="customers__inner">
              <div className="customers__inner-left">
                <div className="customers__img-wrapper">
                  <img className="customers__img" src={ customersImgLeft } alt="" />
                </div>

                <div className="customers__testimonial">
                  <p className="customers__testimonial-text">
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                  </p>

                  <p className="customers__testimonial-author">
                    Sandra Dewi <span className="customers__testimonial-author-position">Fashion stylish</span>
                  </p>
                </div>
              </div>

              <div className="customers__inner-right">
                <div className="customers__testimonial">
                  <p className="customers__testimonial-text">
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                  </p>

                  <p className="customers__testimonial-author">
                    Shaheer Sheikh <span className="customers__testimonial-author-position">Designer</span>
                  </p>
                </div>

                <div className="customers__img-wrapper">
                  <img className="customers__img" src={ customersImgRight } alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Customers };
