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
      allMovieKeys: [],
      loading: true,
      searchedMovies: []
    }
    this.search = this.search.bind(this)
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
    }).then(() => {
      this.state.movies.forEach(movie => {
        this.fetchMovieVideo(movie.id)
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
  fetchMovieVideo(id) {
    return fetchData(`/movies/${id}/videos`).then(data => {
      let allMovieKeys = this.state.allMovieKeys
      allMovieKeys.push({id: id, movieKey: data.videos[0] })
      this.setState({allMovieKeys: allMovieKeys})
    })
  }
  search(searchQuery) {
    let filteredMovies = []
    let wordCrud = ['the', 'a', 'i', 'and', 'in']
    const splitQuery = searchQuery.toLowerCase().split(" ")
    splitQuery.forEach(word => {
      if(wordCrud.includes(word)){return}
      this.state.movies.forEach(movie => {
        if(movie.title.toLowerCase().includes(word)) {
          filteredMovies.push(movie)
        }
      })
    })
    filteredMovies = [...new Set(filteredMovies)]
    this.setState({searchedMovies: filteredMovies})
  }
  render() {
    return(
      <div className="App">
        {this.state.responseOk ? <Route path="/" render={() => {
          return (
            <>
              <Header
                search={this.search}
              />
              <Main
                movies={this.state.searchedMovies.length ? this.state.searchedMovies : this.state.movies}
                allMovies={this.state.allMovies}
                videoKeys={this.state.allMovieKeys}
              />
            </>
          )
        }} /> : <p>Try again, buster! No, seriously...we are sorry, having issues over here!</p>}
      </div>
    )
  }
}
export default App;
