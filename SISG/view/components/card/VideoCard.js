import React, { Component } from 'react'

export default class VideoCard extends Component {
    render() {
        return (
            <div onClick={(e) => this.props.onClick(e) === undefined ? console.log("CLICK") : this.props.onClick(e)} style={{ cursor: 'pointer' }}>
                <video key className="video-player w-100" autoPlay={this.props.autoPlay === undefined ? false : true} controls={true} style={{ maxHeight: 350 }} 
                preload={"auto"} src={this.props.src === undefined ? 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' : this.props.src}>
                    {/* <source src={this.props.src === undefined ? 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' : this.props.src} type="video/mp4" />
                    Your browser does not support HTML5 video. */}
                </video>
            </div>
        )
    }
}
