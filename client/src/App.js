import React from 'react'
import Search from './components/Search'
import About from './components/About'
import Header from './components/Header'
import NavBar from './components/NavBar'

import SearchedResults from './components/SearchedResults'
import PairList from './components/PairList'

import AddForm from './components/AddForm'

import Footer from './components/Footer'


import { Switch, Route, withRouter } from 'react-router-dom'


const App = () => {
    return (
        <div className="container">
            <Header/>
            <NavBar/>
            {/* <Search/> */}
            
            <Switch >
                <div className="contentWrapper">
                <Route exact path='/' component= { About }/>
                {/* <Route path='/search' component= {SearchedResults}/> */}
                <Route path='/about' component= {About}/>
                <Route path='/all' component= {PairList}/>
                <Route path='/wine' component= {SearchedResults}/>
                <Route path='/food' component= {SearchedResults}/>
                <Route path='/add' component= {AddForm}/>
                </div>
            </Switch>
            <Footer/>
        </div>
    )
}
export default withRouter(App)