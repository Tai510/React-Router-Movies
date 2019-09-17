import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
  <div className='app'>
    <Router>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={
        props => (
        <Movie {...props} addToSavedList={addToSavedList}/>
          )
        }/>
    </Router>
  </div>
  );
};

export default App;
