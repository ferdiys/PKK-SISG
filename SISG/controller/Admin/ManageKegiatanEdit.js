import React, { Component } from 'react'
import ManageKegiatanEditView from '../../view/admin/ManageKegiatanEditView'

import { toast } from 'react-toastify'
import { AuthKey } from '../../system/Collection'
import { Kegiatan } from '../../model/MKegiatan'

export default class ManageKegiatanEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      title: '',
      imageRef: null, //for display only
      image: null,//image file
      date: new Date(),
      description: '',

      isImageUpdate: false,
      pageStats: 'add', // page status, wether is add or update
      itemId: 0, // if the status is update, then it's for the id
      isLoading: false
    }

    this.method = {
      _setForm: this._setForm.bind(this),
      getData: this.getData.bind(this),
      _setNewImage: this._setNewImage.bind(this), //show the selected image
      resetState: this.resetState.bind(this), //clear the form
      updateKegiatan: this.updateKegiatan.bind(this),
      addKegiatan: this.addKegiatan.bind(this),
      dateChanged: this.dateChanged.bind(this),
      deleteKegiatan: this.deleteKegiatan.bind(this)
    }
  }

  componentDidMount = () => {
    this.pageStats()
  }

  /**
   * DECIDE IF PAGE IS FOR UPDATE DATA OR ADD DATA
   */
  pageStats = () => {
    const url = this.props.location.pathname
    const split= url.split(`/`)

    if (split[4]){
      this.setState({ pageStats: "edit", itemId: split[4] }, () => this.getData())
    }
    else{
      console.log(this.state.pageStats)
    }
  }

  /**
   * DISPLAY THE SELECTED IMAGE
   */
  _setNewImage = (e) => {

    if (e.target.files[0].size <= 2000000) {
      this.setState({
        image: e.target.files[0]
      })

      if (e.target.files[0]) {
        this.setState({
          imageRef: URL.createObjectURL(e.target.files[0]),
          isImageUpdate: true
        })
      }
      else{
        toast.warn("The image doesn't support")
      }

    }
    else{
      toast.warn("File size have to be less than 2MB")
    }

  }

  addKegiatan = async () => {
    this.setState({ isLoading: !this.state.isLoading})

    /**
    * Parse Date format to yyyy/mm/dd
    */
    const monthParsed = (this.state.date.getMonth() + 1) < 10 ? 0 + '' + (this.state.date.getMonth() + 1) : (this.state.date.getMonth() + 1);
    const dayParsed = this.state.date.getDate() < 10 ? 0 + '' + this.state.date.getDate() : this.state.date.getDate();

    const parseDate = this.state.date.getFullYear() + '-' + monthParsed + '-' + dayParsed
    console.log(parseDate)
    
    /**
     * Header authorization for api
     */
    const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
    const parse = JSON.parse(storage)

    let headers = {
      token_type: parse.token_type,
      access_token: parse.access_token
    }

    let formData = new FormData();
    formData.append('school_id', 1);
    formData.append('image', this.state.image);
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('dateKeg', parseDate);

    await Kegiatan.ADD(headers, formData).then(res => {

      if (Kegiatan.data.status === 201) {
        toast.success("Data berhasil disimpan")
        this.props.history.push('/admin/manage_kegiatan')
        this.setState({ isLoading: !this.state.isLoading})
        console.log(parseDate)
      }
      else if (Kegiatan.data.message === "The given data was invalid.") {
        toast.warn("Ada data kosong, silahkan cek kembali")
        this.setState({ isLoading: !this.state.isLoading})
        console.log(parseDate)
      }
      else{
        toast.error("Data gagal disimpan, coba ulang kembali!")
        this.setState({ isLoading: !this.state.isLoading})
        console.log(parseDate)
      }

    })
    .catch(
      err=> {
        this.setState({ isLoading:!this.state.isLoading })
        console.log("ADD FUNCT", err);
      }
    );
  }

  updateKegiatan= async () => {

    this.setState({ isLoading: !this.state.isLoading })

    const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
    const parse= JSON.parse(storage)

    let headers = {
      token_type: parse.token_type,
      access_token: parse.access_token
    }

    let formData = null
    formData = new FormData();

    if (this.state.isImageUpdate === true) {
      formData.append('image', this.state.image);
      formData.append('title', this.state.title);
      formData.append('description', this.state.description);
      formData.append('_method', 'put');

    } else{
      formData.append('title', this.state.title);
      formData.append('description', this.state.description);
      formData.append('_method', 'put');

    }

    await Kegiatan.UPDATE(headers, this.state.itemId, formData).then(res => {

      if (Kegiatan.data.status === 200) {
        toast.success("Data berhasil diupdate")
        this.props.history.push('/admin/manage_kegiatan')
        this.setState({ isLoading: !this.state.isLoading})
      } else{
          toast.error("Data gagal diupdate, coba ulang kembali")
          this.setState({ isLoading: !this.state.isLoading})
      }

      this.getData()
    })

    .catch(
      err => {
        console.log("UPDATE", err);
        this.setState({ isLoading: !this.state.isLoading})
      }
    )
    
  }

  deleteKegiatan = async () => {
    
    const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
    const parse = JSON.parse(storage)

    let headers = {
      token_type: parse.token_type,
      access_token: parse.access_token
    }

    await Kegiatan.DELETE(headers, this.state.itemId).then(res => {

      if (Kegiatan.data.status === 200) {
        toast.success("Data berhasil dhapus")
        this.props.history.push('/admin/manage_kegiatan')
      }
      else{
        toast.error("Data gagal disimpan")
      }
    })
    
    .catch(
      err => {
        console.log("CONSOLE", err)
      }
    )
  }

  getData = async () => {
    await Kegiatan.GET_ID(this.state.itemId).then(res => {

      if (Kegiatan.data) {
        console.log(Kegiatan.data.id)

        this.setState({
          id: Kegiatan.data.id,
          title: Kegiatan.data.title,
          imageRef: Kegiatan.data.imageRef,
          description: Kegiatan.data.description,
        })
      }
      else{
        console.log("Error retrive api")
      }
    })
    .catch (
      err => {
        console.log("GET", err);
      }
    )
  }

  /**
   * Reset input / empty form
   */
  resetState = () => {
    this.setState({
      image: null,
      title: '',
      desc: '',
      isImageUpdate: false
    })
  }

  _setForm = e => {
    this.setState({
      [e.target.name]: [e.target.value].toString()
    })
  }

  dateChanged = e => {
    this.setState({
      date: e
    },
      () => console.log(this.state.date, "THIS IS THE DATE")
    );
  }

  render() {
    return <ManageKegiatanEditView state={this.state} method={this.method}/>
  }
}
