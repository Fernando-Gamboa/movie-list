// Create a component for adding movies

import React from 'react';

// create search bar
var AddMovie = (props) => (
  // Add onSubmit preventDefault to stop page from refreshing on add button and invoke addVideo
  <form onSubmit={(event) => {
    event.preventDefault();
    props.addVideo(event.target.inputAdd.value);
    event.target.inputAdd.value = '';
    }} className="add-form" action="">
    {/* use name from input to reference it later in form above to grab input ^ */}
    <input type="text" placeholder="Add Movie..." name="inputAdd"></input>
    <button type="submit" ><i className="fa-solid fa-plus"></i></button>
  </form>
)

export default AddMovie;