import React from 'react';
import ShoutoutsLogo from './Images/flatironshoutouts.jpg'
import './App.css';


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
                    <div className='Nav-Container' name='logged in'>
                        {this.props.secret ? <h1 className='Nav-Secrets-Logo'>Flatiron{<br/>}Secrets</h1> : <img alt='' className='Nav-Shoutouts-Logo' src={ShoutoutsLogo}/>}
                        <small className='Welcome-Back'>Welcome Back!</small>              
                        <button className='Nav-Log-Out' name="Log Out" onClick={this.handleClick}>Log Out</button>
                    </div>
                    :
                    <div className='Nav-Container' name='logged out'> 
                        <img alt='' className='Nav-Shoutouts-Logo' src={ShoutoutsLogo}/>
                        <div className='Nav-Shoutouts-Button'>
                            <button className='Nav-Shoutouts-Login' name="Login" onClick={this.handleClick}>Login</button>
                            <button className='Nav-Shoutouts-Sign-Up' name="Sign Up" onClick={this.handleClick}>Sign Up</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default NavBar