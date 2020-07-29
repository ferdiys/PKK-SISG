import React, { Component } from 'react'

export default class PageHeader extends Component {
    render() {
        return (
            <div>
                <div className="page-header row no-gutters py-4 w-100 mx-auto">
                    <div className="col-lg-12 col-md-6 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">{this.props.subLink}</span>
                        <h3 className="page-title">{this.props.pageTitle}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
