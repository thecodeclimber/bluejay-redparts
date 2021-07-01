
const axios = require("axios").default;
const qs = require('qs');
const fs = require('fs');
exports.token = async () => {
    let current_date = new Date();
    current_date = Math.floor(current_date.getTime() / 1000);
    let data = qs.stringify({
        'grant_type': process.env.GRANT_TYPE,
        'client_id': process.env.MANAGEMENT_CLIENT_ID,
        'client_secret': process.env.MANAGEMENT_CLIENT_SECRET,
        'audience': process.env.AUDIENCE
    });
    let config = {
        method: 'post',
        url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    let ReadTokenData = JSON.parse(await fs.readFileSync('token.json'));
    let token_expire_in = (Number(ReadTokenData.current_date) + Number(ReadTokenData.expires_in)) - 600;

    if (token_expire_in <= current_date) {
        let access_token = await axios.request(config);
        access_token.data.current_date = current_date;
        await fs.writeFileSync('token.json', JSON.stringify(access_token.data))
        return access_token.data.access_token;
    } else {
        return ReadTokenData.access_token;
    }


}