import React from 'react';

class CommentInput extends React.Component {

    state = {
        message: '',
        error: false
    }

    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    errorMessage = () => {
        return <small>Please log in or sign up</small>
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (localStorage.token) {
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
                this.setState({message: ''})
            })
        } else {
            this.setState({error: true})
            setTimeout(() => this.setState({error: false}), 3000)
        }
    }

    render() {
        return(
            <div className='Shoutouts-Comment-Input-Container'>
                <form onSubmit={this.handleSubmit}>
                    <input className='Shoutouts-Comment-Input' type='text' name='comment_input' value={this.state.message} onChange={this.handleChange}/>
                    <input className='Shoutouts-Comment-Submit' value='Post' type='submit' />
                </form>
                <div className='Comment-Input-Errors'>
                    {this.state.error ? <div>{this.errorMessage()}</div> : null}
                </div>
            </div>
        )
    }
}

export default CommentInput;