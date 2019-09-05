import React from 'react';

class Comment extends React.Component {
    render() {
        // console.log(this.props.shoutouts)
        return(
            <div name='comment'>
                {this.props.comment.content}
            </div>
        )
    }
}

export default Comment;