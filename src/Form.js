import React from 'react';
import ShoutoutsLogo from './Images/flatironshoutouts.jpg'
import './App.css';

class Form extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            username: "",
            password: "",
            loginErrors: false,
            signupErrors: false,
            page: `${props.formType}`
        }
    }

    userPassValid = (data) => {
        if (!!data.error) { 
            this.setState({signupErrors: false})
            this.setState({loginErrors: true})
            setTimeout(() => this.setState({loginErrors: false}), 5000)
            return null
        } else if (!!data.errors) {
            this.setState({loginErrors: false})
            this.setState({signupErrors: true})
            setTimeout(() => this.setState({signupErrors: false}), 5000)
            return null
        } else {
            this.setState({loginErrors: false})
            this.setState({signupErrors: false})
            localStorage.setItem('token', data.token)
            this.updateCurrentUser()
            console.log(this.props.history)
            this.props.history.push('/')
        }
    }

    updateCurrentUser = () => {
        fetch('http://localhost:3000/profile', {
         headers: {
           'Authorization': localStorage.token
         }
       })
       .then(response => response.json())
       .then(data => this.props.setCurrentUserId(data))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/${event.target.name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => this.userPassValid(data))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.state.page === 'Login' 
        ? 
        this.setState({page: 'Sign Up'}) 
        : 
        this.setState({page: 'Login'})
    }

    render() {
        return(
            <div className='Form'>
                <img alt='' className='Shoutouts-Logo' src={ShoutoutsLogo} />
                <h1 className='Form-Header'>{this.state.page}</h1>
                {this.state.loginErrors ? <small>Incorrect username or password</small> : null}
                {this.state.signupErrors ? <small>That username is already taken</small> : null}
                <form>
                    <label className='Input-Label' name='login'>Username: </label><br/>
                    <input type='text' className='Form-Input-Field' name='username' value={this.state.username} onChange={this.handleChange}/><br/>
                    <label className='Input-Label'>Password: </label><br/>
                    <input type='password' className='Form-Input-Field' name='password' value={this.state.password} onChange={this.handleChange}/><br/>
                    {
                        this.state.page === 'Login'
                        ?
                        <input type='submit' value='Login' className='Form-Submit-Button' name='login' onClick={this.handleSubmit}/>
                        :
                        <input type='submit' value='Sign Up' className='Form-Submit-Button' name='signup' onClick={this.handleSubmit}/>
                    }
                </form>
                <small className='Form-Redirect' onClick={this.handleClick}>click here to <div className='Form-Redirect-Text'>{this.state.page === 'Login' ? 'Sign Up' : 'Login'}</div></small>
            </div>
        )
    }
}

export default Form;