import React, { Component } from 'react'
import PageHeader from '../../view/components/admin/PageHeader'
import FormInputWithLabel from '../../view/components/input/FormInputWithLabel'
import ReusableButton from '../../view/components/btn/ReusableButton'
import { AuthKey } from '../../system/Collection'
import { Admin } from '../../model/MAdmin'
import { toast } from 'react-toastify'

const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
const parse = JSON.parse(storage)

export default class ManageAkun extends Component {

    constructor(props) {
        super(props)

        this.state = {
            old_password: '',
            old_err: null,
            new_password: '',
            new_password_confirmation: '',
            new_err: null,
        }

    }

    changePassword = async () => {
        this.setState({old_err:null,new_err:null})
        if (this.state.new_password !== this.state.new_password_confirmation) return toast.warn("Password tidak sama!")

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        let formData = {
            old_password: this.state.old_password,
            new_password: this.state.new_password,
            new_password_confirmation: this.state.new_password_confirmation
        }

        await Admin.CHANGE_PASSWORD(headers, formData).then(res => {

            if (Admin.data.status === 200) {
                toast.success(Admin.data.message)
            } else if (Admin.data.errors) {

                if (Admin.data.errors.old_password[0]) {
                    this.setState({ old_err: Admin.data.errors.old_password[0] })
                }

                if (Admin.data.errors.new_password[0]) {
                    this.setState({ new_err: Admin.data.errors.new_password[0] })
                }

            } else {
                toast.warn(Admin.data.message)
            }

        })


    }

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        })
    }

    render() {
        return <div id="manage-akun">

            <PageHeader
                subLink="Akun Admin"
                pageTitle="Ganti Password" />

            {/* <FormInputWithLabel
                for="txt-school"
                label="Email"
                type="text"
                value={this.state.email}
                onChange={(e) => this._setForm(e)}
                className="form-control"
                name="email" /> */}

            <FormInputWithLabel
                for="txt-school"
                label="Password Lama"
                type="password"
                value={this.state.password}
                onChange={(e) => this._setForm(e)}
                className="form-control"
                name="old_password" />

            {
                this.state.old_err !== null
                    ?
                    <p className="err">{`* ${this.state.old_err}`}</p>
                    :
                    <span></span>
            }

            <FormInputWithLabel
                for="txt-school"
                label="Password Baru"
                type="password"
                value={this.state.password_confirmation}
                onChange={(e) => this._setForm(e)}
                className="form-control"
                name="new_password" />

            <FormInputWithLabel
                for="txt-school"
                label="Password Baru"
                type="password"
                value={this.state.password_confirmation}
                onChange={(e) => this._setForm(e)}
                className="form-control"
                name="new_password_confirmation" />

            {
                this.state.new_err !== null
                    ?
                    <p className="err">{`* ${this.state.new_err}`}</p>
                    :
                    <span></span>
            }

            <div className="ml-auto">
                <ReusableButton
                    className="btn btn-primary px-4 mt-4"
                    onClick={() => this.changePassword()}
                    buttonText="Simpan" />
            </div>


        </div>
    }
}
