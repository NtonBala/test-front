// Core
import React from 'react';

// Components
import { TopBar, Header, HeroSlider, Footer } from './layout';

// Instruments
import './App.scss';

const App = () => {
  return (
    <>
      <header className="header-wrapper">
        <TopBar />
        <Header />
        <HeroSlider />
      </header>


      <Footer />
    </>
  );
};

export default App;
