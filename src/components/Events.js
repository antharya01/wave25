import React from 'react';
import './Home.css';
import Event from './Events';
import Footer from './Footer';
import WavecrazeSponser from './WavecrazeSponser';
import Entertainment from './Entertainment';
import Timer from './Timer';
// import FirstyearRN from './Me/FirstyearRN';
// import SecondYearRN from './Me/SecondYearRN';
// import ThirdYearRN from './Me/ThirdYearRN';
// import FinalYearRN from './Me/FinalYearRN';

const Home = () => {  
  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="w-screen h-screen flex flex-col items-center justify-center lg:mt-[5%] sm:mt-[15%] vmd:mt-[25%] text-center">
          <h1 className="lg:text-[90px] sm:text-[60px] md:text-[50px] vmd:text-[40px] font-extrabold">
            Wave Craze
          </h1>
          <h3 className="text-[25px] vmd:text-[25px] font-extrabold">We Are Radionitroz</h3>
          <p className="lg:px-40 sm:px-20 vmd:px-5 vmd:py-10 py-14 lg:text-[22px] md:text-[20px]">
            Srinagar: In a big feat for Jammu and Kashmir and India, the Indian Railways on Saturday started 
            the trial run of the first Vande Bharat train from Shri Mata Vaishno Devi Railway Station Katra to Srinagar.
            The train will also pass through Anji Khad Bridge, India's first cable-stayed rail bridge.
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="text-center py-10">
        <Timer date="2025-02-15T00:00:00" />
      </div>

      {/* Event Section */}
      <div>
        <Event /> 
      </div>

      {/* Entertainment & Sponsors */}
      <div>
        <Entertainment />
        <WavecrazeSponser />

        {/* Organizing Committee */}
        <div className="text-center py-10">
          <h1 className="font-bold sm:text-[50px] vmd:text-[30px] md:text-[40px]">
            Organizing Committee
          </h1>
          {/* Uncomment these if needed */}
          {/* <FinalYearRN />
          <ThirdYearRN />
          <SecondYearRN />
          <FirstYearRN /> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
