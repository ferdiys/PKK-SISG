import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'

import CardRow from '../components/card/CardRow'
import ReusableButton from '../components/btn/ReusableButton'
import Loading from '../components/Loading'

export default class ManageFasilitasView extends Component {
    render() {
        return (
            <div>

                <nav className="navbar justify-content-between p-0 ">

                    <PageHeader
                        subLink="Manage Sekolah"
                        pageTitle="Manage Fasilitas"
                    />

                    <ReusableButton
                        className="btn btn-success px-3"
                        onClick={() => this.props.method.goToPage("manage_fasilitas/tambah")}
                        buttonText="Tambah Fasilitas" />

                </nav>

                <div id="fasilitas-content">

                    {
                        this.props.state.isLoaded === true
                            ?
                            this.props.state.facility.length !== 0
                                ?
                                this.props.state.facility.map((item, id) => {
                                    return <div key={id}>
                                        <CardRow
                                            id={item.id}
                                            title={item.title}
                                            desc={item.description}
                                            img={item.image}
                                            onClick={() => this.props.method.goToPage(`manage_fasilitas/edit/${item.id}`)}
                                        />
                                    </div>
                                })
                                :
                                <div className="text-center my-5">
                                    <h5 style={{opacity:.4}}>Belum Ada Fasilitas</h5>
                                </div>
                            :
                            <div style={{ marginTop: 60 }}>
                                <Loading color="#e6be1e" />
                            </div>
                    }

                    {/* <CardRow
                        title={"Lab Komputer"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                        img={"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80"}
                    />

                    <CardRow
                        title={"Mushola"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                        img={"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80"}
                    />

                    <CardRow
                        title={"Lapangan Basket"}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                        img={"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80"}
                    /> */}

                </div>

            </div>
        )
    }
}