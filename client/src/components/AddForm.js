import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../redux'

class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            itemName: '',
            type: '',
            description: '',
            pairings: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        // e.preventDefault()
        this.props.addItem(this.state)
    }



    render() {
        return (
            <div className="addTextWrapper">
                <p className="addText">Can't find what your looking for? Add it to our database.</p>
       
                <form onSubmit={this.handleSubmit}>
                    <input className="addForm" type='text' placeholder="item name" name="itemName" value={this.state.itemName} onChange={this.handleChange}></input>
                    <br></br>
                    <input className="addForm" type='text' placeholder='item type' name="type" value={this.state.type} onChange={this.handleChange}></input>
                    <br></br>
                    <textarea className="addFormTextBox" placeholder='description' name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <br></br>
                    <textarea className="addFormTextBox" placeholder='pairings' name="pairings" value={this.state.pairings} onChange={this.handleChange}></textarea>
                    <br></br>
                    <button className="editSubmit">submit</button>
                </form> 
            </div>
        );
    }
}

export default connect (state => state, { addItem }) (AddForm)