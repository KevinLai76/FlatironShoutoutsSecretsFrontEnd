import React from 'react';
import './App.css';
import ShoutoutsPage from './Shoutouts/ShoutoutsPage';
import Form from './Form'

class App extends React.Component {

  state = {
    formType: '',
    pageState: ''
  }

  componentDidMount() {
     if(localStorage.token) {
       this.setState({pageState: 'Logged in'})
     }
  }

  redirect = (page) => {
    this.setState({pageState : page})
  }

  handleRenderPage = (event) => {
    if (event.target.name === 'Login') { 
      this.setState({formType: event.target.name})
    } else if (event.target.name === 'Sign Up') {
      this.setState({formType: 'Sign Up'}) 
    } else if (event.target.name === 'Log Out') {
      this.setState({pageState: ''})
      localStorage.clear()
    }
  }

  render() {
    if (!this.state.pageState) {
      switch(this.state.formType) {
        case 'Login':
          return (
            <div>
                <Form formType={this.state.formType} redirect={this.redirect}/>
            </div>
          )
        case 'Sign Up':
          return (
            <div>
              <Form formType={this.state.formType} redirect={this.redirect}/>
            </div>
          )
        default:
          return(
            <div className="App">

              <div className="Nav">
                <h1>Flatiron Shoutouts</h1>
                <button name="Login" onClick={this.handleRenderPage}>Login</button>
                <button name="Sign Up" onClick={this.handleRenderPage}>Sign Up</button>
              </div>

              <ShoutoutsPage />
            </div>

          )
      }
    } else {
        return (
          <div className="App">

            <div className="Nav">
              <h1>Flatiron Shoutouts</h1>
              <small>Welcome Back!</small>              
              <button name="Log Out" onClick={this.handleRenderPage}>Log Out</button>
            </div>

            <ShoutoutsPage />
          </div>
        )
    }
  };
}

export default App;
