const dbConnect = require('../../../../../utils/dbConnect');
const { Category } = require('../../../../../models');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    // const { user } = getSession(req, res);
    // var admin = await isAdmin(user?.sub);
    // if (admin) {
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
                const total = await Category.find(key).count();
                let data = await Category.find(key, { name: 1, sku: 1, images: 1, isFeatured: 1, price: 1, description: 1, isFeatured: 1, rating: 1 })
                    .skip(skipItems)
                    .limit(limit)
                    .sort({ name: sort })
                    .exec();
                return {
                    categories: data,
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
            var data = {
                name: req.body.name
            }
            var updateData = await Category.updateMany({ _id: { $in: _id } }, data);
            if (updateData.nModified == 0) {
                res.status(404).json({ 'message': 'Categories not found' });
            }
            res.status(200).json({ 'message': 'Categories updated' });
            break;
        case 'DELETE':
            const deleteId = req.query.Id.split(",");
            var deleteData = await Category.deleteMany({ _id: { $in: deleteId } });
            if (deleteData.deletedCount == 0) {
                res.status(404).json({ 'message': 'product not found' });
            }
            res.status(200).json({ 'message': 'product deleted' });
            break;
        case 'POST':
            var dataCategory = await Category.insertMany([{ name: req.body.name }]);
            console.log(dataCategory)
            if (dataCategory.length == 0) {
                res.status(404).json({ 'message': 'Something is error' });
            }
            res.status(200).json({ 'message': 'Category created' });
            break;

        default:
            res.send({ status: false, message: 'Not found!' });
    }
    // } else {
    //     res.status(403).send('you are not authorized');
    // }

});


