import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard key={ movie.title } />
        ))}
      </div>
    );
  }
}

export default MovieList;
