import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './TrendGallery.module.css';
import placeholder from '../../img/movie_poster_placeholder.jpg';

export default function TrendGalleryItem({ item }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342';
  const location = useLocation();

  return (
    <li className={s.galleryItem}>
      <Link
        to={{
          pathname: `/movies/${item.media_type}/${item.id}`,
          state: {
            from: {
              location,
              label: 'Back to results',
            },
          },
        }}
      >
        {item.media_type === 'tv' && <div className={s.tv}>TV</div>}

        <p className={s.metatext}>Rating: {item.vote_average.toFixed(1)}/10</p>
        <img
          className={s.galleryItemImg}
          src={
            item.poster_path
              ? `${base_img_url}${item.poster_path}`
              : placeholder
          }
          alt={item.title}
        />
      </Link>
    </li>
  );
}
