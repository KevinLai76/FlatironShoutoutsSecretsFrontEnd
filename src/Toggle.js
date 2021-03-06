import React from 'react';

class Toggle extends React.Component {

    handleChange = () => {
        this.props.toggle()
    }

    render() {
        return (
            <div className='Shoutouts-Switch-Container'>
                {
                localStorage.token
                ?
                <label className='Shoutouts-Switch'>
                    <small>{this.props.secret ? 'Turn on the Lights' : 'After Dark'}</small><br/>
                    <input className='Toggle' type="checkbox" onChange={this.handleChange}/>
                    <span className="slider"></span>
                </label>
                :
                <label className='Shoutouts-Switch Hidden'>
                    <small>{this.props.secret ? 'Turn on the Lights' : 'After Dark'}</small><br/>
                    <input className='Toggle' type="checkbox" onChange={this.handleChange}/>
                    <span className="slider"></span>
                </label>
                } 
            </div>
        )
    }
}

export default Toggle;