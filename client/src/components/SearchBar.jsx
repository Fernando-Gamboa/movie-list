// Create a component for searching movies

import React from 'react';

// create search bar
var SearchBar = (props) => (
  // Add onSubmit preventDefault to stop page from refreshing on search button
  <form onSubmit={(event) => {
    event.preventDefault();
    event.target.search.value = '';
    }} className="example" action="">
    {/* Everytime there's a change 'onChange' method will re-render the data. Even if backspace then it will render for the new result */}
    <input onChange={(event) => props.searchVideo(event.target.value)} type="text" placeholder="Search Movie..." name="search"></input>
    <button type="submit" ><i className="fa fa-search"></i></button>
  </form>
)

export default SearchBar;
