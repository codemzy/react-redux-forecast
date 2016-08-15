import React, { Component } from 'react';

// components
import SearchBar from '../containers/SearchBar.js';
import WeatherList from '../containers/WeatherList.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
