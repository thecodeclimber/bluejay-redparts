const dbConnect = require('../../../../../utils/dbConnect');
const { SubCategory } = require('../../../../../models');
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
                key = key != 'default' ? { $or: [{ 'name': regex }, { 'category.name': regex }] } : {};
                const getAllCategories = async () => {
                    const total = await await SubCategory.aggregate([
                        {
                            "$lookup": {
                                "from": "categories",
                                "localField": "category",
                                "foreignField": "_id",
                                "as": "category"
                            }
                        },
                        { "$unwind": "$category" },
                        { "$match": key }]).exec();
                    let data = await SubCategory.aggregate([
                        {
                            "$lookup": {
                                "from": "categories",
                                "localField": "category",
                                "foreignField": "_id",
                                "as": "category"
                            }
                        },
                        { "$unwind": "$category" },
                        { "$match": key },
                        { "$sort": { "name": -1 } },
                        { "$skip": skipItems },
                        { "$limit": limit },
                    ]).exec();
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
                var data = {
                    category: req.body.category,
                    name: req.body.name,
                    shortName: req.body.name.substring(0, 3),
                    attributes: req.body.attributes
                }
                var updateData = await SubCategory.updateMany({ _id: { $in: _id } }, data);
                if (updateData.nModified == 0) {
                    res.status(404).json({ 'message': 'Sub Categories not found' });
                }
                res.status(200).json({ 'message': 'Sub Categories updated' });
                break;
            case 'DELETE':
                const deleteId = req.query.Id.split(",");
                var deleteData = await SubCategory.deleteMany({ _id: { $in: deleteId } });
                if (deleteData.deletedCount == 0) {
                    res.status(404).json({ 'message': 'sub Categories not found' });
                }
                res.status(200).json({ 'message': 'Sub Categories deleted' });
                break;
            case 'POST':
                var dataCategory = await SubCategory.insertMany([{ name: req.body.name, category: req.body.category, shortName: req.body.name.substring(0, 3), attributes: req.body.attributes }]);
                if (dataCategory.length == 0) {
                    res.status(404).json({ 'message': 'Something is error' });
                }
                res.status(200).json({ 'message': 'Sub Category created' });
                break;

            default:
                res.send({ status: false, message: 'Not found!' });
        }
    } else {
        res.status(403).send('you are not authorized');
    }

});


