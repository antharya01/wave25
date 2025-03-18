import React, { useState, useEffect } from 'react';

const Tracker = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Increase progress
        } else {
          clearInterval(interval); // Stop once progress reaches 100
          return 100;
        }
      });
    }, 100); // Progress increment interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="tracker">
      <h2>Progress Tracker</h2>
      <p>{progress}%</p>
    </div>
  );
};

export default Tracker;
