import React from 'react';
import axiosWithAuth from './../utilities/axiosWithAuth';
import { Link } from 'react-router-dom';

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("props:", this.props);
    
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(resp=> {
        this.setState({
          friends: resp.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
  }

  formatData = () => {
    const formattedData = [];
    this.state.friends.forEach((friend) => {
        formattedData.push({
          id: friend.id,
          name: friend.name,
          age: friend.age,
          email: friend.email
        });   
    });
    return formattedData;
  };

  render() {
    const friends = this.formatData();
    return (
        <div>
        <h1>Friends</h1>
        <div>{friends.map(friend => (
            <p> Name: {friend.name}/ Age: {friend.age}/ Email: {friend.email} </p>
        ))}</div>
        <Link to = '/form'>Submit Form</Link>
        </div>
        
    );
  }
}

export default Friends;
