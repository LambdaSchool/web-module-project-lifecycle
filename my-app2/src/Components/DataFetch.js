import axios from 'axios';


data = [],

const dataFetch = (name, followers, following) => {
    return (
    axios
        .get(`https://api.github.com/users/DasRedcoat`)
        .then(resp => {
            return(resp.data);
        });
}

export default dataFetch;