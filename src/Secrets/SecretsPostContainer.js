import React from 'react';
import SecretsPost from './SecretsPost'
import SecretsMessageInput from './SecretsMessageInput'

class SecretsPostContainer extends React.Component {

    renderPosts = () => {
        return this.props.secrets.map(secret => <SecretsPost key={secret.id} secret={secret} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes} createNewComment={this.props.createNewComment}/>)
    }

    render() {
        return (
            <div>
                <SecretsMessageInput currentUserId={this.props.currentUserId} createNewSecret={this.props.createNewSecret}/>
                {this.renderPosts()}
            </div>
        )
    }
}

export default SecretsPostContainer;