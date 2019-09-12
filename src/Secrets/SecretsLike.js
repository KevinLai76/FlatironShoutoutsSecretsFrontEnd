import React from 'react';

class SecretsLike extends React.Component {

    state = {
        likes: this.props.secret.secret_likes.length
    }

    handleClick = () => {
        if(localStorage.token) {
            this.setState({likes: this.state.likes + 1})
            this.props.changeTotalLikes()

            fetch('http://localhost:3000/secret_likes', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.token,
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    'user_id': this.props.secret.user_id,
                    'secret_id': this.props.secret.id
                })
            })
            .then(response => response.json())
            // .then(data => this.props.updateLikes(data))
        }
    }       

    render() {
        return (
            <div className='Secrets-Likes'>
                <button onClick={this.handleClick}>Like</button> <small>{this.state.likes}</small>
            </div>
        )
    }
}

export default SecretsLike; 