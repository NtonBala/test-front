// Core
import React from 'react';
import classNames from 'classnames';

// Instruments
import './CollectionCard.scss';

const CollectionCard = ({ imgSrc = '', alt = '', buttonAccent, discount }) => {
  const btnClass = classNames('collection-card__btn', { buttonAccent });

  return (
    <div className="collection-card">
      <img className="collection-card__img" src={ imgSrc } alt={ alt } />

      { discount && (
        <div className="collection-card__discount">
          { discount }
        </div>
      )}

      <button className={ btnClass }>+ Add to card</button>
    </div>
  );
};

export { CollectionCard };
