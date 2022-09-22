import React from 'react';
import TitleNav from './TitleNav.jsx';
import MovieData from './MovieData.jsx';
import MovieDataEntry from './MovieDataEntry.jsx';
import SearchBar from './SearchBar.jsx';

const App = (props) => {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
  ];

  // set the useState methods from React
  const { useState, useEffect } = React;
  // create a useState for movie data and filtered data by search
  const [movieData, setMovieData] = useState(movies);
  const [filterData, setFilterData] = useState(movieData);

  // on mouse hover required code -------
  const [isHover, setIsHover] = useState(false);

  const style = {
    cursor: isHover ? 'pointer' : 'normal',
  };
  // ------------------------------------

  // create search function to help filter movies
  var searchVideo = (result) => {
    // result input hold the input data from the search bar
    // create empty array
    const filteredMovies = [];
    // iterate thorugh movieData
    movieData.forEach(function(currentValue, index, collection) {
      // if result search input includes andy current movie title
      // includes is to compare strings if empty string then it returns entire string/results
      if (currentValue.title.includes(result) === true) {
        // push that movie object into the filteredMovies array
        filteredMovies.push(currentValue);
      }
    });
    // invoke setFilterData with filtered array as input
    setFilterData(filteredMovies);
  }

  return (
    <div>
      <div className='title-bar'>
        <TitleNav />
      </div>

      <div>
        {/* pass down the functionality of searchVideo onto the SearchBar.jsx file */}
        <SearchBar searchVideo={searchVideo} />
      </div>
      <div>
        {/* pass the movies property with filteredData, setIsHover with setIsHover and style with style to the MovieData & MovieData Entry files*/}
        <MovieData movies={filterData} setIsHover={setIsHover} style={style}/>
      </div>
    </div>
  )
};

export default App;