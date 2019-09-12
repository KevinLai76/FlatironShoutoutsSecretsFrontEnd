import React from 'react';

class Comment extends React.Component {
    render() {
        return(
            <div className='Shoutouts-Comment' name='comment'>
                {this.props.comment.content}
            </div>
        )
    }
}

export default Comment;