const dbConnect = require('../../../../../utils/dbConnect');
const { Category, SubCategory } = require('../../../../../models');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import mongoose from 'mongoose';
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    const { user } = getSession(req, res);
    var admin = await isAdmin(user?.sub);
    if (admin) {
        switch (req.method) {
            case 'GET':
                let { page, limit, sort, key, section, type } = req.query;
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
                section = section != '' ? { 'section._id': mongoose.Types.ObjectId(section) } : {}
                key = key != 'default' ? { $or: [{ 'name': regex }, { 'section.name': regex }] } : {};
                const getAllCategories = async () => {
                    let total;
                    let data;
                    if (type == 'default') {
                        total = await Category.aggregate([
                            {
                                "$lookup": {
                                    "from": "sections",
                                    "localField": "section",
                                    "foreignField": "_id",
                                    "as": "section"
                                }
                            },
                            { "$unwind": "$section" }, { "$match": { $and: [key, section] } }]).exec();

                        data = await Category.aggregate([
                            {
                                "$lookup": {
                                    "from": "sections",
                                    "localField": "section",
                                    "foreignField": "_id",
                                    "as": "section"
                                }
                            },
                            { "$unwind": "$section" },
                            { "$match": { $and: [key, section] } },
                            { "$sort": { "name": -1 } },
                            { "$skip": skipItems },
                            { "$limit": limit },
                        ]).exec();
                    } else {
                        total = await Category.find({ $and: [key, { 'section': null }] }).exec();
                        data = await Category.find({ $and: [key, { 'section': null }] }).skip(skipItems)
                            .limit(limit)
                            .sort({ name: sort })
                            .exec();
                    }
                    return {
                        categories: data,
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
                let _id = req.query.Id.split(",");
                let data = {
                    section: req.body.section,
                    name: req.body.name,
                    shortName: req.body.name.substring(0, 3)
                }
                let findData = await Category.findOne({ name: req.body.name });
                if (findData) {
                    res.status(200).json({ status: 400, 'message': 'Category already exists' });
                } else {
                    let updateData = await Category.updateMany({ _id: { $in: _id } }, data);
                    if (updateData.nModified == 0) {
                        res.status(404).json({ 'message': 'Categories not found' });
                    }
                    res.status(200).json({ 'message': 'Categories updated' });
                }
                break;
            case 'DELETE':
                const deleteId = req.query.Id.split(",");
                var deleteData = await Category.deleteMany({ _id: { $in: deleteId } });
                if (deleteData.deletedCount == 0) {
                    res.status(404).json({ 'message': 'Category not found' });
                }
                await SubCategory.updateMany({ category: { $in: deleteId } }, { category: null });
                res.status(200).json({ 'message': 'Category deleted' });
                break;
            case 'POST':
                let findDataPost = await Category.findOne({ name: req.body.name });
                if (findDataPost) {
                    res.status(200).json({ message: 'Category already exists' });
                } else {
                    var dataCategory = await Category.insertMany([{ name: req.body.name, section: req.body.section, shortName: await req.body.name.substring(0, 3) }]);
                    if (dataCategory.length == 0) {
                        res.status(404).json({ 'message': 'Something is error' });
                    }
                    res.status(200).json({ 'message': 'Category created!' });
                }
                break;
            default:
                res.send({ status: false, message: 'Not found!' });
        }
    } else {
        res.status(403).send('You are not authorized');
    }

});


