import React, { Component } from 'react'

export default class INPUTTextRoundBackground extends Component {
    render() {
        return (
            <div id="input-rounded-background">
                <textarea
                    className="textarea"
                    onChange={(e) => this.props.onChange(e)}
                    name={this.props.name === undefined ? "default" : this.props.name}
                    type={this.props.type === undefined ? "text" : this.props.type}
                    placeholder={this.props.placeholder === undefined ? " " : this.props.placeholder}
                ></textarea>
            </div>
        )
    }
}
