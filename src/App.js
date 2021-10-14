import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main'
import { fetchData } from './data/apiData'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      popupVisable: false
    }
    this.togglePopup = this.togglePopup.bind(this)
  }

  componentDidMount() {
    fetchData("movies")
    .then(data => {
      this.setState({movies: data.movies})
      console.log(data.movies)
    })
  }

  togglePopup() {
    this.setState({popupVisable: !this.state.popupVisable})
  }


  render() {
    return(
      <div className="App">
      <Header />
      <Main movies={this.state.movies} popupVisable={this.state.popupVisable} togglePopup={this.togglePopup}/>
      </div>
    )
  }
}

export default App;
