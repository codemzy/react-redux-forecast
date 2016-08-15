import React from 'react';
import {connect} from 'react-redux';

class WeatherList extends React.Component {
    render () {
        let weatherList = this.props.weather.map((cityData, index) => {
            return (
                <tr key={index}>
                    <td>{cityData.city.name}</td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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