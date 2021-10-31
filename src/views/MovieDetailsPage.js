import { useParams, useHistory, useLocation } from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';
const base_img_url = 'https://image.tmdb.org/t/p/w342/';


export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
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
            src={`${base_img_url}${movie.poster_path}`}
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
        </>
      )}
    </>
  );
}
