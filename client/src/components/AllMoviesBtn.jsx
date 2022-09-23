// Create a component for seeing all movies

import React from 'react';

// create search bar
var AllMoviesBtn = (props) => (

  <button onClick={() => props.showAll()} className="all-button" type="button">All Movies</button>
)

export default AllMoviesBtn;