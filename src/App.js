import React from 'react';
import movieData from '../data/movies'
import './App.css';
import Header from './Header';
// import Main from './Main';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <div className="App">
      <Header />
      </div>
    )
  }
  //<Main movies={this.state.movies}/>
}

export default App;
