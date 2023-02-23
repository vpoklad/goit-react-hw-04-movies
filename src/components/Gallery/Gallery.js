import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import s from './TrendGallery.module.css';
export default function Gallery({ results }) {
  return (

      <ul className={s.gallery}>
        {results.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </ul>
   
  );
}
Gallery.propTypes = {
  results: PropTypes.array,
};
