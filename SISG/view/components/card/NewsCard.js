import React, { Component } from 'react'
var imageDef="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

export default class NewsCard extends Component {
    render() {
        return (
            <div id="news-card" key={this.props.id} onClick={(e)=>this.props.onClick(e)}>
                <img src={this.props.img === undefined ? imageDef : this.props.img} alt="" />
                <div className="p-4">
                    <p><i className="far fa-calendar-alt"></i> &nbsp;{this.props.date}</p>
                    <h5>{this.props.title}</h5>
                </div>
            </div>
        )
    }
}
