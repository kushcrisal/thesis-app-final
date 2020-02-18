import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../image/tu.svg"

export class Nav extends Component {
    render() {
        return (
            
            <div>
               
                <nav class="navbar navbar-expand-sm  justify-content-center   nav-bar">
                <img src="tu.png"/>
                    <ul class="nav-links ">
                    
                        
                        <Link to="/student">
                        <li className="nav-item">Student<span/></li>
                        </Link>
                        
                        

                        <Link to="/studentlist">
                        <li className="nav-item">Student list</li>
                        </Link>
                       
                        <Link to="/search">
                        <li className="nav-item">Search</li>
                        </Link>

                        <Link to="/resultlist">
                        <li className="nav-item">Result list</li>
                        </Link>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default Nav
