import React from 'react'

class TextAreaForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState = ({value: e.target.value})
    }

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <textarea value={this.state.value} onChange={this.onChange} />
            </div>
        )
    }
}

export default TextAreaForm
