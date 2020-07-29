import { String } from '../system/Collection';

export var data = []

export var Token = {

    data: [],

    REFRESH: function (headers) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'refresh';

        console.log(apiUrl, "apiUrl token@REFRESH");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
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

}