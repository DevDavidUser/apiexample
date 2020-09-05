import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>
	 <Link to={"/edit/"+props.user._id}>edit</Link> | <button onClick={() => { props.deleteUser(props.user._id) }}>delete</button>
	</td>
  </tr>
)
export default class Userstable extends Component {
    state ={
		users :[]
	}
	deleteUser =(id) =>{
    axios.delete("https://wde-server.run-us-west2.goorm.io/users/"+id)
      .then(response => { console.log(response.data)});

      this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }
	userslist = () =>{
		return this.state.users.map(currentuser =>{
			return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
		})
	}
	handleDisplay = () =>{
	  axios.get("https://wde-server.run-us-west2.goorm.io/users")
	   .then(response => {
        this.setState({users:response.data})
		console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
		<div>
		   <h1>Users on the database</h1>
		   <button onClick={this.handleDisplay}>Click me</button>
			 <table className="table">
         		 <thead className="thead-light">
           			 <tr>
             			 <th>Username</th>
				  		 <th>Email</th>
          		     </tr>
				</thead>
					  <tbody>
           				 { this.userslist()}
         			 </tbody>
			 </table>
		</div>
    );
  }
}