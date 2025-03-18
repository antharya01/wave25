import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loader onLoaded={handleLoaded} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
