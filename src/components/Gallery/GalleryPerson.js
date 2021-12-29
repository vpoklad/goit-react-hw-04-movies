import PropTypes from 'prop-types';
import GalleryPersonItem from './GalleryPersonItem';
import s from './TrendGallery.module.css';
export default function Gallery({ results }) {
  return (
    <div className="container">
      <ul className={s.gallery}>
        {results.map(item => (
          <GalleryPersonItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
Gallery.propTypes = {
  results: PropTypes.array,
};
