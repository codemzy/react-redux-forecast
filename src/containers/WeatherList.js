import React from 'react';
import {connect} from 'react-redux';

// components
import Chart from '../components/Chart.js';
import GoogleMap from '../components/GoogleMap.js';

class WeatherList extends React.Component {
    render () {
        let weatherList = this.props.weather.map((cityData) => {
            console.log(cityData);
            const TEMPS = cityData.list.map((weather) => {
                return weather.temp.day;
            });
            const PRESSURE = cityData.list.map((weather) => {
                return weather.pressure;
            });
            const HUMIDITY = cityData.list.map((weather) => {
                return weather.humidity;
            });
            let lon = cityData.city.coord.lon;
            let lat = cityData.city.coord.lat;
            return (
                <tr key={cityData.city.id}>
                    <td className="td-map"><GoogleMap lon={lon} lat={lat} /></td>
                    <td>
                        <Chart data={TEMPS} color='red' units="&deg;c" />
                    </td>
                    <td>
                        <Chart data={PRESSURE} color='orange' units="hPa" />
                    </td>
                    <td>
                        <Chart data={HUMIDITY} color='blue' units="%" />
                    </td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th width="25%">City</th>
                        <th width="25%">Temperature (&deg;c)</th>
                        <th width="25%">Pressure (hPa)</th>
                        <th width="25%">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherList}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);