import React, { Component } from 'react';
import { connect } from 'react-redux'
import { filterResults, getItem } from '../redux'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            itemName: '',
        }
    }

    componentDidMount() {
        this.props.getItem()
    }

    handleChange = e => {
        this.setState({
            itemName: e.target.value,
        })
    }

    handleClick = e => {
        this.props.filterResults(this.state.itemName)      
    }

    onKeyDown = event => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.filterResults(this.state.itemName)     
        }
      }

    render() {
        return (
            <div className="search">
                <input type='text' className="searchInput" placeholder="Search food/wine" name="search" value={this.state.itemName} onChange={this.handleChange} onKeyDown={this.onKeyDown}></input>
                {/* <i class="fas fa-search searchIcon" onClick={this.handleClick}></i>  */}
            </div>
        );
    }
}

export default connect (state => state, {filterResults, getItem} )(Search)