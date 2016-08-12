import React from 'react';

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
    }
    
    render() {
        return (
            <form className="input-group" onSubmit={this._onFormSubmit}>
             <input type="search" className="form-control" placeholder="Location..." value={this.state.term} onChange={this._onInputChange.bind(this)} />
             <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
             </span>
            </form>
        );
    }
}

export default SearchBar;