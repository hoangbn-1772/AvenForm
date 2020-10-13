import React from 'react'
import InputForm from './InputForm'
import BirthdayForm from './BirthdayForm'
import { citis } from '../constants/City'
import SelectForm from './SelectForm'

function Header(props) {
	return <h2>{ props.title }</h2>
}

class CommonForm extends React.Component {

    render() {
        return (
            <div>
                <Header title="Thông tin liên hệ" />
                <InputForm description="Fullname" />
                <BirthdayForm description="Birthday" />
                <InputForm description="Phone number" />
                <InputForm description="Email" />
                <InputForm description="Address" />
                <InputForm description="Company Name" />
                <SelectForm description="City" options={citis} />
            </div>
        )
    }
}

export default CommonForm
