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
                let { page, limit, sort, key, section, category, type } = req.query;
                console.log(req.query)
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
                let filter = {}
                if (section != '') {
                    filter = { 'section._id': mongoose.Types.ObjectId(section) }
                }
                if (category != '') {
                    filter = { 'category._id': mongoose.Types.ObjectId(category) }
                }
                if (section != '' && category != '') {
                    filter = { 'section._id': mongoose.Types.ObjectId(section), 'category._id': mongoose.Types.ObjectId(category) }
                }

                key = key != 'default' ? { $or: [{ 'name': regex }, { 'category.name': regex }] } : {};
                console.log(type)
                const getAllCategories = async () => {
                    let total;
                    let data;
                    if (type === 'default') {
                        total = await await SubCategory.aggregate([
                            {
                                "$lookup": {
                                    "from": "categories",
                                    "localField": "category",
                                    "foreignField": "_id",
                                    "as": "category"
                                }
                            },
                            { "$unwind": "$category" },
                            {
                                "$lookup": {
                                    "from": "sections",
                                    "localField": "category.section",
                                    "foreignField": "_id",
                                    "as": "section"
                                }
                            },
                            { "$unwind": "$section" },
                            { "$match": { $and: [key, filter] } }]).exec();
                        data = await SubCategory.aggregate([
                            {
                                "$lookup": {
                                    "from": "categories",
                                    "localField": "category",
                                    "foreignField": "_id",
                                    "as": "category"
                                }
                            },
                            { "$unwind": "$category" },
                            {
                                "$lookup": {
                                    "from": "sections",
                                    "localField": "category.section",
                                    "foreignField": "_id",
                                    "as": "section"
                                }
                            },
                            { "$unwind": "$section" },
                            { "$match": { $and: [key, filter] } },
                            { "$sort": { "name": -1 } },
                            { "$skip": skipItems },
                            { "$limit": limit },
                        ]).exec();
                    } else {
                        total = await SubCategory.find({ $and: [key, { 'category': null }] }).populate('section').exec();
                        data = await SubCategory.find({ $and: [key, { 'category': null }] }).skip(skipItems)
                            .limit(limit)
                            .sort({ name: sort })
                            .exec();
                    }
                    return {
                        sub_categories: data,
                        page,
                        total: total.length,
                        from: total.length ? skipItems + 1 : 0,
                        to: total.length < limit + skipItems ? total.length : limit + skipItems,
                        pages: Math.ceil(total.length / limit),
                    };
                };
                let allCategoryData = await getAllCategories();
                res.json({ ...allCategoryData });
                break;
            case 'PUT':
                var _id = req.query.Id.split(",");
                console.log(req.body)
                console.log(req.query)
                var data = {
                    category: req.body.category,
                    name: req.body.name,
                    shortName: req.body.name.substring(0, 3),
                }
                var updateData = await SubCategory.updateMany({ _id: { $in: _id } }, data);
                if (updateData.nModified == 0) {
                    res.json({ status: 400, 'message': 'Sub Categories not found' });
                }
                res.json({ status: 200, 'message': 'Sub Categories updated' });

                break;
            case 'DELETE':
                const deleteId = req.query.Id.split(",");
                var deleteData = await SubCategory.deleteMany({ _id: { $in: deleteId } });
                if (deleteData.deletedCount == 0) {
                    res.json({ status: 400, 'message': 'Sub Categories not found' });
                }
                res.json({ status: 200, 'message': 'Sub Categories deleted' });
                break;
            case 'POST':
                if (req.body.name != '' && req.body.category != '') {
                    var findsubCatPost = await SubCategory.findOne({ name: req.body.name });
                    if (findsubCatPost) {
                        res.send({
                            status: 400,
                            message: 'Sub-Category already exists',
                        });
                    } else {
                        var dataCategory = await SubCategory.insertMany([{ name: req.body.name, category: req.body.category, shortName: req.body.name.substring(0, 3) }]);
                        if (dataCategory.length == 0) {
                            res.status(400).send({
                                message: 'Sub Category not found!',
                            });
                        }
                        res.send({ status: 200, 'message': 'Sub Category created' });
                    }

                } else {
                    res.send({
                        status: 400,
                        message: '[name | category] is required',
                    });
                }
                break;

            default:
                res.send({ status: false, message: 'Not found' });
        }
    } else {
        res.send({ status: 403, message: 'You are not authorized' });
    }

});


