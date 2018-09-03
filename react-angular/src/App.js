import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Mumbai'
    };
    this.cityNotFoundHandler = this.cityNotFoundHandler.bind(this);
    this.weatherWidgetRef = React.createRef();
  }

  componentDidMount() {
    this.weatherWidgetRef.current.addEventListener('cityNotFound', (e) => {
      console.log(e);
      this.setState({
        city: 'Hyderabad'
      });
    });
  }

  handleChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  cityNotFoundHandler(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div>
            Select City: <select onChange={this.handleChange.bind(this)} value={this.state.city}>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

          <weather-widget city-name={this.state.city} ref={this.weatherWidgetRef}></weather-widget>
        </div>
      </div>
    );
  }
}

export default App;
