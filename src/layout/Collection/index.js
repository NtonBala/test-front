// Core
import React from 'react';

// Components
import { SectionTitle, CollectionCard } from '../../components';

// Instruments
import './Collection.scss';
import collectionImg1 from '../../images/collection-1.png';

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__title-wrapper">
        <SectionTitle>Summer Collection</SectionTitle>
      </div>

      <div>
        <CollectionCard imgSrc={ collectionImg1 } discount={ 20 } />
      </div>
    </div>
  );
};

export { Collection };
