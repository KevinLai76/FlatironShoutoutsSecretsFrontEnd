import React from 'react';
import SecretsLike from './SecretsLike';
import SecretsDislike from './SecretsDislike';
import SecretsCommentContainer from './SecretsCommentContainer';

class SecretsPost extends React.Component {

    state = {
        likes: this.props.secret.secret_likes.length,
        dislikes: this.props.secret.secret_dislikes.length
    }

    changeTotalLikes = () => {
        this.setState({likes: this.state.likes + 1})
    }

    changeTotalDislikes = () => {
        this.setState({dislikes: this.state.dislikes +1})
    }

    render() {
        return(
            <div>
                <div name='total_likes'>
                    <h1>{this.state.likes - this.state.dislikes}</h1>
                </div>
                <div name='secrets_post_content'>
                    {this.props.secret.content}
                </div>
                <SecretsLike secret={this.props.secret} updateLikes={this.props.updateLikes} changeTotalLikes={this.changeTotalLikes}/>
                <SecretsDislike secret={this.props.secret} updateDislikes={this.props.updateDislikes} changeTotalDislikes={this.changeTotalDislikes}/>
                <SecretsCommentContainer secret={this.props.secret} createNewComment={this.props.createNewComment}/>
            </div>
        )
    }
}

export default SecretsPost