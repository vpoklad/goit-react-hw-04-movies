import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import toast from 'react-hot-toast';
import Gallery from '../components/Gallery/Gallery';
import * as tmdbApi from '../services/tmdbAPI';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreBtn from '../components/Buttons/LoadMoreBtn';

export default function MoviesPage() {
  const [urlQuery, setUrlQuery] = useSearchParams();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(() => urlQuery.get('page') || 1);
  const [status, setStatus] = useState('intial');

  const allQUery = query || urlQuery.get('query');

  const onSubmit = query => {
    setUrlQuery({ query });
    setQuery(query);
  };
  const handleClickBM = () => {
    console.log(page);
    setPage(page + 1);
    console.log(page);
    setUrlQuery({ query, page: +page + 1 });
  };
  useEffect(() => {
    if (!allQUery) {
      return;
    }
    setStatus('pending');
    setPage(1);
    tmdbApi
      .getInfoByQuerry(allQUery)
      .then(r => {
        if (r.results.length === 0) {
          toast.error('Nothing found');
        }
        setResults(
          r.results.filter(
            el => el.media_type === 'movie' || el.media_type === 'tv',
          ),
        );
      })
      .finally(setStatus('success'));
  }, [allQUery]);

  useEffect(() => {
    if (page !== 1) {
      tmdbApi
        .getInfoByQuerry(allQUery, page)
        .then(r => {
          setResults(prev => [
            ...prev,
            ...r.results.filter(
              el => el.media_type === 'movie' || el.media_type === 'tv',
            ),
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
      <Searchbar onSubmit={onSubmit} placeHolder={'Search movies & TV-shows'} />

      {results.length > 0 && <Gallery results={results} />}
      {results.length > 15 && <LoadMoreBtn handleClickBM={handleClickBM} />}
    </>
  );
}
