import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader'

import Gallery from '../components/Gallery/Gallery';
import * as tmdbApi from '../services/tmdbAPI';
import Searchbar from '../components/Searchbar/Searchbar'



export default function MoviesPage() {

  const history = useHistory();
  const location = useLocation();
  
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState(null);
  const [status, setStatus] = useState('intial')
  const [urlQuery, setUrlQuery] = useState(()=>new URLSearchParams(location.search).get("query"));
  
const allQUery = query || urlQuery

  const onSubmit = (query) => {
    history.push({ ...location, search: `query=${query}` });
    setQuery(query);
}

 useEffect(() => {
   if (!allQUery) { return };
   setStatus('pending')
   tmdbApi.getInfoByQuerry(allQUery)
     .then(r => setResults(r.results.filter((el) => el.media_type === "movie" || el.media_type === "tv")))
   .finally(setStatus("success"))
   
 }, [allQUery])
  

  return (
    <>
    {status === 'pending' && <Loader/>}
      <Searchbar onSubmit={onSubmit}/>
      <div className="container">
        {results && <Gallery results={results} />}
      </div>
    </>
  );
}
