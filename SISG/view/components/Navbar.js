import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/">
                                {
                                    localStorage.getItem("SUNANGIRI:LOGO") === null
                                        ?
                                        <h3 className='m-0'>LOGO</h3>
                                        :
                                        <img className="logo" src={localStorage.getItem("SUNANGIRI:LOGO")} />
                                }
                            </Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-3 mt-lg-0 text-center">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sekolah
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownn">
                                        <Link to="/" className="dropdown-item" href="#">Home</Link>
                                        <Link to="/profile" className="dropdown-item" href="#">Profil Sekolah</Link>
                                        <Link to="/visi_misi" className="dropdown-item" href="#">Visi dan Misi</Link>
                                        <Link to="/kegiatan" className="dropdown-item" href="#">Kegiatan Sekolah</Link>
                                        <Link to="/fasilitas" className="dropdown-item" href="#">Fasilitas Sekolah</Link>
                                        {/* <Link to="/organisasi_sekolah" className="dropdown-item" href="#">Organisasi Sekolah</Link> */}
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Siswa
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/ekstrakurikuler" className="dropdown-item" href="#">Ekstrakurikuler</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/galeri" className="nav-link" href="#">Galeri</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="ppdb_register" className="nav-link" href="#">PPDB Online</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <nav id="sub-navbar" className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-3 mt-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sekolah
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownn">
                                        <Link to="/" className="dropdown-item" href="#">Beranda</Link>
                                        <Link to="/profile" className="dropdown-item" href="#">Profil Sekolah</Link>
                                        <Link to="/visi_misi" className="dropdown-item" href="#">Visi dan Misi</Link>
                                        <Link to="/kegiatan" className="dropdown-item" href="#">Kegiatan Sekolah</Link>
                                        <Link to="/fasilitas" className="dropdown-item" href="#">Fasilitas Sekolah</Link>
                                        <Link to="/organisasi_sekolah" className="dropdown-item" href="#">Organisasi Sekolah</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Siswa
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/organisasi_siswa" className="dropdown-item" href="#">Organisasi Sekolah</Link>
                                        <Link to="/ekstrakulikuler" className="dropdown-item" href="#">Ekstrakulikuler</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/galeri" className="nav-link" href="#">Galeri</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="ppdb_register" className="nav-link" href="#">PPDB Online</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

            </div>
        )
    }
}
