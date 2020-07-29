import React, { Component } from 'react'
import ManageKegiatanView from '../../view/admin/ManageKegiatanView'
import { Kegiatan } from '../../model/MKegiatan'
import { toast } from 'react-toastify'

export default class ManageKegiatan extends Component {

    constructor(props) {
      super(props)

      this.state = {
        kegiatan: [],

        isLoaded: false
      }

      this.method = {
        goToPage: this.goToPage.bind(this)
      }
    }

    componentDidMount() {
      window.scrollTo(0, 0)
      this.getKegiatan()
    }

    goToPage = (request) => {
      this.props.history.push({
          pathname: `${request}`,
          state: {
              data: request.id
          }
      })
    }

    getKegiatan = async () => {
      await Kegiatan.GET().then(res => {

        if (Kegiatan.data) {
          this.setState({ kegiatan: Kegiatan.data, isLoaded: true })
        }
        else{
          toast.success("Gagal mendapatkan data")
        }
      })

      .catch(
        err => {
          console.log("CATCH", err)
        }
      );
    }

    render() {
      return <ManageKegiatanView method={this.method} state={this.state} />
    }
}
