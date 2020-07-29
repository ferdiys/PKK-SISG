import React, { Component } from 'react'

export default class CardRow extends Component {
    render() {
        return (
            <div id="card-row" style={{cursor:'pointer'}} onClick={()=>this.props.onClick(this.props.id)}>
                <div className="card">

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.desc}</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <img className="my-auto" src={this.props.img} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}