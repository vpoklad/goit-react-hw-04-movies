import { useParams, useHistory, useLocation, NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';
import placeholder from '../img/movie_poster_placeholder.jpg'

import Cast from '../components/MovieDetails/Cast';
import Review from '../components/MovieDetails/Review';

const base_img_url = 'https://image.tmdb.org/t/p/w342/';



export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    tmdbApi.getInfoById(type, movieId).then(result => setMovie(result));
  }, [movieId, type]);

  // if (movie) {
  //   console.log('itemloction',location.state.from);
  // }
  const onBackClick = () => {
  history.push(location?.state?.from?.location ?? "/movies")
}
  return (
    <>
      <button type="button" onClick={onBackClick}>{location?.state?.from?.label ?? "Back to movies search"} </button>
      {movie && (
        <>
          {movie.title ? (<h1>{movie.title}</h1>) : (<h1>{movie.original_name}</h1>)}
          <h2>{type}</h2>
          <img
            className=""
            src={movie.poster_path ? `${base_img_url}${movie.poster_path}` : placeholder}
            alt={movie.title}
          />

          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(el => (
              <li key={el.id}> {el.name}</li>
            ))}
          </ul>{
            movie.budget && (
              <>
              <h3>Budget</h3>
                <p>{`$ ${movie.budget}`}</p>
                </>
              
            )
          }
          <h3>Vote average: {movie.vote_average}</h3>
          <NavLink exact
          to={{
      pathname: `${url}/cast`,
      state: {
        from: {
          location:location.state.from.location,
          label: 'Back to results',
        },
      }
    }}>Cast</NavLink>
          <NavLink exact
          to={{
      pathname: `${url}/reviews`,
      state: {
        from: {
          location: location.state.from.location,
          label: 'Back to results',
        },
      }
    }}
          >Reviews</NavLink>

          <Route path={`${path}/cast`}><Cast/></Route>
          <Route path={`${path}/reviews`}><Review/></Route>
        </>
      )}
    </>
  );
}
