import TrendGalleryItem from './TrendGalleryItem';
import s from './TrendGallery.module.css';
export default function TrendGallery({ trends }) {
  return (
    <ul className={s.gallery}>
      {trends.map(item => (
        <TrendGalleryItem key={item.id} item={item} />
      ))}
      ;
    </ul>
  );
}
