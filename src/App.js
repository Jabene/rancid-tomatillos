import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main'
import { fetchData } from './data/apiData'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      responseOk: true,
      movies: [],
      popupVisable: false,
      currentMovie: {}
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
  }

  togglePopup(id) {
    fetchData(`movies/${id}`)
    .then(data => {
      this.setState({currentMovie: data.movie, popupVisable: !this.state.popupVisable})
    })
  }

  render() {
    return(
      <div className="App">
        {this.state.responseOk ? <><Header />
        <Main
          movies={this.state.movies}
          popupVisable={this.state.popupVisable}
          togglePopup={this.togglePopup}
          movieInfo={this.state.currentMovie}
        /></> : <p>Try again, buster! No, seriously...we are sorry, having issues over here!</p>}
      </div>
    )
  }
}

export default App;
