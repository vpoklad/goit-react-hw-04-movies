import s from './TrendGallery.module.css';
export default function TrendGalleryItem({ item }) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';
  return (
    <li className={s.galleryItem}>
      <p className={s.metatext}>Rating: {item.vote_average}/10</p>

      <img
        className={s.galleryItemImg}
        src={`${base_img_url}${item.poster_path}`}
        alt={item.title}
      />
    </li>
  );
}
