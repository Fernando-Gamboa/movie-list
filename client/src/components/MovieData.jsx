// Create a component for movie data

import React from 'react';
import MovieDataEntry from './MovieDataEntry.jsx';

// create movie data
var MovieData = (props) => {
  return (
    <div className="movie-list">
      {/* // iterate through movie data */}
      {props.movies.map((movie, index) => (
        // Render each new movie using the MovieDataEntry component along with its passed down properties
        <MovieDataEntry movie={movie} key={index} setIsHover={props.setIsHover} style={props.style} addWatchVideo={props.addWatchVideo} />
        ))}
    </div>
  );
};

export default MovieData;