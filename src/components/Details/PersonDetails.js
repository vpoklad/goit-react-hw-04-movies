import PropTypes from 'prop-types';
import placeholder from '../../img/movie_poster_placeholder.jpg';
import s from './MovieDetails.module.css';
export default function MovieDetails({ person }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';

  return (
    <div className={s.wraper}>
      <div className={s.thumb}>
        <img
          className={s.poster}
          src={
            person.profile_path
              ? `${base_img_url}${person.profile_path}`
              : placeholder
          }
          alt={person.title}
        />
      </div>

      <div className={s.meta}>
        {person.name ? (
          <h1>{person.name}</h1>
        ) : (
          <h1>{person.also_known_as[1]}</h1>
        )}

        {person.birthday && <p>birthday: {person.birthday}</p>}
        {person.deathday && <p>deathday: {person.deathday}</p>}
        {person.place_of_birth && (
          <p>Place of birth: {person.place_of_birth}</p>
        )}

        {person.biography && (
          <>
            <h3>Biography</h3>
            <p>{person.biography}</p>
          </>
        )}

        {person.popularity && <p>Person popularity: {~~person.popularity}</p>}
        {person.homepage && (
          <a href={person.homepage} target="_blank" rel="noreferrer">
            Home page
          </a>
        )}
      </div>
    </div>
  );
}
MovieDetails.propTypes = {
  movie: PropTypes.shape({}),
  type: PropTypes.string,
};
