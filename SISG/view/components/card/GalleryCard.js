import React, { Component } from 'react'

export default class GalleryCard extends Component {
    render() {
        return (
            <div id="gallery-card">
                <img src={this.props.image} alt=""/>
                <div className="mt-2 p-2">
                    <p>{this.props.kind}</p>
                    <h5>{this.props.title}</h5>
                    <p className="mt-2">{this.props.desc}</p>
                    {/* <p className="mt-1 mb-0"><a>READ MORE</a> &nbsp; <i className="fa fa-long-arrow-right"></i></p> */}
                </div>
            </div>
        )
    }
}