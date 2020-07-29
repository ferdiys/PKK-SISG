import { String } from '../system/Collection'
import { toast } from 'react-toastify'

export var data = []

export var Kegiatan = {
  
  data: [],

  GET: function () {

    this.data = [];

    var apiUrl = String.SISG_API_BASE + 'kegiatan';

    console.log(apiUrl, "apiUrl kegiatan@GET");

    return new Promise((resolve, reject) => {

      fetch (apiUrl, {
        method: "GET",
        header: {

          "Accept": "application/json",
          "Content-Type":"application/json"
        }
      })

      .then((response) => response.json())
      .then((responseData) => {

        if (responseData) {
          this.data = responseData;
          resolve(true);
        }
        else{
          resolve(false);
        }
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
    });
  },

  GET_ID: function (id) {

    this.data = [];

    var apiUrl = String.SISG_API_BASE + `kegiatan/${id}`;

    console.log(apiUrl, "apiUrl kegiatan@GET");

    return new Promise((resolve, reject) => {

      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })

      .then((response) => response.json())
      .then((responseData) => {

        if (responseData) {
          this.data = responseData;
          resolve(true);
        }
        else{
          resolve(false);
        }
      })
      
      .catch((e) => {
        console.log(e);
        reject(e);
      });
    });
  },

  ADD:function (headers,formData) {
    
    this.data = [];

    var apiUrl = String.SISG_API_BASE + `kegiatan`;

    console.log(apiUrl, "kegiatan@Store");

    return new Promise((resolve,reject) => {

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `${headers.token_type} ${headers.access_token}`,
        },
        body: formData
      })
      
      .then((response) => response.json())
      .then((responseData) => {

        console.log(responseData, "RES")

        if(responseData) {

          if (responseData.message === "Unauthenticated") {
            toast.error("Mohon login ulang")
          }
          this.data = responseData;
          resolve(true);

        }      
        else {
          resolve(false)
        }

      })

      .catch((e) => {
        console.log(e);
        reject(e);
      });

    });
  },

  UPDATE: function (headers, id, formData) {

    this.date = [];

    var apiUrl= String.SISG_API_BASE + `kegiatan/${id}`;
    console.log(apiUrl, "kegiatan@Update");

    for (var pair of formData.entries()){
      console.log(pair[0] + ', ' + pair[1],"MODE");
    }

    return new Promise((resolve, reject) => {

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization":`${headers.token_type} ${headers.access_token}`
        },
        body: formData
      })

      .then((response) =>response.json())
      .then((responseData) => {

        console.log(responseData, "RES")

        if (responseData) {
          if(responseData.message === "Unauthenticated") {
            toast.error("Mohon login ulang")
          }
          this.data = responseData;
          resolve(true);
        }

        else{
          resolve(false);
        }
      })

      .catch((e) => {
        console.log(e);
        reject(e);
      });
      
    });
  },

  DELETE: function (headers, id) {
    this.data = [];

    var apiUrl = String.SISG_API_BASE + `kegiatan/${id}`;

    console.log(apiUrl, "kegiatan@Delete");

    return new Promise((resolve, reject) => {

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `${headers.token_type} ${headers.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _method: 'delete'
        })
      })
      .then((response) => response.json())
      .then((responseData) => {

        console.log(responseData, "RES")

        if (responseData) {

          if (responseData.message === "Unauthenticated") {
              toast.error("Mohon login ulang")
          }
          this.data = responseData;
          resolve(true);

        }
        else {
          resolve(false);
        }

      })

      .catch((e) => {
        console.log(e);
        reject(e);
      });

    });
  }

}