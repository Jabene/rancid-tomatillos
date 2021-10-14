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
      popupVisable: true
    }
  }

  componentDidMount() {
    fetchData("movies")
    .then(data => {
      this.setState({movies: data.movies})
    })
  }

  render() {
    return(
      <div className="App">
      <Header />
      <Main movies={this.state.movies} popupVisable={this.state.popupVisable}/>
      </div>
    )
  }
}

export default App;
