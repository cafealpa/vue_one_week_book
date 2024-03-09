import axios from "axios";

export default {
    methods: {
        async $api(url, method, data) {
            // return await axios({
            //     method: method,
            //     url: url,
            //     data: data,
            // }).catch(e => {
            //     console.log(e);
            //     return e.response
            // });

            return (await axios({
                method: method,
                url: url,
                data: data,
            }).catch(e => {
                console.log(e);
                return e.response
            })).data;
        }
    }
}