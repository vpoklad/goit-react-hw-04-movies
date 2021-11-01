// import './App.css';

import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import ToTopButton from './components/Buttons/ToTopButton';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MoviesPage" */),
);

function App() {
  return (
    <>
      {/* <Loader/> */}
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:type/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <ToTopButton/>
    </>
  );
}

export default App;
