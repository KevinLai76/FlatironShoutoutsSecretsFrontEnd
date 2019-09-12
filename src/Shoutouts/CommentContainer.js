import React from 'react';
import Comment from './Comment'
import CommentInput from './CommentInput'

class CommentContainer extends React.Component {

    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    renderComment = () => {
        return this.props.shoutout.shoutout_comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    }

    render() {
        return(
            <div className='Shoutouts-Comment-Container' name='comment_container'>
                <div className='Shoutouts-Comments-Button' name='comments_dropdown' onClick={this.handleClick}>
                    <small>Comments 💬</small>
                </div>
                <div className='Shoutouts-Comment-Container-Comments'>
                    { 
                        this.state.clicked 
                        ?
                        <div>
                            <CommentInput shoutout={this.props.shoutout} createNewComment={this.props.createNewComment}/>    
                            {this.renderComment()}
                        </div>
                        :
                        null
                    }
                </div> 
            </div>
        )
    }
}

export default CommentContainer;