import React, { Component } from 'react'

import ResetPasswordView from '../../view/admin/ResetPasswordView'
import { Admin } from '../../model/MAdmin'
import { toast } from 'react-toastify'

export default class ResetPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            token: this.props.match.params.token
        }

        this.method = {
            _setForm: this._setForm.bind(this),
            submit: this._submit.bind(this)
        }

    }

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        })
    }

    _submit = async () => {
        if (this.state.password !== this.state.password_confirmation) return toast.warn("Password tidak sama!")

        if (this.state.email === '' || this.state.password === '' || this.state.password_confirmation === '') return toast.warn("isi semua field!")

        if (this.state.password.length < 8) return toast.warn("password minimal 8 karakter!")

        let formData = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        await Admin.RESET_PASSWORD(formData).then(res => {
            if (Admin.data) {
                
                if (Admin.data.message === 'Invalid token') {
                    toast.error("invalid token !")
                }else if(Admin.data.message === 'Password reset successfully'){
                    alert('berhasil reset password')
                    this.props.history.push('/admin-login')
                }
            }
        })
    }

    render() {
        return <ResetPasswordView state={this.state} method={this.method} />
    }
}
