import React, { Component } from 'react'

import ForgotPasswordView from '../../view/admin/ForgotPasswordView'
import { Admin } from '../../model/MAdmin'

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: ''
        }

        this.method = {
            _setForm: this._setForm.bind(this),
            sendResetPass: this._sendResetPass.bind(this)
        }

    }

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        })
    }

    _sendResetPass = async () => {
        await Admin.FORGOT_PASSWORD(this.state.email).then(res => {
            if (Admin.data.message == 'Password reset email sent.') {
                console.log(Admin.data)
                this.props.history.push('/admin-login')
                alert('password reset link telah dikirim')
            }else{
                alert('password reset link gagal dikirim')
            }
        })
    }

    render() {
        return <ForgotPasswordView state={this.state} method={this.method} />
    }
}
