import React from 'react'

class InputForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <input type="text" onChange={this.onChange} value={this.state.value}/>
            </div>
        )
    }
}

export default InputForm
