import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
 		 <a className="navbar-brand" href="https://wde-kgrcg.run-us-west2.goorm.io">Navbar</a>
		  <div className="collpase navbar-collapse">
       		 <ul className="navbar-nav mr-auto">
				<li className="navbar-item">
         		 <Link to="/create" className="nav-link">Create user</Link>
        	    </li>
				<li className="navbar-item">
         		 <Link to="/" className="nav-link">Show users</Link>
        	    </li>
       		 </ul>
        </div>
      </nav>
    );
  }
}
