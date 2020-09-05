import React, { Component } from 'react';
import axios from "axios";
export default class Userform extends Component {
	
    state = {
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

  onSubmit = e  =>{
    e.preventDefault();

    const user = {
      username: this.state.username,
	  email: this.state.email
    }
	axios.post('https://wde-server.run-us-west2.goorm.io/users/add',user)
	.then((res) => console.log(res.data));
    console.log(user);
    this.setState({
      username: '',
	  email: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
			 <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}