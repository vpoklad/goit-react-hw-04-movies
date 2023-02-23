import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  NavLink,
} from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';
import s from '../components/Navbar/Navbar.module.css';

import MovieDetails from '../components/Details/MovieDetails';
import Cast from '../components/Details/Cast';
import Review from '../components/Details/Review';

import ButtonBack from '../components/Buttons/ButtonBack';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  const navigate = useNavigate();
  const { location, pathname } = useLocation();

  useEffect(() => {
    tmdbApi.getInfoById(type, movieId).then(result => setMovie(result));
  }, [movieId, type]);

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <ButtonBack onBackClick={onBackClick} location={location} />

      {movie && <MovieDetails movie={movie} type={type} />}
      <NavLink
        to={{
          pathname: 'cast',
          state: {
            from: {
              location: location?.state?.from.location,
              label: 'Back to results',
            },
          },
        }}
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: 'reviews',
          state: {
            from: {
              location: location?.state?.from.location,
              label: 'Back to results',
            },
          },
        }}
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
}
