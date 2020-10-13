import React from 'react'

class SelectForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const options = this.props.options.map((option) => 
            <option key={option.id} value={option.name}>{option.name}</option>
        )

        return (
            <div>
                <p>{this.props.description}</p>
                <select value={this.state.value} onChange={this.onChange}>
                    {options}
                </select>
            </div>
        )
    }
}

export default SelectForm
