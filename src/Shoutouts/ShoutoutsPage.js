import React from 'react';
import ShoutoutsPostContainer from './ShoutoutsPostContainer'

class ShououtsPage extends React.Component {

    state = {
        shoutouts: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/shoutouts')
        .then(response => response.json())
        .then(data => this.setState({shoutouts: data}))
    }

    render() {
        return(
            <div>
                <ShoutoutsPostContainer shoutouts={this.state.shoutouts}/>
            </div>
        )
    }
}

export default ShououtsPage;