import GalleryItem from './GalleryItem';
import s from './TrendGallery.module.css';
export default function TrendGallery({ results }) {
  return (
    <div className="container">
      <ul className={s.gallery}>
        {results.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))}
        ;
      </ul>
    </div>
  );
}
