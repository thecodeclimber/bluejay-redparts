const dbConnect = require('../../../../../utils/dbConnect');
export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).send('user post')
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
