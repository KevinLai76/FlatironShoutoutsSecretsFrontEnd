import React from 'react';
import './App.css';

class Form extends React.Component {

    state ={
        username: '',
        password: '',
        page: 'Login'
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
        .then(data => {
            localStorage.setItem('token', data.token)
        })
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
            <div>
                <h1>{this.state.page}</h1>
                <form>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    {
                        this.state.page === 'Login'
                        ?
                        <input type='submit' value='Login' name='login' onClick={this.handleSubmit}/>
                        :
                        <input type='submit' value='Sign Up' name='signup' onClick={this.handleSubmit}/>
                    }
                </form>
                <small onClick={this.handleClick}>{`click here to ${this.state.page === 'Login' ? 'Sign Up' : 'Login'}`}</small>
            </div>
        )
    }
}

export default Form;