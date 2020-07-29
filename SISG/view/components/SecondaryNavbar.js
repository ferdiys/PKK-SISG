import React, { Component } from 'react'

export default class SecondaryNavbar extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand">
                        <strong>LOGO</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sekolah
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Galeri</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Berita</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PPDB Online</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
