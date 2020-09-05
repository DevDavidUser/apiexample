import React, { Component } from 'react';
import axios from 'axios';

export default class Editform extends Component {
		state ={
			user:[],
			  username: '',
			  email: ''
		}
		  onChangeUsername = e =>{
			this.setState({
			  username: e.target.value
			})
		  }
		  onChangeEmail = e =>{
			this.setState({
			  email: e.target.value
			})
		  }
	  componentDidMount() {
		axios.get("https://wde-server.run-us-west2.goorm.io/users/"+this.props.match.params.id)
		  .then(response => {
			this.setState({user:response.data})
		  })
		  .catch(function (error) {
			console.log(error);
		  })
 	  }
		onSubmit = e  =>{
		e.preventDefault();

		const user = {
		  username: this.state.username,
		  email: this.state.email
		}
		axios.post('https://wde-server.run-us-west2.goorm.io/users/update/'+this.props.match.params.id,user)
		.then((res) => console.log(res.data));
		window.location = '/';
	  }
  render() {
    return (
      <div>
        <h3>Edit new user</h3>
		<form onSubmit={this.onSubmit}>
			<div className="form-group">
				<label>Username:</label>
				<input  placeholder={this.state.user.username} type="text" 
					className="form-control"
					value={this.state.username}
              		onChange={this.onChangeUsername}
					required
					/>
			</div>
			<div className="form-group">
				<label>Email:</label>
				<input placeholder={this.state.user.email} type="email" 
					className="form-control"
					value={this.state.email}
              		onChange={this.onChangeEmail}
					required 
					/>
			</div>
			<div className="form-group">
				<input type="submit" value="Edit User" className="btn btn-primary" />
			</div>
		</form>
      </div>
    )
  }
}