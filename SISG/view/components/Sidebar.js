import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ match }) {
    return (
        <div>
            <div className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <a className="navbar-brand w-100 mr-0" href="#" style={{ lineHeight: 25 }}>
                            <div className="d-table m-auto">
                                <img id="main-logo" className="d-inline-block align-top mt-2 mr-1" style={{ maxWidth: 25 }} src="https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="logo" />
                                <h6 className="d-inline-block align-top mt-2     mr-1">SMP Sunan Giri</h6>
                            </div>
                        </a>

                        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                            <i className="material-icons">&#xE5C4;</i>
                        </a>
                    </nav>
                </div>
                <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                    <div className="input-group input-group-seamless ml-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />
                    </div>
                </form>
                <div class="nav-wrapper">
                    <ul class="nav flex-column">

                        <li class="nav-item">
                            <Link to={"/admin"}>
                                <a class="nav-link active" href="components-blog-posts.html">
                                    <i class="material-icons">vertical_split</i>
                                    <span>Dasboard</span>
                                </a>
                            </Link>
                        </li>

                        <li class="nav-item">
                            <a href="#manage_sekolah_submenu" class="nav-link dropdown-toggle" aria-expanded="false" data-toggle="collapse" >
                                <i class="material-icons">edit</i>
                                <span>Manage Sekolah</span>
                            </a>
                            <ul class="list-unstyled pl-4" id="manage_sekolah_submenu">
                                <li className="my-3 sub-link">
                                    <Link to={`${match.url}/manage-identitas`}>Identitas Sekolah</Link>
                                </li>

                                <li className="my-3 sub-link">
                                    <Link to={`${match.url}/manage-kegiatan`}>Kegiatan Sekolah</Link>
                                </li>

                                <li className="my-3 sub-link">
                                    <Link to={`${match.url}/manage-ekstrakulikuler`} >Ekstrakulikuler</Link>
                                </li>

                                <li className="my-3 sub-link">
                                    <Link to={`${match.url}/manage-fasilitas`} >Fasilitas Sekolah</Link>
                                </li>

                                <li className="my-3 sub-link">
                                    <Link to={`${match.url}/manage-fotovideo`} >Foto & Video</Link>
                                </li>

                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#manage_ppdb_submenu" class="nav-link dropdown-toggle" aria-expanded="false" data-toggle="collapse" >
                                <i class="material-icons">edit</i>
                                <span>Manage PPDB</span>
                            </a>
                            <ul class="list-unstyled pl-4" id="manage_ppdb_submenu">
                                <Link to={"admin/waktu_pendaftaran"}>
                                    <li className="my-3 sub-link">
                                        <a href="#">Waktu Pendaftaran</a>
                                    </li>
                                </Link>
                                <Link to={"admin/daftar_calon_siswa"}>
                                    <li className="my-3 sub-link">
                                        <a href="#">Data Calon Siswa</a>
                                    </li>
                                </Link>
                                <Link to={"admin/data_siswa"}>
                                    <li className="my-3 sub-link">
                                        <a href="#">Laporan Data Siswa</a>
                                    </li>
                                </Link>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="user-profile-lite.html">
                                <i class="material-icons">person</i>
                                <span>Manage Akun</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="errors.html">
                                <i class="material-icons">error</i>
                                <span>Pengaturan</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
