"use strict"
const { token } = require('./token')
const axios = require("axios").default;


exports.isAdmin = async (user_id) => {
    let tok = await token();
    var config = {
        method: 'get',
        url: `${process.env.AUDIENCE}users/${user_id}/roles`,
        headers: {
            'Authorization': `Bearer ${tok}`,
        }
    };
    let data = await axios.request(config);
    return data.data[0].name === 'admin' ? true : false;
}