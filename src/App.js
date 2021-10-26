// import './App.css';

import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './viewes/HomePage';
import MoviesPage from './viewes/MoviesPage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
