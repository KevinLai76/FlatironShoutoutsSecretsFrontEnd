import React from 'react';
import SecretsIcon from '../Images/secrets icon.png'

class SecretsMessageInput extends React.Component {

    state = {
        message: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (localStorage.token){
            fetch('http://localhost:3000/secrets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    content: this.state.message,
                    user_id: this.props.currentUserId
                })
            })
            .then(response => response.json())
            .then(secret => {
                this.props.createNewSecret(secret)
                this.setState({message: ''})
            })
        }
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <div>
                <div className='Secrets-Post-Form'>
                    <img alt='' className='User-Icon' src={SecretsIcon}/>
                    <form onSubmit={this.handleSubmit}>
                        {/* <input type='text' value={this.state.message} onChange={this.handleChange}/> */}
                        <textarea className='Secrets-Post-Input-Field' type='text' value={this.state.message} onChange={this.handleChange}/>
                        <input type='submit' value='Post' />
                    </form>
                </div>
            </div>
        )
    }
}

export default SecretsMessageInput;