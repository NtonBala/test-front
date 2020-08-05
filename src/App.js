// Core
import React from 'react';

// Components
import { 
  TopBar,
  Header,
  HeroSlider,
  Footer,
  Banner,
} from './layout';
import { SectionTitle } from './components';

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

        <div className="content">
          <SectionTitle>HandPicked</SectionTitle>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
