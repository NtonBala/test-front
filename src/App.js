// Core
import React from 'react';

// Components
import { 
  TopBar,
  Header,
  HeroSlider,
  Footer,
  Banner,
  Showcase,
} from './layout';

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

      <main>
        <div className="content">
          <div className="banner-wrapper">
            <Banner />
          </div>
        </div>

        <Showcase />
      </main>

      <Footer />
    </>
  );
};

export default App;
