import React, { Component } from 'react'

export default class ExtraCard extends Component {
    render() {
        return (
            <div id="extra-card" key={this.props.id}>
                <div className="row mt-5 align-items-center">
                    <div className="col-12 col-md-8">
                        <h4 className="mb-0 mb-md-2">{this.props.title}</h4>
                        <p>{this.props.desc}</p>
                    </div>
                    <div className="col-12 col-md-4 mt-3 mt-md-0 mt-lg-0">
                        <img src={this.props.image} alt="image"/>
                    </div>
                </div>
            </div>
        )
    }
}
