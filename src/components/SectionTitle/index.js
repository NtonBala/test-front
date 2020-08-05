// Core
import React from 'react';

// Instruments
import './SectionTitle.scss';

const SectionTitle = ({ children }) => {
  return (
    <div className="section-title-decor">
      <h2 className="section-title">{ children }</h2>
    </div>
  );
};

export { SectionTitle };
