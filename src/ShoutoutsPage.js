import React from 'react';

class ShououtsPage extends React.Component {

    state = {
        shoutouts: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/shoutouts')
        .then(response => response.json())
        .then(data => this.setState({shoutouts: data}))
    }

    render() {
        console.log(this.state.shoutouts)
        
        return(
            <div>
                This is the Shououts Page!
            </div>
        )
    }
}

export default ShououtsPage;