import React, { useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    console.log('Loader is running...');
    const timer = setTimeout(() => {
      onLoaded(); // Stop the loader after 2 seconds
    }, 2000); // 2-second timer

    return () => {
      console.log('Cleanup loader timer...');
      clearTimeout(timer); // Clean up timer when component unmounts
    };
  }, [onLoaded]);

  return (
    <div className="loader flex items-center justify-center h-screen w-screen bg-black text-white">
      <h2 className="text-3xl font-bold">Loading...</h2>
    </div>
  );
};

export default Loader;
