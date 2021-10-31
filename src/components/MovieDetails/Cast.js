import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as tmdbApi from '../../services/tmdbAPI';
import placeholder from '../../img/portrait_placeholder.jpg'


export default function Cast() {
    const [cast, setCast] = useState([])
    const [status, setStatus] = useState('pending')
    const { type, movieId } = useParams();
    
    useEffect(() => {
        
        tmdbApi.getCreditsById(type, movieId)
            .then(r => setCast(r.cast)).finally(setStatus('success'));
        
    }, [movieId, type])
    
    if (status === 'pending') {
        return(<p>Loading...</p>)
    }
    
    if (status === 'success') {
        if (cast.length < 1) {
            return (<p>No cast information found</p>)
        }
    
        return (
            <ul>
                {cast.map(el => {
                    return (
                        <li key={el.id}>
                            <img src={
                                el.profile_path ? `https://image.tmdb.org/t/p/w185/${el.profile_path}`
                                    : placeholder
                            } alt={el.name} />
                            <span>{el.name}</span> as
                            <span> {el.character}</span>
                            
                        </li>)
                })
                }
            </ul>
        )
    }
};
            
        
    
   
        
        
    

    
    
    

