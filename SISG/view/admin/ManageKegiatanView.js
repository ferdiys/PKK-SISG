import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'

import '../../assets/scss/manage-kegiatan.css'

import CardWithBigImage from '../components/card/CardWithBigImage'
import ListWithCategory from '../components/list/ListWithCategory'
import ReusableButton from '../components/btn/ReusableButton'

import Loading from '../components/Loading'

export default class ManageKegiatanView extends Component {
  render() {
    return (
      <div>

        <nav className="navbar justify-content-between p-0 ">

          <PageHeader 
            subLink="Manage Sekolah"
            pageTitle="Manage Kegiatan"/>
          
          <div className="right-container">
            <div className="row">
              <ReusableButton 
                className="btn btn-success px-3"
                onClick={() => this.props.method.goToPage("manage_kegiatan/tambah")}
                buttonText="Tambah kegiatan" />

              {/* <InputWithIcon /> */}
            </div>
          </div>

        </nav>
      
        <div id="kegiatan-content" className="row">

          <div className="left-container col-lg-10 col-md-12 col-sm-12">

          {
            this.props.state.isLoaded === true
              ?
              this.props.state.kegiatan.map((item, id) => {
                return <div key={id}>
                  <CardWithBigImage
                    id={item.id}
                    title={item.title}
                    date={item.dateKeg}
                    image={item.image}
                    desc={item.description}
                    onClick={() => this.props.method.goToPage(`manage_kegiatan/edit/${item.id}`)} />
                </div>
              })
              :
              <div style={{ marginTop: 60 }}>
                <Loading color="#e6be1e" />
              </div>
          }
          </div>

          {/* <div className="right-container col-lg-4 col-md-12 col-sm-12">
            
            <div className="card">
              <div className="card-body">

                <h4 className="title">Terbaru</h4>
                <hr></hr>
                
                <ListWithCategory 
                  title="Green School Ftival 2019"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
                  category="Kebersihan"
                  date="Nov 30, 2019" />

                <ListWithCategory 
                  title="Green School Festival 2019"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
                  category="Kebersihan"
                  date="Nov 30, 2019" />                  
              </div>
            </div>

          </div> */}
        </div>

      </div>
    )
  }
}
