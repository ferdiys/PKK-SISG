import React, { Component } from 'react'

import ADMINAuthView from '../../view/admin/ADMINAuthView'
import { Admin } from '../../model/MAdmin'
import { AuthKey } from '../../system/Collection'

export default class ADMINAuth extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            err_message: null,
            loading: false
        }

        this.method = {
            _login: this._login.bind(this),
            _setForm: this._setForm.bind(this)
        }
    }

    componentDidMount = () => {

        setTimeout(() => {
            this.forceUpdate()
            console.log("Restarted")
        }, 200);

        if (localStorage.getItem(AuthKey.LOGIN_DATA)) {
            this.props.history.push('admin')
        }
    }

    _login = async () => {

        this.setState({ loading: !this.state.loading })

        if (this.state.email === "" && this.state.password === "") return this.setState({ err_message: "Please fill all the required data", loading: false })

        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        await Admin.LOGIN(formData).then(res => {

            if (Admin.data.access_token && Admin.data.token_type) {

                var loginData = {
                    email: this.state.email,
                    access_token: Admin.data.access_token,
                    token_type: Admin.data.token_type,
                    expires_in: Admin.data.expires_in
                }

                console.log(loginData)

                localStorage.setItem(AuthKey.LOGIN_DATA, JSON.stringify(loginData))

                if (localStorage.getItem(AuthKey.LOGIN_DATA)) {
                    this.setState({ loading: !this.state.loading })
                    this.props.history.push('admin')
                } else {
                    this.setState({
                        err_message: "Mohon ulangi lagi",
                        loading: !this.state.loading
                    })
                }

            } else {
                this.setState({
                    err_message: "Email atau password salah",
                    loading: !this.state.loading
                })
            }

        })
            .catch(
                err => {
                    console.log(err);
                    this.setState({ loading: false })
                }
            );
    }

    _setForm = (e) => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        },
            // () => console.log(this.state.email)
        )
    }

    render() {
        return <ADMINAuthView state={this.state} method={this.method} />
    }
}
