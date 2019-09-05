import React from 'react';
import Like from './Like'
import Dislike from './Dislike'
import CommentContainer from './CommentContainer'

class ShoutoutsPost extends React.Component {

    state = {
        likes: this.props.shoutout.shoutout_likes.length,
        dislikes: this.props.shoutout.shoutout_dislikes.length
    }

    changeTotalLikes = () => {
        this.setState({likes: this.state.likes + 1})
    }

    changeTotalDislikes = () => {
        this.setState({dislikes: this.state.dislikes + 1})
    }

    render() {
        // console.log('shoutoutsPost props: ', this.props.shoutout)
        // console.log('shoutoutsPost likes: ', this.state.likes)
        // console.log('shoutoutsPost dislikes: ', this.state.dislikes)
        return (
            <div>
                <div name='total_likes'>
                    <h1>{this.state.likes - this.state.dislikes}</h1>
                </div>
                <div name='post_content'>
                    {this.props.shoutout.content}
                </div>
                <Like shoutout={this.props.shoutout} updateLikes={this.props.updateLikes} changeTotalLikes={this.changeTotalLikes}/>
                <Dislike shoutout={this.props.shoutout} updateDislikes={this.props.updateDislikes} changeTotalDislikes={this.changeTotalDislikes}/>
                <CommentContainer shoutout={this.props.shoutout} createNewComment={this.props.createNewComment}/>                
            </div>
        )
    }
}

export default ShoutoutsPost;