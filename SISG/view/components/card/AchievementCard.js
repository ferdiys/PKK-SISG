import React, { Component } from 'react'

export default class AchievementCard extends Component {
    render() {
        return (
            <div id="achieve-card">
                <img src={this.props.image} alt=""/>

                <div className="d-flex w-100 mt-4 align-items-center">
                    <p className="mb-0 mr-4 date"><i className="far fa-calendar-alt"></i> &nbsp;{this.props.date}</p>

                    <p className="mb-0 date"><i className="fas fa-trophy"></i> &nbsp;Juara {this.props.rank}</p>
                </div>

                <hr/>

                <h4 className="mb-3">{this.props.title}</h4>

                <p>{this.props.desc}</p>

            </div>
        )
    }
}
