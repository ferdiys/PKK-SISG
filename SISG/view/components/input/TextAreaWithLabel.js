import React, { Component } from 'react'

export default class TextAreWithLabel extends Component {
    render() {
        return (
            <div id="text-area-labels">
                <div className="form-group mb-2">
                    <label htmlFor={this.props.for}>{this.props.label}</label>
                    <textarea style={{height: 300}} className="form-control" id={this.props.for} name={this.props.name} rows={this.props.rows} value={this.props.value} onChange={e => this.props.onChange(e)}> </textarea>
                </div>
            </div>
        )
    }
}
