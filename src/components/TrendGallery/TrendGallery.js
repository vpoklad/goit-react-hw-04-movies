import TrendGalleryItem from './TrendGalleryItem';
import s from './TrendGallery.module.css';
export default function TrendGallery({ trends }) {
  return (
    <div className="container">
      <ul className={s.gallery}>
        {trends.map(item => (
          <TrendGalleryItem key={item.id} item={item} />
        ))}
        ;
      </ul>
    </div>
  );
}
