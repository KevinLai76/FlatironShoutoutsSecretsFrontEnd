import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import ShoutoutsPage from './Shoutouts/ShoutoutsPage';
import SecretsPage from './Secrets/SecretsPage';
import Form from './Form';
import Toggle from './Toggle'

class App extends React.Component {

  state = {
    formType: '',
    secret: true,
    currentUserId: 0
  }

  componentDidMount() {
     if(localStorage.token) {
       this.setState({pageState: 'Logged in'})
       fetch('http://localhost:3000/profile', {
         headers: {
           'Authorization': localStorage.token
         }
       })
       .then(response => response.json())
       .then(data => {
        this.setState({currentUserId: data.id})
       })
     }
  }

  handleSignUp = (event) => {
    this.setState({formType: event})
  }

  handleLogin = (event) => {
    this.setState({formType: event})
  }

  handleLogout = () => {
    this.setState({currentUserId: 0})
  }

  setCurrentUserId = (data) => {
    let id = data.id
    this.setState({currentUserId: id})
  }

  toggle = () => {
    this.setState({secret: !this.state.secret})
  }

  render() {
    return (
      <Switch>
        <Route 
          exact path='/' 
          render={(routerProps) =>
            <div> 
              <NavBar {...routerProps} secret={this.state.secret} currentUserId={this.state.currentUserId} handleSignUp={this.handleSignUp} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
              <Toggle {...routerProps} secret={this.state.secret} toggle={this.toggle}/>
              {this.state.secret
              ?
              <SecretsPage {...routerProps} currentUserId={this.state.currentUserId}/>
              :
              <ShoutoutsPage {...routerProps} currentUserId={this.state.currentUserId}/>
              }
            </div>
          }
        />
        <Route exact path='/login' render={(routerProps) => <Form {...routerProps} formType="Login" setCurrentUserId={this.setCurrentUserId}/>} />
        <Route exact path='/signup' render={(routerProps) => <Form {...routerProps} formType="Sign Up" setCurrentUserId={this.setCurrentUserId}/>}/>
      </Switch>
    )
  }
}

export default App;
