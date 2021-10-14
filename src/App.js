import React from 'react';
import movieData from './data/movies'
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return(
      <div className="App">
      <Header />
      <Main movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
