import React, { Component } from 'react';
import { connect } from 'react-redux'
import { filterResults, getItem} from '../redux'
import PairListItem from './PairListItem'
import Search from './Search'


class SearchedResults extends Component {

    componentDidMount = () => {
        this.props.getItem()
    }

    render() {
        const displayPairs = this.props.filteredResults.map(pair => {
            return <PairListItem key={pair._id}
                            name={pair.itemName} 
                            type={pair.type} 
                            description={pair.description} 
                            pairings={pair.pairings}
                            id={pair._id}/>
        })

        return (
            <div>
                <Search/>
                <div className="pairList">
                    {displayPairs}
                </div>
            </div>
        );
    }
}

export default connect (state => state, {filterResults, getItem})(SearchedResults)