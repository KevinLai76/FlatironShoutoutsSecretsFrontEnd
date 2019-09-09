import React from 'react';

class NavBar extends React.Component {

    handleClick = (event) => {
        if (event.target.name === 'Login') { 
            this.props.handleLogin(event.target.name)
            this.props.history.push('/login')
        } else if (event.target.name === 'Sign Up') {
            this.props.handleSignUp(event.target.name)
            this.props.history.push('./signup')
        } else if (event.target.name === 'Log Out') {
            this.props.handleLogout()
            localStorage.clear()
        }
    }
    
    render() {
        return(
            <div>
                {
                    this.props.currentUserId
                    ?
                    <div name='logged in'>
                        <h1>Flatiron {this.props.secret ? 'Secrets' : 'Shoutouts'}</h1>
                        <small>Welcome Back!</small>              
                        <button name="Log Out" onClick={this.handleClick}>Log Out</button>
                    </div>
                    :
                    <div name='logged out'> 
                        <h1>Flatiron Shoutouts</h1>
                        <button name="Login" onClick={this.handleClick}>Login</button>
                        <button name="Sign Up" onClick={this.handleClick}>Sign Up</button>
                    </div>
                }
            </div>
        )
    }
}

export default NavBar