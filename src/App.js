import React from 'react';
import Hero from './components/hero/Hero.tsx';
import Content from './components/content/Content.tsx';
import Footer from './components/footer/Footer.jsx';
import { YMaps } from '@pbe/react-yandex-maps';

// import {Layout} from 'antd';

// const { Footer } = Layout;

function App() {
  return (
    <YMaps>
      <Hero />
      <Content />
      <Footer/>
    </YMaps>
  );
}

export default App;
