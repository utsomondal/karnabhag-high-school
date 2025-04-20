import React from 'react';
import heroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="mt-6 md:mt-10 rounded-lg px-1">
      <div
        className="hero min-h-[60vh] md:min-h-[80vh] rounded-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          borderRadius: '8px',
        }}
      >
        <div className="hero-overlay rounded-lg bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="mb-3 md:mb-5 text-3xl md:text-5xl font-bold">
              Karnabhag High School
            </h1>
            <p className="mb-3 md:mb-5 text-sm md:text-lg">
              A leading secondary school in Karnabhag, Naogaon, dedicated to
              providing quality education and fostering student success within
              the Rajshahi Education Board. Established in 1971, we offer a
              comprehensive curriculum in Business Studies, Science, and
              Humanities.
            </p>
            <Link to={'/notices'}>
              <button className="btn btn-primary btn-sm md:btn-md">
                Notice Board
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;