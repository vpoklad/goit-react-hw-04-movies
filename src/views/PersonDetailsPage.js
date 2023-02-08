import { useParams, useHistory, useLocation } from 'react-router-dom';
import * as tmdbApi from '../services/tmdbAPI';
import { useEffect, useState } from 'react';

import PersonDetails from '../components/Details/PersonDetails';
import ButtonBack from '../components/Buttons/ButtonBack';

// import Cast from '../components/MovieDetails/Cast';
// import Review from '../components/MovieDetails/Review';

export default function PersonDetailsPage() {
  const [person, setPerson] = useState(null);
  const { personId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    tmdbApi.getPersonsDetails(personId).then(result => setPerson(result));
  }, [personId]);

  const onBackClick = () => {
    history.push(location?.state?.from?.location.pathname ?? '/persons');
  };

  return (
    <div className="container">
      <ButtonBack location={location} onBackClick={onBackClick} />

      {person && <PersonDetails person={person} />}
    </div>
  );
}
