import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import ShoutoutsPage from './Shoutouts/ShoutoutsPage';
import Form from './Form'

class App extends React.Component {

  state = {
    formType: '',
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

  // redirect = (page) => {
  //   this.setState({pageState : page})
  // }

  // handleRenderPage = (event) => {
  //   if (event.target.name === 'Login') { 
  //     this.setState({formType: event.target.name})
  //   } else if (event.target.name === 'Sign Up') {
  //     this.setState({formType: 'Sign Up'}) 
  //   } else if (event.target.name === 'Log Out') {
  //     this.setState({pageState: ''})
  //     localStorage.clear()
  //   }
  // }

  render() {
    console.log('id: ', this.state.currentUserId)
  //   if (!this.state.pageState) {
  //     switch(this.state.formType) {
  //       case 'Login':
  //         return (
  //           <div>
  //               <Form formType={this.state.formType} redirect={this.redirect} setCurrentUser={this.setCurrentUser}/>
  //           </div>
  //         )
  //       case 'Sign Up':
  //         return (
  //           <div>
  //             <Form formType={this.state.formType} redirect={this.redirect} setCurrentUser={this.setCurrentUser}/>
  //           </div>
  //         )
  //       default:
  //         return(
  //           <div className="App">

  //             <div className="Nav">
  //               <h1>Flatiron Shoutouts</h1>
  //               <button name="Login" onClick={this.handleRenderPage}>Login</button>
  //               <button name="Sign Up" onClick={this.handleRenderPage}>Sign Up</button>
  //             </div>

  //             <ShoutoutsPage />
  //           </div>
  //         )
  //     }
  //   } else {
  //       return (
  //         <div className="App">

  //           <div className="Nav">
  //             <h1>Flatiron Shoutouts</h1>
  //             <small>Welcome Back!</small>              
  //             <button name="Log Out" onClick={this.handleRenderPage}>Log Out</button>
  //           </div>

  //           <ShoutoutsPage />
  //         </div>
  //       )
  //   }
  // };

    return (
      <Switch>
        <Route 
          exact path='/' 
          render={(routerProps) =>
            <div> 
              <NavBar {...routerProps} currentUserId={this.state.currentUserId} handleSignUp={this.handleSignUp} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
              <ShoutoutsPage {...routerProps} currentUserId={this.state.currentUserId}/>
            </div>
          }
        />
        <Route exact path='/login' render={(routerProps) => <Form {...routerProps} formType={this.state.formType} setCurrentUserId={this.setCurrentUserId}/>} />
        <Route exact path='/signup' render={(routerProps) => <Form {...routerProps} formType={this.state.formType} setCurrentUserId={this.setCurrentUserId}/>}/>
      </Switch>
    )
  }
}

export default App;
