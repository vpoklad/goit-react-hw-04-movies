import { useEffect, useState } from 'react';
// import Loader from '../components/Loader/Loader'

import TrendGallery from '../components/TrendGallery/TrendGallery';
import * as tmdbApi from '../services/tmdbAPI';

export default function HomePage() {
  const [trends, setTrends] = useState(null);
  // const [status, setStatus] = useState();

  useEffect(() => {
    tmdbApi.getTrend().then(r => {

      const sortedResult = [...r.results].sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
      setTrends(sortedResult);
    })
      
  }, []);
  console.log( 'sorted', trends);
  
  return (
    <>
      <h1 className="pageTitle">TOP 20 this week trends</h1>
      {trends && <TrendGallery trends={trends} />}
    </>
  );
}
