import React from 'react';
import TitleNav from './TitleNav.jsx';
import MovieData from './MovieData.jsx';
import MovieDataEntry from './MovieDataEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import AddedMoviesBtn from './AddedMoviesBtn.jsx';
import AllMoviesBtn from './AllMoviesBtn.jsx';
import WatchedMovie from './WatchedMovie.jsx';
import NotWatched from './NotWatched.jsx';

const App = (props) => {
  const movies = [
    {title: 'Mean Girls', watched: false},
    {title: 'Hackers', watched: false},
    {title: 'The Grey', watched: false},
    {title: 'Sunshine', watched: false},
    {title: 'Ex Machina', watched: false}
  ];

  // set the useState methods from React --------------------------------------------------
  const { useState, useEffect } = React;
  // create a useState for movie data
  const [movieData, setMovieData] = useState(movies);
  // allows to filter search movies
  const [filterData, setFilterData] = useState(movieData);

  // on mouse hover required code --------------------------------------------------
  const [isHover, setIsHover] = useState(false);

  const style = {
    cursor: isHover ? 'pointer' : 'normal',
  };

  // ------------------------------------

  // SEARCH MOVIES FUNCTIONALITY ---------------------------------------------------------------------------------------------------------------------------------------

  // create search function to help filter movies --------------------------------------------------
  var searchVideo = (result) => {
    // result input hold the input data from the search bar
    // create empty array
    const filteredMovies = [];
    // iterate through movieData
    movieData.forEach(function(currentValue, index, collection) {
      // if result search input includes andy current movie title
      // includes is to compare strings if empty string then it returns entire string/results
      // converted both to lower case for a more seamless search
      if (currentValue.title.toLowerCase().includes(result.toLowerCase()) === true) {
        // push that movie object into the filteredMovies array
        filteredMovies.push(currentValue);
      }
    });
    // if filteredMovies is empty meaning no movie was found by the search/result input
    if (filteredMovies.length === 0) {
      // push no movie found object to filteredMovies
      filteredMovies.push({title: 'No movie by that name found!'});
    }
    // invoke setFilterData with filtered array as input
    setFilterData(filteredMovies);
  }

  // ADD MOVIE BUTTONS ---------------------------------------------------------------------------------------------------------------------------------------

  // create add function to help add movies --------------------------------------------------
  var addVideo = (result) => {
    // result input hold the input data from the add movie bar
    // create empty object with title key
    const newMovie = {title: result, watched: false, added: true};
    // create a copy of our original movieData
    // creating a copy is very essential as you should not mutate the original movieData
    const copy = movieData.slice();
    // push newMovie into the copy
    copy.push(newMovie);
    // set the movie data to the copy one
    setMovieData(copy);
    // now add the copy to the filterData
    setFilterData(copy);
    console.log(copy);
  }


  // create show function to help show added movies only --------------------------------------------------
  var showAdded = () => {
    // declare empty array
    const added = [];
    // iterate through movie data
    movieData.forEach(function(currentValue, index, collection) {
      // if movie data added key exist AND its true
      if (currentValue.added && currentValue.added === true) {
        // push it to empty array
        added.push(currentValue);
      }
    });
    // if added is empty meaning no movie was added
    if (added.length === 0) {
      // push no movie found object to added
      added.push({title: 'No movies have been added!'});
    }
    // now add the copy to the filterData
    setFilterData(added);
  }

  // create show function to help show all movies --------------------------------------------------
  var showAll = () => {
    // set filterData to movieData
    setFilterData(movieData);
  }

  // WATCHED BUTTONS ---------------------------------------------------------------------------------------------------------------------------------------

  // create add function to help add watched movies -------------------------------------
  var addWatchVideo = (result, event) => {
    // result input holds the movie object that clicked watched and event holds the button that clciked it
    // set the key value to either true or false
    result.watched = ((result.watched) ? false : true);
    // if the value is either true or false add the proper className to the button that was passed downs
    (result.watched) ? event.className = 'watch-button2' : event.className = 'watch-button';
  }

  // create show function to help show watched movies only -------------------------------
  var showWatchAdded = () => {
    // declare empty array
    const watched = [];
    // iterate through movie data
    movieData.forEach(function(currentValue, index, collection) {
      // if movie data added key exist AND its true
      if (currentValue.watched && currentValue.watched === true) {
        // push it to empty array
        watched.push(currentValue);
      }
    });
    // if added is empty meaning no movie was added
    if (watched.length === 0) {
      // push no movie found object to added
      watched.push({title: 'No movies have been watched!'});
    }
    // now add the copy to the filterData
    setFilterData(watched);
  }

  // create show function to help show all movies not watched --------------------------------------
  var showNotWatch = () => {
    // declare empty array
    const notWatched = [];
    // iterate through movie data
    movieData.forEach(function(currentValue, index, collection) {
      // if movie data added key exist AND its true
      if (currentValue.watched === false) {
        // push it to empty array
        notWatched.push(currentValue);
      }
    });
    // if added is empty meaning no movie was added
    if (notWatched.length === 0) {
      // push no movie found object to added
      notWatched.push({title: 'All movies have been watched!'});
    }
    // now add the copy to the filterData
    setFilterData(notWatched);
  }

  // RETURN ---------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className='title-bar'>
        <TitleNav />
      </div>

      <div>
        {/* pass down the functionality of addVideo onto the AddVideo.jsx file */}
        <AddMovie addVideo={addVideo} />
      </div>

      <div>
        {/* pass down the functionality of searchVideo onto the SearchBar.jsx file */}
        <SearchBar searchVideo={searchVideo} />
      </div>

      <div>
        {/*  */}
        <WatchedMovie showWatchAdded={showWatchAdded} />
      </div>
      <div>
        {/*  */}
        <NotWatched  showNotWatch={showNotWatch} />
      </div>

      <div>
        {/*  */}
        <AllMoviesBtn showAll={showAll} />
      </div>
      <div>
        {/*  */}
        <AddedMoviesBtn showAdded={showAdded} />
      </div>

      <div>
        {/* pass the movies property with filteredData, setIsHover with setIsHover and style with style to the MovieData & MovieData Entry files as well as addWatchVideo */}
        <MovieData movies={filterData} setIsHover={setIsHover} style={style} addWatchVideo={addWatchVideo} />
      </div>
    </div>
  )
};

export default App;