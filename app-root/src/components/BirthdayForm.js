import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class BirthdayForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(date) {
        this.setState({value: date})
    }

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <DatePicker selected={this.state.value} onSelect={this.onSelect} />
            </div>
        )
    }
}

export default BirthdayForm
