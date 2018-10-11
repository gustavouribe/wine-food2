import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getItem } from '../redux'
import PairListItem from './PairListItem'

class PairList extends Component {

    componentDidMount = () => {
        this.props.getItem()
    }

    render() {

        const displayPairs = this.props.results.map(pair => {
            return <PairListItem key={pair._id}
                            name={pair.itemName} 
                            type={pair.type} 
                            description={pair.description} 
                            pairings={pair.pairings}
                            id={pair._id}
                            />
        })

        return (
            <div className="pairList">
                {displayPairs}
            </div>
        );
    }
}

export default connect(state => state, {getItem})(PairList)