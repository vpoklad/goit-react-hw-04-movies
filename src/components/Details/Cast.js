import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './MovieDetails.module.css';
import * as tmdbApi from '../../services/tmdbAPI';
import placeholder from '../../img/portrait_placeholder.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('pending');
  const { type, movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    tmdbApi
      .getCreditsById(type, movieId)
      .then(r => {
        setCast(r.cast);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(setStatus('success'));
  }, [movieId, type]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'success') {
    if (cast.length < 1) {
      return <p>No cast information found</p>;
    }

    return (
      <ul className={s.cast}>
        {cast.map(el => {
          return (
            <li key={el.id}>
              <Link
                className={s.link}
                to={{
                  pathname: `/persons/${el.id}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to cast',
                    },
                  },
                }}
              >
                <img
                  className={s.castImg}
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`
                      : placeholder
                  }
                  alt={el.name}
                />
                <div className={s.castMeta}>
                  <span className={s.castName}>{el.name} </span> as
                  <p> {el.character}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
