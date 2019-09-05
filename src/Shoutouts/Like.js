import React from 'react';

class Like extends React.Component {

    state = {
        likes: this.props.shoutout.shoutout_likes.length
    }

    handleClick = () => {
        this.setState({likes: this.state.likes + 1})
        this.props.changeTotalLikes()        

        fetch('http://localhost:3000/shoutout_likes', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                'user_id': this.props.shoutout.user_id,
                'shoutout_id': this.props.shoutout.id
            })
        })
        .then(response => response.json())
        .then(data => {
            this.props.updateLikes(data)
        })
    }

    render() {
        return(
            <div name='likes'>
                <div>
                    <button onClick={this.handleClick}>Like</button> <small>{this.state.likes}</small>
                </div>
            </div>
        )
    }
}

export default Like;