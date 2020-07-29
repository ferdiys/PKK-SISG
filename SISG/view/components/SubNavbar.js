import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SubNavbar extends Component {
    render() {
        return (
            <div id="sub-navbar" style={style.container}>
                <div className="container">
                    <ul class="list-group list-group-horizontal">
                        <Link to={'list_ppdb'} class="list-group-item px-0 pr-4" style={{ border: 0 }}>
                            <h6 style={style.h6} >Daftar peserta PPDB</h6>
                        </Link>
                    </ul>
                </div>
            </div>

        )
    }
}

const style = ({
    container: {
        boxShadow: '0px 6px 6px rgba(0,0,0,0.1)',
    },
    h6: {
        cursor: 'pointer',
        margin: '10px 0px',
    }
})
