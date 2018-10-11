import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    results: [],
    filteredResults: []
}

export const getItem = () => {
    return dispatch => {
        axios.get('/pair').then(res => {
            dispatch({
                type: "GET_ITEM",
                results: res.data
            })
        })
    }
}

export const addItem = (newItem) => {
    return dispatch => {
        axios.post('/pair', newItem).then(res => {
            dispatch({
                type: "ADD_ITEM",
                results: res.data
            })
        })
    }
}

export const deleteItem = (_id) => {
    return dispatch => {
        axios.delete(`/pair/${_id}`).then(res => {
            dispatch({
                type: "DELETE_ITEM",
                results: res.data,
                _id: _id
            })
        })
    }
}

export const editItem = (_id, obj) => {
    return dispatch => {
        axios.put(`/pair/${_id}`, obj).then(res => {   
            console.log(res.data)       
            dispatch({
                type: "PUT_ITEM",
                result: res.data
            })
        })
    }
}


export const filterResults = (itemName) => {
    return {
        type: "FILTER_RESULTS",
        itemName
    }
}

export const filterWine = () => {
    return {
        type: "FILTER_WINE",
    }
}

export const filterFood = () => {
    return {
        type: "FILTER_FOOD",
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_ITEM":
            return {
                results: [...action.results],
                filteredResults: prevState.filteredResults
            }
        case "DELETE_ITEM":
            return {
                results: prevState.results.filter(result => result._id !== action._id),
                // filteredResults: prevState.filteredResults
                filteredResults: prevState.filteredResults.filter(result => result._id !== action._id),
            }

        case "PUT_ITEM":

            const updatedResults = prevState.results.map(result => {
                if (result._id === action.result._id){
                    return action.result
                } else {
                    return result
                }
            })
            const updatedFilteredResults = prevState.filteredResults.map(result => {
                if (result._id === action.result._id){
                    return action.result
                } else {
                    return result
                }
            })

            return {
                results: updatedResults,
                filteredResults: updatedFilteredResults
            }

        
        case "FILTER_RESULTS":
            return {
                results: prevState.results,
                filteredResults: prevState.results.filter(result => {
                    return result.itemName.toLowerCase().includes(action.itemName.toLowerCase())
                })
            }
        case "FILTER_WINE":
            return {
                results: prevState.results,
                filteredResults: prevState.results.filter(result => {
                    return result.type === 'wine'
                })
            }
        case "FILTER_FOOD":
            return {
                results: prevState.results,
                filteredResults: prevState.results.filter(result => {
                    return result.type === 'food'
                })
            }
        default:
            return prevState
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)