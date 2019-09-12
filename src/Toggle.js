import React from 'react';

class Toggle extends React.Component {

    handleChange = () => {
        this.props.toggle()
    }

    render() {
        return (
            <div>
                {localStorage.token
                ?
                <label className='Switch'>
                    <small>{this.props.secret ? 'Turn on the Lights' : 'After Dark'}</small>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span className="slider"></span>
                </label>
                :
                null
                }
            </div>
        )
    }
}

export default Toggle;