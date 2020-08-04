// Core
import React from 'react';

// Instruments
import './index.scss';

const FooterMenu = ({ title, links }) => {
  const linksJSX = links.map((item, i) => {
    return (
      <li key={i} className="footer-menu__item">
        <a className="footer-menu__link" href={item.src}>{item.title}</a>
      </li>
    );
  });

  return (
    <div className="footer-menu">
      <h6 className="footer-menu__title">{title}</h6>

      <ul className="footer-menu__list">{linksJSX}</ul>
    </div>
  );
};

export { FooterMenu };
