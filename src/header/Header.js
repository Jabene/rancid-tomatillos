import React from 'react';
import './Header.css'
import img from '../assets/header-icon.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value })
  }

  render(){
    return (
    <header>
      <img src={img} />
      <h1>Rancid Tomatillos</h1>
      <div>
        <label for="search-input">
          Search:
          <input placeholder="Search Titles..." type='text' id="search-input" value={this.state.value} onChange={event => {
            this.handleChange(event)
            this.props.search(event.target.value)}
          }/>
        </label>
      </div>
    </header>
    )
  }
}

export default Header;
