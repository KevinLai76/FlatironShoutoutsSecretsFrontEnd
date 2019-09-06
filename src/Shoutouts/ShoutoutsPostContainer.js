import React from 'react';
import ShoutoutsMessageInput from './ShoutoutsMessageInput';
import ShoutoutsPost from './ShoutoutsPost'

class ShoutoutsPostContainer extends React.Component {

    renderPosts = () => {
        return this.props.shoutouts.map(shoutout => <ShoutoutsPost key={shoutout.id} shoutout={shoutout} currentUserId={this.props.currentUserId} createNewComment={this.props.createNewComment} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes}/>)
    }

    render() {
        return(
            <div>
                <ShoutoutsMessageInput currentUserId={this.props.currentUserId} createNewShoutout={this.props.createNewShoutout}/>
                {this.renderPosts()}
            </div>
        )
    }
}

export default ShoutoutsPostContainer