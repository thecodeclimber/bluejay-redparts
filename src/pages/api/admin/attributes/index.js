const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');
var mongoose = require('mongoose');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    const { user } = getSession(req, res);
    var admin = await isAdmin(user?.sub);
    if (admin) {
        switch (req.method) {
            case 'GET':
                let { page, limit, sort, key } = req.query;
                page = parseInt(page);
                const skipItems = page
                    ? page == 1
                        ? 0
                        : (parseInt(page) - 1) * limit
                    : 0;
                limit = limit ? parseInt(limit) : defaultLimit;
                sort = sort != 'default' ? (sort == 'name_asc' ? 1 : -1) : 0;
                let regex = '';
                if (key != 'default') {
                    regex = new RegExp(key, 'i');
                }
                key = key != 'default' ? { name: regex } : {};
                const getAllCategories = async () => {
                    const total = await Attribute.find(key).count();
                    let data = await Attribute.find(key).populate('category')
                        .skip(skipItems)
                        .limit(limit)
                        .sort({ name: sort })
                        .exec();
                    return {
                        attributes: data,
                        page,
                        total,
                        from: total ? skipItems + 1 : 0,
                        to: total < limit + skipItems ? total : limit + skipItems,
                        pages: Math.ceil(total / limit),
                    };
                };
                let allCategoryData = await getAllCategories();
                res.json({ ...allCategoryData });
                break;
            case 'PUT':
                var _id = req.query.Id.split(",");
                let valuess = [];
                if (req.body.value.length != 0) {
                    req.body.value.map(item => {
                        valuess.push({ _id: mongoose.Types.ObjectId(), value: item })
                    })
                }
                if (req.body.name == '' && valuess.length == 0) {
                    res.send({ status: 400, message: '[Name | Value] is required' });
                }
                let data = {
                    name: req.body.name,
                    shortName: req.body.name.substring(0, 3),
                    values: valuess
                }
                let findData = await Attribute.findOne({ name: req.body.name });
                if (findData) {
                    res.send({ status: 400, message: 'Attribute already exists' });
                } else {
                    let updateData = await Attribute.updateMany({ _id: { $in: _id } }, data);
                    if (updateData.nModified == 0) {
                        res.status(200).json({ 'message': 'Attribute not found' });
                    }
                    res.status(200).json({ 'status': 200, 'message': 'Attribute updated' });
                }

                break;
            case 'DELETE':
                const deleteId = req.query.Id.split(",");
                var deleteData = await Attribute.deleteMany({ _id: { $in: deleteId } });
                if (deleteData.deletedCount == 0) {
                    res.status(404).json({ 'message': 'Attribute not found' });
                }
                res.status(200).json({ 'message': 'Attribute deleted' });
                break;
            case 'POST':
                let values = [];
                if (req.body.value.length != 0) {
                    req.body.value.map(item => {
                        values.push({ _id: mongoose.Types.ObjectId(), value: item })
                    })
                }
                if (req.body.name == '' && values.length == 0) {
                    res.json({ status: 400, message: '[name | values] is required' });
                }
                let findDataPost = await Attribute.findOne({ name: req.body.name });
                if (findDataPost) {
                    res.json({ status: 400, message: 'Attribute already exists' });
                } else {
                    var dataCategory = await Attribute.insertMany([{
                        name: req.body.name,
                        shortName: req.body.name.substring(0, 3),
                        values: values
                    }]);
                    if (dataCategory.length == 0) {
                        res.json({ status: 400, message: 'Something is error' });
                    }
                    res.json({ status: 400, 'message': 'Atrribute created' });
                }
                break;

            default:
                res.send({ status: false, message: 'Not found!' });
        }
    } else {
        res.status(403).send('you are not authorized');
    }

});


