import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    
    _onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    
    _onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }
    
    render() {
        return (
            <form className="input-group search-bar" onSubmit={this._onFormSubmit.bind(this)}>
             <input type="search" className="form-control" placeholder="Location..." value={this.state.term} onChange={this._onInputChange.bind(this)} />
             <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
             </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);