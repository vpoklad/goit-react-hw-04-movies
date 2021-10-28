import { useParams } from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';
const base_img_url = 'https://image.tmdb.org/t/p/w342/';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { type, movieId } = useParams();
  useEffect(() => {
    tmdbApi.getInfoById(type, movieId).then(result => setMovie(result));
  }, [movieId, type]);

  if (movie) {
    console.log(movie);
  }

  return (
    <>
      {movie && (
        <>
          <h1>{movie.title}</h1>
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
          </ul>
          <h3>Budget</h3>
          <p>{`$ ${movie.budget}`}</p>
        </>
      )}
    </>
  );
}
