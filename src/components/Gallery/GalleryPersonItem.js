import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './TrendGallery.module.css';
import placeholder from '../../img/movie_poster_placeholder.jpg';

export default function TrendGalleryItem({ item }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: `persons/${item.id}`,
        state: {
          from: {
            location,
            label: 'Back to results',
          },
        },
      }}
    >
      <li className={s.galleryItem}>
        <img
          className={s.galleryItemImg}
          src={
            item.profile_path
              ? `${base_img_url}${item.profile_path}`
              : placeholder
          }
          alt={item.title}
        />
        <div className={s.personMeta}>
          <p className={s.personMetaItem}>{item.name}</p>
        </div>
      </li>
    </Link>
  );
}
