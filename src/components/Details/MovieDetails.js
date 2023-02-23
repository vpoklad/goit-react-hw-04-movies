import PropTypes from 'prop-types';
import placeholder from '../../img/movie_poster_placeholder.jpg';
import s from './MovieDetails.module.css';
export default function MovieDetails({ movie, type }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';

  return (
    <div className={s.wraper}>
      <div className={s.thumb}>
        <img
          className={s.poster}
          src={
            movie.poster_path
              ? `${base_img_url}${movie.poster_path}`
              : placeholder
          }
          alt={movie.title}
        />
      </div>

      <div className={s.meta}>
        {movie.title ? (
          <h1 className={s.title}>{movie.title}</h1>
        ) : (
          <h1 className={s.title}>{movie.original_name}</h1>
        )}
        <h2 className={s.movie_type}>{type}</h2>
        {movie.release_date && <p>Release: {movie.release_date}</p>}
        {movie.first_air_date && <p>first air date: {movie.first_air_date}</p>}

        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(el => (
            <li key={el.id}> {el.name}</li>
          ))}
        </ul>

        {movie.budget > 0 && (
          <>
            <h3>Budget</h3>
            <p>{`$ ${movie.budget}`}</p>
          </>
        )}

        {movie.vote_average > 0 && (
          <h3 className={s.votes}>Vote average: {movie.vote_average}</h3>
        )}
      </div>
    </div>
  );
}
MovieDetails.propTypes = {
  movie: PropTypes.shape({}),
  type: PropTypes.string,
};
