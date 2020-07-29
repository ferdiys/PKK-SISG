import React, { Component } from 'react'
import INPUTRoundBackground from '../components/input/INPUTRoundBackground'
import Loading from '../components/Loading'

export default class ADMINAuth extends Component {

    render() {
        return <div id="admin-auth">

            <div className="row no-gutter w-100 mx-auto h-100">

                <div className="col-12 col-md-6 col-lg-4 form">
                    <h6>SMP SUNAN GIRI</h6>
                    <h3>Login untuk masuk ke dashboard.</h3>

                    <br></br>

                    <div className="my-4">
                        <label>Email </label>
                        <INPUTRoundBackground
                            onChange={e => this.props.method._setForm(e)}
                            name="email" />
                    </div>
                    <div className="my-4">
                        <label>Password </label>
                        <INPUTRoundBackground
                            onChange={e => this.props.method._setForm(e)}
                            name="password"
                            type="password" />
                    </div>

                    <a href="/forgot-password"><p className="forgot-password">forgot password</p></a>

                    <br></br>

                    {/* LOGIN BTN */}
                    <button className="login-btn" onClick={() => this.props.method._login()}>
                        {
                            this.props.state.loading === false
                                ?
                                "Login"
                                :
                                <Loading color="#ffffff" />
                        }
                    </button>

                    {/* ERR MESSAGE */}
                    <p style={{ color: '#c0392b' }} className="mt-3">
                        {this.props.state.err_message}
                    </p>

                    {/* COPYRIGHT */}
                    <p className="copyright">@SMP SUNAN GIRI</p>

                </div>
                <div className="col-12 col-md-6 col-lg-8 background"></div>

            </div>

        </div>
    }
}
