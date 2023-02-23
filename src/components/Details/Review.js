import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as tmdbApi from '../../services/tmdbAPI';
import ShowMoreText from 'react-show-more-text';
import s from './MovieDetails.module.css';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('pending');
  const { type, movieId } = useParams();
  useEffect(() => {
    tmdbApi
      .getRewievsById(type, movieId)
      .then(r => setReviews(r.results))
      .finally(setStatus('success'));
  }, [movieId, type]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }
  if (status === 'success') {
    return (
      <>
        <p>{reviews.length === 0 && 'No review added yet.'}</p>
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
              <h2 className={s.reviewAuthor}>Author: {review.author}</h2>

              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                truncatedEndingComponent={'... '}
                anchorClass={s.anchor}
              >
                <p>{review.content}</p>
              </ShowMoreText>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
