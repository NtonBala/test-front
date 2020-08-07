// Core
import React from 'react';

// Components
import { SectionTitle, CollectionCard } from '../../components';

// Instruments
import './Collection.scss';
import collectionImg1 from '../../images/collection-1.png';
import collectionImg2 from '../../images/collection-2.png';
import collectionImg3 from '../../images/collection-3.png';
import collectionImg4 from '../../images/collection-4.png';
import collectionImg5 from '../../images/collection-5.png';
import collectionImg6 from '../../images/collection-6.png';
import collectionImg7 from '../../images/collection-7.png';
import collectionImg8 from '../../images/collection-8.png';

const cards = [
  {
    imgSrc: collectionImg1,
    discount: 20,
    buttonAccent: true,
  },
  {
    imgSrc: collectionImg2,
  },
  {
    imgSrc: collectionImg3,
  },
  {
    imgSrc: collectionImg4,
    discount: 40,
  },
  {
    imgSrc: collectionImg5,
    discount: 20,
    buttonAccent: true,
  },
  {
    imgSrc: collectionImg6,
  },
  {
    imgSrc: collectionImg7,
  },
  {
    imgSrc: collectionImg8,
    discount: 40,
  },
];

const Collection = () => {
  const cardsJSX = cards.map((item, i) => {
    return (
      <div key={ i } className="collection__card-wrapper">
        <CollectionCard { ...item } />
      </div>
    );
  });

  return (
    <div className="collection">
      <div className="collection__title-wrapper">
        <SectionTitle>Summer Collection</SectionTitle>
      </div>

      <div className="collection__grid-wrapper">
        { cardsJSX }
      </div>
    </div>
  );
};

export { Collection };
