import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import { fetchData } from './data/apiData'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      responseOk: true,
      movies: [],
      popupVisable: false,
      allMovies: []
    }
    this.togglePopup = this.togglePopup.bind(this)
  }

  componentDidMount() {
    fetchData("movies")
    .then(data => {
      if(data) {
        this.setState({movies: data.movies})
      } else {
        this.setState({responseOk: false})
      }
    })
    .then(() => {
      this.state.movies.forEach(movie => {
        this.fetchMovie(movie.id)
      })
    })
  }

  fetchMovie(id) {
    return fetchData(`movies/${id}`).then(data => {
      let allMovies = this.state.allMovies
      allMovies.push(data.movie)
      this.setState({allMovies: allMovies})
    })
  }

  togglePopup() {
    this.setState({popupVisable: !this.state.popupVisable})
  }

  render() {
    return(
      <div className="App">
        {this.state.responseOk ? <>
          <Header />
          <Main
            movies={this.state.movies}
            popupVisable={this.state.popupVisable}
            togglePopup={this.togglePopup}
            allMovies={this.state.allMovies}
          />
        </> : <p>Try again, buster! No, seriously...we are sorry, having issues over here!</p>}
      </div>
    )
  }
}

export default App;
