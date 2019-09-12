import React from 'react';
import ShoutoutsMessageInput from './ShoutoutsMessageInput';
import ShoutoutsPost from './ShoutoutsPost'

class ShoutoutsPostContainer extends React.Component {

    state = {
        sort: true,
        topClicked: true,
        newClicked:false
    }
    
    mapped = () => {
        return this.props.shoutouts.map(shoutout => <ShoutoutsPost key={shoutout.id} shoutout={shoutout} currentUserId={this.props.currentUserId} createNewComment={this.props.createNewComment} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes}/>).reverse()
    }

    sortByTop = () => {
        let sortedArray = this.mapped().sort((a, b) => {
            return (b.props.shoutout.shoutout_likes.length - b.props.shoutout.shoutout_dislikes.length) - (a.props.shoutout.shoutout_likes.length - a.props.shoutout.shoutout_dislikes.length)
        })
        return sortedArray
    }

    handleChange = (event) => {
        if (event.target.name === 'New') {
            this.setState({topClicked: !this.state.topClicked})
            this.setState({newClicked: !this.state.newClicked})
            this.setState({sort: false})
        } else if (event.target.name === 'Top') {
            this.setState({newClicked: !this.state.newClicked})
            this.setState({topClicked: !this.state.topClicked})
            this.setState({sort: true})
        }
    }

    render() {
        return(
            <div>
                <ShoutoutsMessageInput currentUserId={this.props.currentUserId} createNewShoutout={this.props.createNewShoutout}/>                
                <div className='Shoutouts-Post-Filter' name='filters'>
                    <form>
                        <small className='Shoutouts-Post-Filter-Sort-Label'>Sort</small>
                        <small className='Shoutouts-Post-Filter-Top-Label'>Top</small> 
                        <input className='Shoutouts-Post-Filter-Top-Input' type='radio' name='Top' onChange={this.handleChange} checked={this.state.topClicked}/>
                        <small className='Shoutouts-Post-Filter-New-Label' >New</small> 
                        <input className='Shoutouts-Post-Filter-New-Input' type='radio' name='New' onChange={this.handleChange} checked={this.state.newClicked}/>
                    </form>
                </div>
                <div className='Shoutouts-Post-Container'>
                    {
                        this.state.sort
                        ?
                        this.sortByTop()
                        :
                        this.mapped()
                    }
                </div>
            </div>
        )
    }
}

export default ShoutoutsPostContainer