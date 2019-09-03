import React from 'react';
import Like from './Like'
import Dislike from './Dislike'
import CommentContainer from './CommentContainer'

class ShoutoutsPost extends React.Component {

    state = {
        likes: this.props.shoutout.shoutout_likes,
        dislikes: this.props.shoutout.shoutout_dislikes
    }

    updateDislikes = (dislike) => {
        this.setState({dislikes: [...this.state.dislikes, dislike]})
    }

    updateLikes = (like) => {
        // console.log('new like:', like)
        // console.log('likes state: ', this.state.likes)
        this.setState({likes: [...this.state.likes, like]})
    }

    render() {
        return (
            <div>
                <div name='total_likes'>
                    <h1>{this.state.likes.length - this.state.dislikes.length}</h1>
                </div>
                <div name='post_content'>
                    {this.props.shoutout.content}
                </div>
                <Like shoutout={this.props.shoutout} updateLikes={this.updateLikes} likes={this.state.likes}/>
                <Dislike shoutout={this.props.shoutout} updateDislikes={this.updateDislikes} dislikes={this.state.dislikes}/>
                <CommentContainer shoutout={this.props.shoutout}/>                
            </div>
        )
    }
}

export default ShoutoutsPost;