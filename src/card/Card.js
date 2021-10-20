import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  changeHoverState() {
    this.setState({hover: !this.state.hover})
  }

  componentDidMount() {
    const averageRating = Math.floor(this.props.movie.average_rating)
    let starsRating = ""

    for (let i = 0; i < averageRating; i++) {
      starsRating = `${starsRating} ✪`
    }
    this.setState({rating: starsRating})
  }

  render () {
    return (
    <NavLink style={{textDecoration: 'none', color: 'black'}}
      to={`/${this.props.movie.id}`}
      className='movie-card'
      onMouseEnter={() => {this.changeHoverState()}}
      onMouseLeave={() => {this.changeHoverState()}}
      // onClick={() => {this.props.togglePopup(this.props.movie.id)}}
    >
      {this.state.hover &&
        <div className="hover-info">
          <p>Average Rating:</p>
          <p>{this.state.rating}</p>
        </div>
      }
      <img className='movie-img' src={this.props.movie.poster_path} alt={`${this.props.movie.title} movie cover`}/>
      <h2>{this.props.movie.title}</h2>
    </NavLink>
    )
  }
}

export default Card;
