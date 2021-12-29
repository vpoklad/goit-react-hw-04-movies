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

import MovieDetails from '../components/MovieDetails/MovieDetails';

// import Cast from '../components/MovieDetails/Cast';
// import Review from '../components/MovieDetails/Review';

export default function PersonDetailsPage() {
  const [person, setPerson] = useState(null);
  const { personId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    tmdbApi.getPersonsDetails(personId).then(result => setPerson(result));
  }, [personId]);

  const onBackClick = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };
  console.log(person);
  return (
    <div className="container">
      <button className="btn_back" type="button" onClick={onBackClick}>
        {location?.state?.from?.label ?? 'Back to movies search'}{' '}
      </button>
      {/* {movie && <MovieDetails movie={movie} type={type} />}
      <NavLink
        exact
        to={{
          pathname: `${url}/cast`,
          state: {
            from: {
              location: location.state.from.location,
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
              location: location.state.from.location,
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
      </Route> */}
    </div>
  );
}
