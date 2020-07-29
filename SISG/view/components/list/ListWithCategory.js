import React, { Component } from 'react'

export default class ListWithCategory extends Component {
    render() {
        return (
            <div>
                <div id="list-category" className="mb-3">
                    
                    <div className="head">
                        <h5 className="title-category">{this.props.title}</h5>
                    </div>

                    <div className="desc m-0">
                        <p className="short-desc m-0">{this.props.desc}</p>
                    </div>

                    <div className="footer">
                        <nav className="navbar justify-content-between p-0">
                            <div className="category">{this.props.category}</div>
                            <div className="date">{this.props.date}</div>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}
