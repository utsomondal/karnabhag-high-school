import React from 'react';
import Hero from '../components/Hero';
import Badges from '../components/Badges';
import BasicInfo from '../components/BasicInfo';
import CardChief from '../components/CardChief';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Badges />
      <BasicInfo />
      <CardChief />
    </div>
  );
};

export default HomePage;
