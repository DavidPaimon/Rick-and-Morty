const axios = require("axios")
// const KEY = "4ad0439dd707.13a127d0fc3113ad4964";
// const URL = 'https://be-a-rym.up.railway.app/api';

const successH = (response, res) => {
    const {id, name, gender, species, image} = response.data;
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({id, name, gender, species, image}));
};

const errorH = (error, res) => {
    res.writeHead(500, {"Content-Type": "text/plain"});
    res.end(JSON.stringify(error.message));
};

const getCharById = (res, id) => {
    axios.get(`http://localhost:3001/rickandmorty`)
    .then(response => successH(response, res))
    .catch(error => errorH(error, res));
};

module.exports = getCharById;