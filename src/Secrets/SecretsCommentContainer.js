import React from 'react';
import SecretsComment from './SecretsComment';
import SecretsCommentInput from './SecretsCommentInput';

class SecretsCommentContainer extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    renderComment = () => {
        return this.props.secret.secret_comments.map(comment => <SecretsComment key={comment.id} comment={comment}/>)
    }

    render() {
        return (
            <div name='comment_container'>
                <div name='comments_dropdown' onClick={this.handleClick}>
                    <small>Comments</small>
                </div>
                <div>
                    {
                        this.state.clicked
                        ?
                        <div>
                            <SecretsCommentInput secret={this.props.secret} createNewComment={this.props.createNewComment}/>
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

export default SecretsCommentContainer;