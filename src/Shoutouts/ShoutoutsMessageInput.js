import React from 'react';

class ShoutoutsMessageInput extends React.Component {

    state = {
        message: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
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
        })
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
                    <textarea rows={4} cols={40} value={this.state.message} onChange={this.handleChange}></textarea>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default ShoutoutsMessageInput;