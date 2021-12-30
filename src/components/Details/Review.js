import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as tmdbApi from '../../services/tmdbAPI';
import ShowMore from 'react-simple-show-more';
import s from './MovieDetails.module.css'


export default function Review() {
    const [reviews, setReviews] = useState([])
    const [status, setStatus] = useState('pending')
    const { type, movieId } = useParams();
    useEffect(() => {
        
        tmdbApi.getRewievsById(type, movieId)
            .then(r => setReviews(r.results)).finally(setStatus('success'));
        
    }, [movieId, type])
    
    
        
    if (status === 'pending') {
        return (<p>Loading...</p>)
    }
    if (status === 'success') {
        return (<>
            <p>
            {reviews.length === 0 && "No review added yet."}
            
        </p>
        <ul >
          {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
              <h2 className={s.reviewAuthor}>Author: {review.author}</h2>
              <p>
                <ShowMore
                  text={review.content}
                  length={100}
                  showMoreLabel="Show more"
                  showLessLabel="Show less"
                  style={{
                    cursor: 'pointer',
                    color: '#ff3d00',
                    fontWeight: 'normal',
                  }}
                />
              </p>
            </li>
          ))}
            </ul>
            </>
    )
}
    
};
