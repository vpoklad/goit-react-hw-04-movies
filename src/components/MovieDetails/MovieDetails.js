import PropTypes from 'prop-types'
import placeholder from '../img/movie_poster_placeholder.jpg'
export default function MovieDetails({ movie, type }) {

    const base_img_url = 'https://image.tmdb.org/t/p/w342/';
    
    return (
        <>
            <img
            className=""
            src={movie.poster_path ? `${base_img_url}${movie.poster_path}` : placeholder}
            alt={movie.title}
          />
          {movie.title ? (<h1>{movie.title}</h1>) : (<h1>{movie.original_name}</h1>)}
          <h2>{type}</h2>

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
    )
};
MovieDetails.propTypes = {
    movie:PropTypes.shape({
        
    }),
    type:PropTypes.string,

}