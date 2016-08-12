import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form className="input-group">
             <input type="search" className="form-control" placeholder="location..." />
             <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
             </span>
            </form>
        );
    }
}

export default SearchBar;