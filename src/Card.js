import React from 'react';
import './Card.css'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      hover: false,
    }
  }

  changeHoverState() {
    this.setState({hover: !this.state.hover})
  }

  render () {
    return (
    <div className='movie-card' onMouseEnter={() => {this.changeHoverState()}} onMouseLeave={() => {this.changeHoverState()}}
    onClick={() => {this.props.togglePopup(this.props.movie.id)}}>
      {this.state.hover &&
        <div className="hover-info">
          <p>Average Rating: {Math.floor(this.props.movie.average_rating)}</p>
        </div>
      }
      <img className='movie-img' src={this.props.movie.poster_path}/>
      <h2>{this.props.movie.title}</h2>
    </div>
    )
  }
}


export default Card;
