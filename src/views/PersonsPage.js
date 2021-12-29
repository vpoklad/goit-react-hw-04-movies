import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import GalleryPerson from '../components/Gallery/GalleryPerson';
import * as tmdbApi from '../services/tmdbAPI';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreBtn from '../components/Buttons/LoadMoreBtn';

export default function HomePage() {
  const history = useHistory();
  const location = useLocation();
  const [persons, setPersons] = useState(null);
  const [status, setStatus] = useState('intial');
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [urlQuery] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );

  const allQUery = query || urlQuery;

  useEffect(() => {
    tmdbApi.getPersonsTrend().then(r => {
      const sortedResult = [...r.results].sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1,
      );
      setPersons(sortedResult);
    });
  }, []);

  console.log(persons);
  const onSubmit = query => {
    history.push({ ...location, search: `query=${query}` });
    setQuery(query);
  };
  return (
    <>
      {status === 'pending' && <Loader />}
      <Searchbar onSubmit={onSubmit} placeHolder={'Search actors'} />
      <h1 className="pageTitle">Trending persons</h1>
      {persons && <GalleryPerson results={persons} />}
    </>
  );
}
