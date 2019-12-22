import React from 'react';

class SearchBar extends React.Component {
  state = {term : ''}
  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }
  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  } 

  render(){
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label className="field"><b>Video search</b></label>
          <input type="text" name="search-bar"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar