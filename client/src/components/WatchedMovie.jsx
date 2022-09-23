// Create a component for watched movies

import React from 'react';

// create search bar
var WatchedMovie = (props) => (

  <button onClick={() => props.showWatchAdded()} className="watched-button" type="button">Watched</button>
)

export default WatchedMovie;