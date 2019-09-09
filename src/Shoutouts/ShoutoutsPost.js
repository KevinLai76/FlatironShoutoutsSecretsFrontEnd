import React from 'react';
import Like from './Like';
import Dislike from './Dislike';
import CommentContainer from './CommentContainer';

class ShoutoutsPost extends React.Component {

    state = {
        likes: this.props.shoutout.shoutout_likes.length,
        dislikes: this.props.shoutout.shoutout_dislikes.length
    }

    changeTotalLikes = () => {
        this.setState({likes: this.state.likes + 1})
    }

    changeTotalDislikes = () => {
        // check your logic and shit what does your conditonal need to be? If the total ammout of likes drops below -5 then delete the post and all of it's likes/dislikes/comments
        // this.state.likes - this.state.dislikes > -5 
        // ?
        this.setState({dislikes: this.state.dislikes + 1})
        // :
        // fetch(`http://localhost:3000/shoutouts/${this.props.shoutout.id}`, {
        //     method: 'DELETE',
        //     // headers: {
        //     //     'Content-Type': 'application/json',
        //     //     'Accepts': 'application/json'
        //     })
        //     .then(response => response.json())
        //     .then(console.log)
    }

    render() {
        // console.log(this.state.total)
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