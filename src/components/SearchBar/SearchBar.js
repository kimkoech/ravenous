import React from 'react';
import './SearchBar.css';


var sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortOpt => {
           let sortByOptionValue = sortByOptions[sortOpt];
           return <li key={sortByOptionValue}>sortOpt</li>
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="#" >Let's Go</a>
                </div>
            </div>

        );
    }



};

export default SearchBar;