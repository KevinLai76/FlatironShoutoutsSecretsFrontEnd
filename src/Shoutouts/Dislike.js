import React from 'react';

class Dislike extends React.Component {

    handleClick = () => {
        fetch('http://localhost:3000/shoutout_dislikes', {
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
            console.log(data)
            this.props.updateDislikes(data)
        })
    }

    render() {
        return(
            <div name='dislikes'>
                <button onClick={this.handleClick}>Dislike</button> <small>{this.props.dislikes.length}</small>
            </div>
        )
    }
}

export default Dislike;