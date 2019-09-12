import React from 'react';
import SecretsPostContainer from './SecretsPostContainer'

class SecretPage extends React.Component {

    state = {
        secrets: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/secrets')
        .then(response => response.json())
        .then(data => this.setState({secrets: data}))
    }

    createNewSecret = (secret) => {
        this.setState({secrets: [...this.state.secrets, secret]})
    }

    // updateDislikes = (dislike) => {
    //     let newSecretsArray = this.state.secrets.map(secret => {
    //         return (
    //             secret.id === dislike.secret_id
    //             ?
    //             {...secret, secret_dislikes: [secret.secret_dislikes, dislike]}
    //             :
    //             secret
    //             )
    //     })
    //     this.setState({secrets: newSecretsArray})
    // }

    // updateLikes = (like) => {
    //     let newSecretsArray = this.state.secrets.map(secret => {
    //         return(
    //             secret.id === like.secret_id
    //             ?
    //             {...secret, secret_likes: [secret.secret_likes, like]}
    //             :
    //             secret
    //         )
    //     })
    //     this.setState({secrets: newSecretsArray})
    // }

    createNewComment = (comment) => {
        let newSecretsArray = this.state.secrets.map(secret => {
            return (
                secret.id === comment.secret_id
                ?
                {...secret, secret_comments: [...secret.secret_comments, comment]}
                :
                secret
            )
        })
        this.setState({secrets: newSecretsArray})
    }

    render() {
        return(
            <div className='Secrets-Page'>
                <SecretsPostContainer secrets={this.state.secrets} currentUserId={this.props.currentUserId} createNewSecret={this.createNewSecret} updateLikes={this.updateLikes} updateDislikes={this.updateDislikes} createNewComment={this.createNewComment}/>
            </div>
        )
    }
}

export default SecretPage;