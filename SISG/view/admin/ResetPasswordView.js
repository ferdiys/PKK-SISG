import React, { Component } from 'react'

import FormInputWithLabel from '../../view/components/input/FormInputWithLabel'
import INPUTRoundBackground from '../components/input/INPUTRoundBackground'
import ReusableButton from '../../view/components/btn/ReusableButton'

export default class ResetPasswordView extends Component {
    render() {
        return (
            <div>
                <div id="reset-password">
                    <div className="container">
                        <div className="card mt-5">
                            <div className="card-body">

                                <p>Email</p>
                                <INPUTRoundBackground
                                    onChange={e => this.props.method._setForm(e)}
                                    name="email"
                                    type="email" />

                                <p className="mt-4">Password</p>
                                <INPUTRoundBackground
                                    onChange={e => this.props.method._setForm(e)}
                                    name="password"
                                    type="password" />

                                <p className="mt-4">Confirm Password</p>
                                <INPUTRoundBackground
                                    onChange={e => this.props.method._setForm(e)}
                                    name="password_confirmation"
                                    type="password" />

                                <div className="ml-auto">
                                    <ReusableButton
                                        className="btn btn-primary px-4 mt-4"
                                        onClick={() => this.props.method.submit()}
                                        buttonText="Kirim" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
