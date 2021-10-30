import { useEffect, useState } from 'react';
// import Loader from '../components/Loader/Loader'

import TrendGallery from '../components/TrendGallery/TrendGallery';
import * as tmdbApi from '../services/tmdbAPI';

export default function HomePage() {
  const [trends, setTrends] = useState(null);
  // const [status, setStatus] = useState();

  useEffect(() => {
    tmdbApi.getTrend().then(r => setTrends(r.results.sort((a,b) => a.vote_average > b.vote_average)));
  }, []);
  console.log(trends);
  
  return (
    <>
      <h1 className="pageTitle">TOP 20 this week trends</h1>
      {trends && <TrendGallery trends={trends} />}
    </>
  );
}
