import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {filterWine, filterFood} from '../redux'


const NavBar = (props) => {
       return (
            <div className="navBar">

                {/* <div className="navLogo"></div> */}
                
                
                <Link to='/about' className='navLogo'><h1>wine + food</h1></Link>
                
                <Link to='/wine' onClick={props.filterWine} className='navText'>Wine</Link>
                <Link to='/food' onClick={props.filterFood} className='navText'>Food</Link>
                <Link to='/all' className='navText'>All</Link>
                <Link to='/add' className='navText'>Add</Link>
            </div>
       )
}

export default connect(null, {filterWine, filterFood})(NavBar);