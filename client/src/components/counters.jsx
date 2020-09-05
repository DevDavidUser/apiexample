import React, {Component} from 'react';
import Counter from "./counter";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./navbar.component"
import Userform from "./userform.component";
import Userstable from "./userstable.component";
import Editform from "./editform.component";

class Counters extends Component {
	state ={
		counters:[
			{ id:1, value:0},
			{ id:2, value:0}
		]
	};
	render(){
		return ( 
		<div>
			{this.state.counters.map(counter => <Counter key={counter.id}/>)}
			<Router>
      			<div className="container">
      				<Navbar />
      				<br/>
      			<Route path="/" exact component={Userstable} />
				<Route path="/edit/:id" component={Editform} />
				<Route path="/create" component={Userform} />
    		    </div>
		    </Router>
		</div>
		)
	}
}

export default Counters;