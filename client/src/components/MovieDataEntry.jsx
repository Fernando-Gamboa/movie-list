// Create a component for movie data entries

import React from 'react';

// create movie data entry
var MovieDataEntry = (props) => (
  <div className="movie-div">
    {/* <img className="movie-image" src='' alt="" /> */}
    {/* use passed down style and setIsHover from App  */}
    <div style={props.style} onClick={() => console.log('CLICKED ME!')} onMouseEnter={() => props.setIsHover(true)} onMouseLeave={() => props.setIsHover(false)} className="movie-body">
      <div className="movie-title">{props.movie.title}</div>
      <div className="movie-detail">{}</div>
    </div>
  </div>
);

export default MovieDataEntry;