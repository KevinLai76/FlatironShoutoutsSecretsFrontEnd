import React from 'react';

class ShoutoutsMessageInput extends React.Component {

    state = {
        message: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(localStorage)
        // fetch('http://localhost:3000/shoutouts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accepts': 'application/json'
        //     }, 
        //     body: JSON.stringify({
        //         // what the fuuuuck goes in here
        //     })
        // })
        // .then(response => response.json())
        // .then(console.log)
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows={4} cols={40} value={this.state.message} onChange={this.handleChange}></textarea>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default ShoutoutsMessageInput;