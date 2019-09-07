import React, { Component } from 'react';
import Places from './Components/Places';

class App extends Component {

  state = {
    places: []
  }

  componentDidMount() {
    fetch('https://dry-scrubland-95084.herokuapp.com/places')
    .then(res => res.json())
    .then((data) => {
      this.setState({ places: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
        <Places places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;