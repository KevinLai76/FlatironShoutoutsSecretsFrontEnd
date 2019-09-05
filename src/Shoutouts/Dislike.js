import React from 'react';

class Dislike extends React.Component {

    state = {
        dislikes: this.props.shoutout.shoutout_dislikes.length
    }

    handleClick = () => {
        this.setState({dislikes: this.state.dislikes + 1})
        this.props.changeTotalDislikes()        

        fetch('http://localhost:3000/shoutout_dislikes', {
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
        .then(dislike => {
            this.props.updateDislikes(dislike)
        })
    }

    render() {
        return(
            <div name='dislikes'>
                <button onClick={this.handleClick}>Dislike</button> <small>{this.state.dislikes}</small>
            </div>
        )
    }
}

export default Dislike;