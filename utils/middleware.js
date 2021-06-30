"use strict"
const axios = require("axios").default;
const qs = require('qs');
exports.token = async () => {
    let data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': 'iv0RWmbXxpempWUvLFWlu1otMwAa418P',
        'client_secret': 'mTKip6T6X6hPt-S_YaMFqC3adkNWWl-rBVRyRdRjXoY_5hUpPGQ6DkIJQx1kQi-w',
        'audience': 'https://dev-1u25317k.us.auth0.com/api/v2/'
    });
    let config = {
        method: 'post',
        url: 'https://dev-1u25317k.us.auth0.com/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };
    let access_token = await axios.request(config);
    return access_token.data.access_token;

}

exports.isAdmin = async (user_id) => {
    const token = await this.token();
    var config = {
        method: 'get',
        url: `https://dev-1u25317k.us.auth0.com/api/v2/users/${user_id}/roles`,
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    };
    let data = await axios.request(config);
    return data.data[0].name === 'admin' ? true : false;
}