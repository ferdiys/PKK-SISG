import React, { Component } from 'react'

export default class CardWithBigImage extends Component {
    render() {
        return (
            <div>
                <div id="card-hero">
                    <div className="card" onClick={() => this.props.onClick(this.props.id)}>
                        <div className="card-body">
                            <div className="head">
                                <nav className="navbar justify-content-between p-0">
                                    <h2 className="title">{this.props.title}</h2>
                                    <div className="date">{this.props.date}</div>
                                </nav>
                            </div>
                            <div className="content mb-2">
                                <img src={this.props.image} style={{height:500}} className="big-image my-2"></img>
                                <div className="short-desc">
                                    <p>{this.props.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
