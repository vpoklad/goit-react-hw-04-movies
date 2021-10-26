// import './App.css';

import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
// import HomePage from './viewes/HomePage';
// import MoviesPage from './viewes/MoviesPage';

const HomePage = lazy(() =>
  import('./viewes/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./viewes/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
function App() {
  return (
    <>
      {/* <Loader/> */}
      <Navbar />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={HomePage} />
          </Suspense>
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
