import React from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends React.Component {
    render () {
        let weatherList = this.props.weather.map((cityData, index) => {
            console.log(cityData);
            const TEMPS = cityData.list.map((weather) => {
                return weather.temp.day;
            });
            return (
                <tr key={index}>
                    <td>{cityData.city.name}</td>
                    <td>
                        <Sparklines height={120} width={180} data={TEMPS}>
                            <SparklinesLine color="red" />
                        </Sparklines>
                    </td>
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