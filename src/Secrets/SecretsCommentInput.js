import React from 'react';

class SecretsCommentInput extends React.Component {

    state = {
        message: ""
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (localStorage.token) {
            fetch('http://localhost:3000/secret_comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'applicaton/json'
                },
                body: JSON.stringify({
                    'content': this.state.message,
                    'user_id': this.props.secret.user_id,
                    'secret_id': this.props.secret.id
                })
            })
            .then(response => response.json())
            .then(comment => {
                this.props.createNewComment(comment)
                this.setState({message: ''})
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='comment_input' value={this.state.message} onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default SecretsCommentInput;