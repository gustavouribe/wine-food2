import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteItem, editItem } from '../redux'


class PairListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            itemName: props.name,
            type: props.type,
            description: props.description,
            pairings: props.pairings
        }
    }

    handleDelete = e =>{
        e.preventDefault()
        this.props.deleteItem(this.props.id)
      }
    

    handleEdit = e =>{
        e.preventDefault()
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })    
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.editItem(this.props.id, this.state)
        console.log(this.props.results)
        console.log(this.props.filteredResults)
    }

    render() {
        return (
            <div className="pairListItem">
                <div className="pairListItemTitle"><h3>{this.props.name}</h3><i class="fas fa-edit editBtn" onClick={this.handleEdit}></i></div>
                
                <p><b className="pairListItemDescription">Type: </b><span className="pairListItemText">{this.props.type}</span> </p>
                <p><b className="pairListItemDescription">Description: </b><span className="pairListItemText">{this.props.description}</span></p>
                <p><b className="pairListItemDescription">Pairings: </b><span className="pairListItemText"> {this.props.pairings}</span></p>
                
                
                {this.state.open
                ?             
                    <form onSubmit={this.handleSubmit} className="editForm">
                        <input type='text' placeholder={this.props.name} name="itemName" value={this.state.itemName} onChange={this.handleChange} className="editText"></input>
                        <p>
                            <b className="pairListItemDescription">Type:</b><input type='text' placeholder={this.props.type} name="type" value={this.state.type} onChange={this.handleChange} className="editText"></input></p>
                        <p>
                            <b className="pairListItemDescription">Description:</b>
                            <br></br>
                            <textarea type="text" placeholder={this.props.description} name='description' value={this.state.description} onChange={this.handleChange}  className="editTextPairings" />
                        </p>
                        <p>
                        {/* size={this.props.pairings.length / 2} */}
                            <b className="pairListItemDescription">Pairings:</b><br></br><textarea type="text" placeholder={this.props.pairings} name='pairings' value={this.state.pairings} onChange={this.handleChange}  className="editTextPairings" />
                        </p>
                        
                        
                        
                        <button className="editSubmit">submit</button>
                        <div className="delete">
                            <p><i class="fas fa-trash-alt deleteBtn" onClick={this.handleDelete}></i></p>
                        </div>
                    </form>
                :<div></div>}
            </div>
        );
    }
};

export default connect (state => state, { deleteItem, editItem }) (PairListItem)