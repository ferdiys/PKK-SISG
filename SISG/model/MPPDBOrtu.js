import { String, AuthKey } from '../system/Collection';
import { toast } from 'react-toastify';

export var data = []

export var PPDBOrtu = {

    data: [],

    REGISTER: function (formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `ppdbortu`;

        console.log(apiUrl, "PPDB ORTU@REGISTER");

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