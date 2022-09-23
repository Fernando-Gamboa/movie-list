// Create a component for seeing only added movies

import React from 'react';

// create search bar
var AddedMoviesBtn = (props) => (

  <button onClick={() => props.showAdded()} className="added-button" type="button">Movies Added</button>
)

export default AddedMoviesBtn;