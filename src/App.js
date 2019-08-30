import React from 'react';
import './App.css';
import ShoutoutsPage from './ShoutoutsPage';
import Form from './Form'

class App extends React.Component {

  state = {
    whichForm: ""
  }

  handleRenderForms = (event) => {
    debugger

  }

  render() {
    // switch(this.state.whichForm) {
    //   case 'Login':
    //     return <Form />
    //   case 'Sign Up':
    //     return <Form />
    //   default:
    //     return <ShoutoutsPage />
    // }
    

    return (
      <div className="App">

        <div className="Nav">
          <h1>Flatiron Shoutouts</h1>
          <button onClick={this.handleRenderForms}>Login</button>
          <button onClick={this.handleRenderForms}>Sign Up</button>
        </div>

        <ShoutoutsPage />
      </div>
    );
  };
}

export default App;
