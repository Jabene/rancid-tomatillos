import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import { Route } from 'react-router-dom'
import { fetchData } from './data/apiData'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      responseOk: true,
      movies: [],
      allMovies: [],
      loading: true
    }
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
    .then(() => {this.setState({loading: false})})
  }

  fetchMovie(id) {
    return fetchData(`movies/${id}`).then(data => {
      let allMovies = this.state.allMovies
      allMovies.push(data.movie)
      this.setState({allMovies: allMovies})
    })
  }

  render() {
    return(
      <div className="App">
        {this.state.responseOk ? <Route path="/" render={() => {
          return (
            <>
              <Header />
              <Main
                movies={this.state.movies}
                popupVisable={this.state.popupVisable}
                allMovies={this.state.allMovies}
              />
            </>
          )
        }} /> : <p>Try again, buster! No, seriously...we are sorry, having issues over here!</p>}
      </div>
    )
  }
}

export default App;
