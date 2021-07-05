const dbConnect = require('../../../../utils/dbConnect');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const { isAdmin } = require('../../../../utils/middleware');
export default dbConnect(async (req, res) => {

    switch (req.method) {
        case 'GET':
            const { user } = getSession(req, res);
            var admin = await isAdmin(user?.sub);
            res.send({ status: admin })
            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }

});


