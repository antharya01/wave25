import React, { useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded(); // Loader finishes
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [onLoaded]);

  return (
    <div className="loader flex items-center justify-center h-screen w-screen bg-black text-white">
      <h2 className="text-3xl font-bold">Loading...</h2>
    </div>
  );
};

export default Loader;
