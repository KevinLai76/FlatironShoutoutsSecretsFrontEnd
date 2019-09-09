import React from 'react';

class SecretsComment extends React.Component {
    render() {
        return (
            <div name='comment'>
                {this.props.comment.content}
            </div>
        )
    }
}

export default SecretsComment;