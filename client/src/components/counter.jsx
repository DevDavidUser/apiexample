import React, {Component} from 'react';

class Counter extends Component {
	state ={
		count:1,
		tags:[]
	};
	render(){
		return ( 
		<div>
		{this.state.tags.length ===0 && "Please create a new tag"}
		{this.renderTags()}
		<p>{this.state.count}</p>
		<button onClick={() => this.handleIncrement({id:this.state.count}) }>Click me</button>
		</div>
		)
	}
	renderTags(){
		if(this.state.tags.length === 0) return <p>There are no tags</p>;
		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
	}
	handleIncrement = product =>{
		console.log(product);
		this.setState({count:this.state.count+1});
	}
}

export default Counter;