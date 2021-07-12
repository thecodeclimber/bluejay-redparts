const dbConnect = require('../../../../../../utils/dbConnect');
const { token } = require('../../../../../../utils/token');
var axios = require("axios").default;
export default dbConnect(async (req, res) => {
    const _token = await token();
    switch (req.method) {
        case 'GET':
            var options = {
                method: 'GET',
                url: `${process.env.AUDIENCE}users/${req.query.id}`,
                headers: { authorization: `Bearer ${_token}` }
            };

            await axios.request(options).then(function (response) {
                res.status(200).send(response.data)
            }).catch(function (error) {
                res.status(400).send(error)
            });
            break;
        case 'PUT':
            var optionPut = {
                method: 'PUT',
                url: `${process.env.AUDIENCE}users/${req.query.id}`,
                headers: { authorization: `Bearer ${_token}` },
            };

            await axios.request(optionPut).then(function (response) {
                res.status(200).send(response.data)
            }).catch(function (error) {
                res.status(400).send(error)
            });
            break;
        case 'DELETE':
            res.status(200).send('delete with id')
            break;
        case 'POST':
            res.status(200).send('user create with id')

            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
