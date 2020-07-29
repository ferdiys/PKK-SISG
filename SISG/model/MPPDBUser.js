import { String, AuthKey } from '../system/Collection';
import { toast } from 'react-toastify';

export var data = []

export var PPDBUser = {

    data: [],

    GET: function () {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'ppdbuser';

        console.log(apiUrl, "apiUrl managePPDB@GET");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((responseData) => {

                    if (responseData) {

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

    },

    REGISTER: function (formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `ppdbuser`;

        console.log(apiUrl, "PPDBREUSER@REGISTER");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: formData
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

    },


}