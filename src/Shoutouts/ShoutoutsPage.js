import React from 'react';
import ShoutoutsPostContainer from './ShoutoutsPostContainer'

class ShououtsPage extends React.Component {

    state = {
        shoutouts: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/shoutouts')
        .then(response => response.json())
        .then(data => this.setState({shoutouts: data}))
    }

    createNewShoutout = (shoutout) => {
        this.setState({shoutouts: [...this.state.shoutouts, shoutout]})
    }

    updateDislikes = (dislike) => {
        let newShoutoutsArray = this.state.shoutouts.map(shoutout => {
            return (
                shoutout.id === dislike.shoutout_id
                ?
                {...shoutout, shoutout_dislikes: [shoutout.shoutout_dislikes, dislike]}
                :
                shoutout
            )
        })
        this.setState({shoutouts: newShoutoutsArray})
    }

    updateLikes = (like) => {
        let newShoutoutsArray = this.state.shoutouts.map(shoutout => {
            return (
                shoutout.id === like.shoutout_id
                ?
                {...shoutout, shoutout_likes: [shoutout.shoutout_likes, like]}
                :
                shoutout
            )
        })
        this.setState({shoutouts: newShoutoutsArray})
    }

    createNewComment = (comment) => {
        let newShoutoutsArray = this.state.shoutouts.map(shoutout => {
            return (
                shoutout.id === comment.shoutout_id 
                ? 
                {...shoutout, shoutout_comments: [...shoutout.shoutout_comments, comment]} 
                : 
                shoutout
            )
        })
        this.setState({shoutouts: newShoutoutsArray})
    }

    render() {
        return(
            <div>
                <ShoutoutsPostContainer shoutouts={this.state.shoutouts} currentUserId={this.props.currentUserId} createNewShoutout={this.createNewShoutout} createNewComment={this.createNewComment} updateLikes={this.updateLikes} updateDislikes={this.updateDislikes}/>
            </div>
        )
    }
}

export default ShououtsPage;