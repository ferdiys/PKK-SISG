import React, { Component } from 'react'

import FormInputWithLabel from '../../view/components/input/FormInputWithLabel'
import INPUTRoundBackground from '../components/input/INPUTRoundBackground'
import ReusableButton from '../../view/components/btn/ReusableButton'

export default class ForgotPasswordView extends Component {
    render() {
        return (
            <div>
                <div id="forgot-password">
                    <div className="container">
                        <div className="card mt-5"> 
                            <div className="card-body">

                                <h5>Email</h5>
                                <INPUTRoundBackground
                                    onChange={e => this.props.method._setForm(e)}
                                    name="email"
                                    type="email" />

                                <div className="ml-auto">
                                    <ReusableButton
                                        className="btn btn-primary px-4 mt-4"
                                        onClick={() => this.props.method.sendResetPass()}
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
