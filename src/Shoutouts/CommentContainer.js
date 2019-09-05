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
            <div name='comment_container'>
                <div name='comments_dropdown' onClick={this.handleClick}>
                    <small>Comments </small>
                </div>
                <div>
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