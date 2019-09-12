import React from 'react';

class Like extends React.Component {

    state = {
        likes: this.props.shoutout.shoutout_likes.length,
        error: false
    }

    errorMessage = () => {
        return <small>Please log in or sign up</small>
    }

    handleClick = () => {
        if (localStorage.token) {
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
            // .then(data => this.props.updateLikes(data))
        } else {
            this.setState({error: true})
            setTimeout(() => this.setState({error:false}), 3000)
        }   
    }

    render() {
        return(
            <div className='Shoutouts-Likes' name='likes'>
                <div>
                    <button onClick={this.handleClick}>like</button> <small>{this.state.likes}</small>
                    {this.state.error ? <div>{this.errorMessage()}</div> : null}
                </div>
            </div>
        )
    }
}

export default Like;