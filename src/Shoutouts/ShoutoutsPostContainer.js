import React from 'react';
import ShoutoutsMessageInput from './ShoutoutsMessageInput';
import ShoutoutsPost from './ShoutoutsPost'

class ShoutoutsPostContainer extends React.Component {

    renderPosts = () => {
        return this.props.shoutouts.map(shoutout => <ShoutoutsPost key={shoutout.id} shoutout={shoutout} createNewComment={this.props.createNewComment} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes}/>)
    }

    render() {
        // console.log('shoutoutsPostContainer props: ',this.props.shoutouts)
        return(
            <div>
                <ShoutoutsMessageInput />
                {this.renderPosts()}
            </div>
        )
    }
}

export default ShoutoutsPostContainer