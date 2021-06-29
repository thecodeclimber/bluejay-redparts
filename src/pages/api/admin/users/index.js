const dbConnect = require('../../../../../utils/dbConnect');
const { token } = require('../../../../token')
export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'GET':
            var axios = require("axios").default;

            var options = {
                method: 'GET',
                url: 'https://dev-1u25317k.us.auth0.com/api/v2/users',
                headers: { authorization: token }
            };
            var data = await axios.request(options);
            res.status(200).json(data.data);
            break;
        case 'PUT':
            res.status(200).send('user put')
            break;
        case 'DELETE':
            res.status(200).send('user delete')
            break;
        case 'POST':
            res.status(200).send('user create')

            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
