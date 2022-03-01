import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    vehicleTrips: []
  };

  async createVehicleTrip() {
    await axios.get(apiUrl + '/vehicleTrip-create');
    this.loadVehicleTrips();
  }

  async loadVehicleTrips() {
    const res = await axios.get(apiUrl + '/vehicleTrips');
    this.setState({
      vehicleTrips: res.data
    });
  }

  componentDidMount() {
    this.loadVehicleTrips();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.createVehicleTrip()}>Create VehicleTrip</button>
          <p>VehicleTrips list:</p>
          <ul>
            {this.state.vehicleTrips.map(vehicleTrip => (
              <li key={vehicleTrip._id}>id: {vehicleTrip._id}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
