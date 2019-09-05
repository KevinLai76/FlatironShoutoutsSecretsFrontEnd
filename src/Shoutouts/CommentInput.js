import React from 'react';

class CommentInput extends React.Component {

    state = {
        message: ''
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/shoutout_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                'content': this.state.message,
                'user_id': this.props.shoutout.user_id,
                'shoutout_id': this.props.shoutout.id
            })
        })
        .then(response => response.json())
        .then(comment => {
            this.props.createNewComment(comment)
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows='3' cols='30' value={this.state.message} onChange={this.handleChange}></textarea>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CommentInput;