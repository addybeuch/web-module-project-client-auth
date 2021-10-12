import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/FriendsForm';


import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

const UserSection = ()=> {
  return (<p>Welcome {localStorage.getItem("username")}</p>);
}

function App() {
  let isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {
            (isLoggedIn && localStorage.getItem("role") === "admin") && <li><Link to="/admin">Admin</Link></li>
          }
          
          <li>
            { isLoggedIn && <Link to="/protected">Protected Page</Link> }
          </li>
        </ul>
        { isLoggedIn && <UserSection/>}

        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute exact path="/Form" component={AddFriendForm} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
