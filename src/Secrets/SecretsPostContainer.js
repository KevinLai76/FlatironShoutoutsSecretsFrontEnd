import React from 'react';
import SecretsPost from './SecretsPost'
import SecretsMessageInput from './SecretsMessageInput'

class SecretsPostContainer extends React.Component {

    state = {
        sort: true,
        topClicked: true,
        newClicked: false
    }

    mapped = () => {
        return this.props.secrets.map(secret => <SecretsPost key={secret.id} secret={secret} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes} createNewComment={this.props.createNewComment}/>).reverse()
    }

    sortByTop = () => {
        let sortedArray = this.mapped().sort((a, b) => {
            return (b.props.secret.secret_likes.length - b.props.secret.secret_dislikes.length) - (a.props.secret.secret_likes.length - a.props.secret.secret_dislikes.length)
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

    // renderPosts = () => {
    //     let secretsArray =  this.props.secrets.map(secret => <SecretsPost key={secret.id} secret={secret} updateLikes={this.props.updateLikes} updateDislikes={this.props.updateDislikes} createNewComment={this.props.createNewComment}/>)
    //     let sortedArray = secretsArray.sort((a, b) => {
    //         return (b.props.secret.secret_likes.length - b.props.secret.secret_dislikes.length) - (a.props.secret.secret_likes.length - a.props.secret.secret_dislikes.length)
    //     })
    //     return sortedArray
    // }

    render() {
        return (
            // <div>
            //     <ShoutoutsMessageInput currentUserId={this.props.currentUserId} createNewShoutout={this.props.createNewShoutout}/>                
            //     <div className='Shoutouts-Post-Filter' name='filters'>
            //         <form>
            //             <small className='Shoutouts-Post-Filter-Sort-Label'>Sort</small>
            //             <small className='Shoutouts-Post-Filter-Top-Label'>Top</small> 
            //             <input className='Shoutouts-Post-Filter-Top-Input' type='radio' name='Top' onChange={this.handleChange} checked={this.state.topClicked}/>
            //             <small className='Shoutouts-Post-Filter-New-Label' >New</small> 
            //             <input className='Shoutouts-Post-Filter-New-Input' type='radio' name='New' onChange={this.handleChange} checked={this.state.newClicked}/>
            //         </form>
            //     </div>
            //     <div className='Shoutouts-Post-Container'>
            //         {
            //             this.state.sort
            //             ?
            //             this.sortByTop()
            //             :
            //             this.mapped()
            //         }
            //     </div>
            // </div>
            <div>
                <SecretsMessageInput currentUserId={this.props.currentUserId} createNewSecret={this.props.createNewSecret}/>
                <div className='Secrets-Post-Filter' name='filters'>
                    <form>
                        <small className='Secrets-Post-Filter-Sort-Label'>Sort:</small>
                        <small className='Secrets-Post-Filter-Top-Label'>Top</small> 
                        <input className='Secrets-Post-Filter-Top-Input' type='radio' name='Top' onChange={this.handleChange} checked={this.state.topClicked}/>
                        <small className='Secrets-Post-Filter-New-Label'>New</small> 
                        <input className='Secrets-Post-Filter-New-Input' type='radio' name='New' onChange={this.handleChange} checked={this.state.newClicked}/>
                    </form>
                </div>
                <div className='Secrets-Post-Container'>
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

export default SecretsPostContainer;