import React from 'react';
import Hero from '../components/Hero';
import Badges from '../components/Badges';
import BasicInfo from '../components/BasicInfo';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Badges />
      <BasicInfo />
    </div>
  );
};

export default HomePage;
