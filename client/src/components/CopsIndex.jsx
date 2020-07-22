import React from 'react'
import {RouteLink, NavLink} from "react-router-dom"
import piggy from './images/finalpig.png';

const CopsIndex = () => {


    return (
        <div>
    
            <NavLink to="/allcops">
                <img src={piggy} className="App-logo" alt="allcops" />
            </NavLink>
        </div>
    )
}

export default CopsIndex
