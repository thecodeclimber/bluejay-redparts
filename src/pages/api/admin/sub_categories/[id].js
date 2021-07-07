const dbConnect = require('../../../../../utils/dbConnect');
const { SubCategory } = require('../../../../../models');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import mongoose from "mongoose";
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    const { user } = getSession(req, res);
    var admin = await isAdmin(user?.sub);
    if (admin) {
        switch (req.method) {
            case 'GET':
                var findData = await SubCategory.findOne({ _id: req.query.id });
                if (!findData) {
                    res.status(404).json({ 'message': 'Sub Categories not found' });
                }
                res.status(200).json({ 'message': 'Sub Categories updated', data: findData });
                break;
            case 'PUT':
                var _id = req.query.id.split(",");
                var data = {
                    attributes: req.body.attributes
                }
                var updateData = await SubCategory.updateMany({ _id: { $in: _id } }, data);
                if (updateData.nModified == 0) {
                    res.status(404).json({ 'message': 'Sub Categories not found' });
                }
                res.status(200).json({ 'message': 'Sub Categories updated' });
                break;
            default:
                res.send({ status: false, message: 'Not found!' });
        }
    } else {
        res.status(403).send('you are not authorized');
    }

});


