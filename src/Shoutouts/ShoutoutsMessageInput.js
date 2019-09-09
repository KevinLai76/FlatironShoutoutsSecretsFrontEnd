import React from 'react';

class ShoutoutsMessageInput extends React.Component {

    state = {
        message: '',
        error: false
    }

    errorMessage = () => {
        return <small>Please log in or sign up!</small>
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.props.currentUserId) {
            fetch('http://localhost:3000/shoutouts', {
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
            .then(shoutout => {
                this.props.createNewShoutout(shoutout)
                this.setState({message: ''})
            })
        } else {
            this.setState({error: true})
            setTimeout(() => this.setState({error: false}), 3000)
        }
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='shoutoutInput' value={this.state.message} onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
                {this.state.error ? <div>{this.errorMessage()}</div> : null}
            </div>
        )
    }
}

export default ShoutoutsMessageInput;