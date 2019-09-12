import React from 'react';
import TacoEmoji from '../Images/taco_emoji.png'

class ShoutoutsMessageInput extends React.Component {

    state = {
        message: '',
        error: false
    }

    errorMessage = () => {
        return <small>Please log in or sign up!</small>
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.props.currentUserId) {
            fetch('http://localhost:3000/shoutouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                }, 
                body: JSON.stringify({
                    content: this.state.message,
                    user_id: this.props.currentUserId
                })
            })
            .then(response => response.json())
            .then(shoutout => {
                this.props.createNewShoutout(shoutout)
                this.setState({message: ''})
            })
        } else {
            this.setState({error: true})
            setTimeout(() => this.setState({error: false}), 3000)
        }
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return(
            <div>
                <div className='Shoutouts-Post-Form'>
                    <img alt='' className='User-Icon' src={TacoEmoji}/>
                    <form  onSubmit={this.handleSubmit}>
                        {/* <input className='Shoutouts-Post-Input-Field' type='text' name='shoutoutInput' value={this.state.message} onChange={this.handleChange}/><br/> */}
                        <textarea className='Shoutouts-Post-Input-Field' type='text' name='shoutoutInput' value={this.state.message} onChange={this.handleChange} onSubmit={this.handleSubmit}/><br/>
                        <input value='Post' type='submit'/>
                    </form>
                </div>
                <div className='Shoutouts-Message-Error'>
                    {this.state.error ? <div>{this.errorMessage()}</div> : null}
                </div>
            </div>
        )
    }
}

export default ShoutoutsMessageInput;