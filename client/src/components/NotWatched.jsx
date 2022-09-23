// Create a component for seeing all movies

import React from 'react';

// create search bar
var NotWatched = (props) => (

  <button onClick={() => props.showNotWatch()} className="notwatch-button" type="button">Not Watched</button>
)

export default NotWatched;