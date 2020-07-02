import React from 'react';
import './App.css';
import MovieList from './MovieList'
import Nav from './Nav'
import {MovieProvider} from './MovieListContext'
import AddMovie from './AddMovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">      
        <Nav />
        <div className="container">
          <AddMovie />
        </div>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
