import React from 'react';

class SecretsComment extends React.Component {
    render() {
        return (
            <div className='Secrets-Comment' name='comment'>
                {this.props.comment.content}
            </div>
        )
    }
}

export default SecretsComment;