import React, { useEffect } from 'react';
import './Home.css';
import Nav from './Nav';
import Event from './Events';
import Footer from './Footer';
import WavecrazeSponser from './WavecrazeSponser';
import Entertainment from './Entertainment';
import Timer from './Timer';

const Home = () => {
  useEffect(() => {
    console.log("✅ Home.js component loaded");
  }, []);

  return (
    <div>
      <h1 style={{ color: 'white' }}>If you see this, Home.js is working</h1>
      <div className="home">
        <Nav />
        <div className="w-screen h-screen flex items-center flex-col lg:mt-[5%] sm:mt-[15%] vmd:mt-[25%]">
          <h1 className="lg:text-[90px] sm:text-[60px] mb:text-[50px] vmd:text-[40px] font-extrabold sticky top-20">
            Wave Craze
          </h1>
          <h3 className="text-[25px] vmd:text-[25px] font-extrabold">We Radionitroz</h3>
          <p className="lg:px-40 sm:px-20 vmd:px-5 vmd:py-10 py-14 lg:text-[22px] mb:text-[20px]">
            Srinagar: In a big feat for Jammu and Kashmir and India, the Indian Railways started the trial run...
          </p>
        </div>
      </div>
      <div>
        <Timer date="2025-02-15T00:00:00" />
      </div>
      <div>
        <Event />
      </div>
      <div>
        <Entertainment />
        <WavecrazeSponser />
        <h1 className="font-bold text-center sm:text-[50px] vmd:text-[30px] mb:text-[40px]">Organising Committee</h1>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
