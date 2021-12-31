import {
  useParams,
  useHistory,
  useLocation,
  NavLink,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';
import s from '../components/Navbar/Navbar.module.css';

import MovieDetails from '../components/Details/MovieDetails';

import Cast from '../components/Details/Cast';
import Review from '../components/Details/Review';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    tmdbApi.getInfoById(type, movieId).then(result => setMovie(result));
  }, [movieId, type]);

  const onBackClick = () => {
    history.push(location?.state?.from?.location.pathname ?? '/movies');
  };

  return (
    <div className="container">
      <button className="btn_back" type="button" onClick={onBackClick}>
        {location?.state?.from?.label ?? 'Back to movies search'}{' '}
      </button>
      {movie && <MovieDetails movie={movie} type={type} />}
      <NavLink
        exact
        to={{
          pathname: `${url}/cast`,
          state: {
            from: {
              location: location?.state?.from.location,
              label: 'Back to results',
            },
          },
        }}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Cast
      </NavLink>
      <NavLink
        exact
        to={{
          pathname: `${url}/reviews`,
          state: {
            from: {
              location: location?.state?.from.location,
              label: 'Back to results',
            },
          },
        }}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Reviews
      </NavLink>

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Review />
      </Route>
    </div>
  );
}
