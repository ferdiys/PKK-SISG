import React, { Component } from 'react'

export default class ActivityCard extends Component {
    render() {
        return (
            <div id="activity-card">
                <img src={this.props.image === undefined ? "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" : this.props.image} alt="" />
                <h4>
                    {this.props.item}
                </h4>
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}
