import React from 'react';

class Like extends React.Component {

    handleClick = () => {
        fetch('http://localhost:3000/shoutout_likes', {
            method: 'POST',
            headers: {
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
                <button onClick={this.handleClick}>Like</button> <small>{this.props.likes.length}</small>
            </div>
        )
    }
}

export default Like;