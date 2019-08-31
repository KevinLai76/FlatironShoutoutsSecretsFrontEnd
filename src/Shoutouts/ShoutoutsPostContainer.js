import React from 'react';
import ShoutoutsMessageInput from './ShoutoutsMessageInput';
import ShoutoutsPost from './ShoutoutsPost'

class ShoutoutsPostContainer extends React.Component {

    renderPosts = () => {
        // set up REDUX! props are passed down just map through them and pass them 
    }

    render() {

        return(
            <div>
                <ShoutoutsMessageInput />
                <ShoutoutsPost />
            </div>
        )
    }
}

export default ShoutoutsPostContainer