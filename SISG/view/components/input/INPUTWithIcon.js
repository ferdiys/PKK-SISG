import React, { Component } from 'react'

export default class INPUTWithIcon extends Component {
    render() {
        return (
            <div id="input-icon">
                <div class="input-group">
                    <span class="input-group-addon">
                        <button type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        )
    }
}
