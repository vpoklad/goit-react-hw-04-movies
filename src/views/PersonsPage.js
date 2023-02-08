import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import GalleryPerson from '../components/Gallery/GalleryPerson';
import * as tmdbApi from '../services/tmdbAPI';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreBtn from '../components/Buttons/LoadMoreBtn';
import ButtonBack from '../components/Buttons/ButtonBack';
import toast from 'react-hot-toast';

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
  const onSubmit = query => {
    history.push({ ...location, search: `query=${query}` });
    setQuery(query);
  };
  const onBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };
  const handleClickBM = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!urlQuery) {
      tmdbApi.getPersonsTrend().then(r => {
        const sortedResult = [...r.results].sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1,
        );
        setPersons(sortedResult);
      });
    }
  }, [urlQuery]);

  useEffect(() => {
    if (!allQUery) {
      return;
    }
    setStatus('pending');
    setPage(1);
    tmdbApi
      .getInfoByQuerry(allQUery)
      .then(r => {
        const filteredResult = r.results.filter(
          el => el.media_type === 'person',
        );
        if (filteredResult.length === 0) toast.error('Nothing found');
        setPersons(filteredResult);
      })
      .finally(setStatus('success'));
  }, [allQUery]);

  useEffect(() => {
    if (page !== 1) {
      tmdbApi
        .getInfoByQuerry(allQUery, page)
        .then(r => {
          setPersons(prev => [
            ...prev,
            ...r.results.filter(el => el.media_type === 'person'),
          ]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .finally(setStatus('success'));
    }
  }, [allQUery, page]);

  return (
    <>
      {status === 'pending' && <Loader />}
      <Searchbar onSubmit={onSubmit} placeHolder={'Search actors'} />
      <div className="container">
        <ButtonBack location={location} onBackClick={onBackClick} />

        {persons && persons.length > 1 && (
          <h1 className="pageTitle">Trending persons</h1>
        )}
      </div>
      {persons && <GalleryPerson results={persons} />}
      {persons && persons.length > 15 && (
        <LoadMoreBtn handleClickBM={handleClickBM} />
      )}
    </>
  );
}
