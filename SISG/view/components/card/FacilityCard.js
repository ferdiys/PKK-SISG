import React, { Component } from 'react'

export default class FacilityCard extends Component {
    render() {
        return (
            <div id="facility-card">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 col-md-8">
                        <h4>Lab Komputer</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . . .
                        </p>
                    </div>
                    <div className="col-12 col-md-4 col-md-4 mt-3 mt-md-0 mt-lg-0">
                        <img src={"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80"} alt="" className="image" />
                    </div>
                </div>
            </div>
        )
    }
}
