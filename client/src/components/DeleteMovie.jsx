// Create a component to delete movies

import React from 'react';

// create search bar
var DeleteMovie = (props) => (

  <button onClick={() => props.showWatchAdded()} className="watched-button" type="button">Watched</button>
)

export default DeleteMovie;