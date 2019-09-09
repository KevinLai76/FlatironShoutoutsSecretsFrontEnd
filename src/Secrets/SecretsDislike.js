import React from 'react';

class SecretsDislike extends React.Component {

    state = {
        dislikes: this.props.secret.secret_dislikes.length
    }

    handleClick = () => {
        if (localStorage.token) {
            this.setState({dislikes: this.state.dislikes + 1})
            this.props.changeTotalDislikes()
            
            fetch('http://localhost:3000/secret_dislikes', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.token,
                    'Content-Type': 'application/json',
                    'Accepts': 'applicaton/json'
                },
                body: JSON.stringify({
                    'user_id': this.props.secret.user_id,
                    'secret_id': this.props.secret.id
                })
            })
            .then(response => response.json())
            .then(data => this.props.updateDislikes(data))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Dislike</button> <small>{this.state.dislikes}</small>
            </div>
        )
    }
}

export default SecretsDislike;