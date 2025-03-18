import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(true);
  // Callback to handle loader completion
  const handleLoaded = () => {
    console.log('Loader completed!'); // Add this line to see when loader is done
    setLoading(false);
  };

  console.log('Rendering App!'); // Check if App is rendering

  return (
    <div>
      {loading ? (
        <Loader onLoaded={handleLoaded}/>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
