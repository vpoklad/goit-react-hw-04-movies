import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './TrendGallery.module.css';
export default function TrendGalleryItem({ item }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';
  const location = useLocation();
  console.log(location);
  return (
    <Link to={{
      pathname: `movies/${item.media_type}/${item.id}`,
      state: {
        from: {
          location,
        label: 'Back to results'},
      }
    }}>
      <li className={s.galleryItem}>
        <p className={s.metatext}>Rating: {item.vote_average}/10</p>

        <img
          className={s.galleryItemImg}
          src={`${base_img_url}${item.poster_path}`}
          alt={item.title}
        />
      </li>
    </Link>
  );
}
