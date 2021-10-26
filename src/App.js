// import './App.css';

import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Navbar } from './components/Navbar/Navbar';
import TrendGallery from './components/TrendGallery/TrendGallery';
import * as tmdbApi from './services/tmdbAPI';

function App() {
  const [trends, setTrends] = useState(null);
  useEffect(() => {
    tmdbApi.getTrend().then(r => setTrends(r.results));
  }, []);

  console.log(trends);

  return (
    <div className="container">
      <Navbar />
      {trends && <TrendGallery trends={trends} />}
    </div>
  );
}

export default App;
