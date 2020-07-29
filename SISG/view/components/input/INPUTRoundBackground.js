import React, { Component } from 'react'

export default class INPUTRoundBackground extends Component {
    render() {
        return (
            <div id="input-rounded-background">
                <input 
                maxLength={this.props.maxLength}
                value={this.props.value}
                onChange={(e)=> this.props.onChange(e)}
                name={this.props.name === undefined ? "default" : this.props.name}
                type={this.props.type === undefined ? "text" : this.props.type}
                placeholder={this.props.placeholder === undefined ? " " : this.props.placeholder}
                />
            </div>
        )
    }
}
