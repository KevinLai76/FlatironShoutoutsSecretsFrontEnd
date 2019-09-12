import React from 'react';

class Dislike extends React.Component {

    state = {
        dislikes: this.props.shoutout.shoutout_dislikes.length,
        error: false
    }

    errorMessage = () => {
        return <small>Please log in or sign up</small>
    }

    handleClick = () => {
        if (localStorage.token) {
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
            // fix later this will mess up the sort updateDislikes is passed down from Shoutouts
            // .then(dislike => {this.props.updateDislikes(dislike)})
        } else {
            this.setState({error: true})
            setTimeout(() => this.setState({error: false}), 2000)
        }
    }

    render() {
        return(
            <div className='Shoutouts-Dislikes' name='dislikes'>
                <button onClick={this.handleClick}>Dislike</button> <small>{this.state.dislikes}</small>
                {this.state.error ? <div className='Shoutouts-Dislikes-Error'>{this.errorMessage()}</div> : null}
            </div>
            
        )
    }
}

export default Dislike;