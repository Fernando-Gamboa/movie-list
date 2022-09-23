// Create a component for movie data entries

import React from 'react';

// create movie data entry
var MovieDataEntry = (props) => (
  <div className="movie-div" >
    {/* <img className="movie-image" src='' alt="" /> */}
    {/* use passed down addWatchVideo to invoke the function with passed down movie and button that has been clicked */}
    <button onClick={(event) => props.addWatchVideo(props.movie, event.target)} className={'watch-button'} type="button">Watched</button>
    <div style={props.style} onClick={(event) => console.log(props.movie)} onMouseEnter={() => props.setIsHover(true)} onMouseLeave={() => props.setIsHover(false)} className="movie-body">
      <div className="movie-title">{props.movie.title} </div>
      <div className="movie-detail">{}</div>
    </div>
  </div>
);

export default MovieDataEntry;