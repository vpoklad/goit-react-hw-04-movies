import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader'

import Gallery from '../components/Gallery/Gallery';
import * as tmdbApi from '../services/tmdbAPI';
import Searchbar from '../components/Searchbar/Searchbar'
import LoadMoreBtn from '../components/Buttons/LoadMoreBtn';



export default function MoviesPage() {

  const history = useHistory();
  const location = useLocation();
  
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('intial')
  const [urlQuery, setUrlQuery] = useState(()=>new URLSearchParams(location.search).get("query"));
  
const allQUery = query || urlQuery

  const onSubmit = (query) => {
    history.push({ ...location, search: `query=${query}` });
    setQuery(query);
}
  const handleClickBM = () => {
    setPage((prev) => prev + 1);
}
  useEffect(() => {
    if (!allQUery) { return };
    setStatus('pending')
    setPage(1);
    tmdbApi.getInfoByQuerry(allQUery)
      .then(r => setResults(r.results.filter((el) => el.media_type === "movie" || el.media_type === "tv")))
   .finally(setStatus("success"))
   
  }, [allQUery])
  
  useEffect(() => {
    if (page !== 1) {
      tmdbApi.getInfoByQuerry(allQUery, page)
      .then(r => setResults((prev) => [...prev, ...r.results.filter((el) => el.media_type === "movie" || el.media_type === "tv")]))
   .finally(setStatus("success"))
    }
   
  }, [page])

  return (
    <>
    {status === 'pending' && <Loader/>}
      <Searchbar onSubmit={onSubmit}/>
      <div className="container">
        {results && <Gallery results={results} />}
        {results.length > 15 && <LoadMoreBtn handleClickBM={handleClickBM}/>}
      </div>
    </>
  );
}
