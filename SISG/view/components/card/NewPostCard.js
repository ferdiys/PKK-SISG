import React, { Component } from 'react'

export default class NewPostCard extends Component {
    render() {
        return (
            <div id="new-post-card">
                <div className="row">
                    <div className="col-5">
                        <img src={this.props.image} />
                    </div>

                    <div className="col-7">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}