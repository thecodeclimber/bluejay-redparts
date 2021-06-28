const dbConnect = require('../../../../../utils/dbConnect');
const { Product, Section, Category, SubCategory } = require('../../../../../models');
const {
    generateProducts, getAllCombinations, fetchImages, createProductSlug, generateRealProducts
} = require('../../../../../utils/helper');
export default dbConnect(async (req, res) => {
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
            key = key != 'default' ? { $or: [{ name: regex }, { price: isNaN(key) ? 0 : Number(key) }, { description: regex }, { sku: regex }] } : {};
            const getAllProducts = async () => {
                const total = await Product.find(key).count();
                let data = await Product.find(key, { name: 1, sku: 1, images: 1, isFeatured: 1, price: 1, description: 1, isFeatured: 1, rating: 1 })
                    .skip(skipItems)
                    .limit(limit)
                    .sort({ name: sort })
                    .exec();
                return {
                    products: data,
                    page,
                    total,
                    from: total ? skipItems + 1 : 0,
                    to: total < limit + skipItems ? total : limit + skipItems,
                    pages: Math.ceil(total / limit),
                };
            };
            let allProductsData = await getAllProducts();
            res.json({ ...allProductsData });
            break;
        case 'PUT':
            var _id = req.query.Id.split(",");
            const { name, price, description } = req.body;
            var data = {
                name: name,
                price: price,
                description: description
            }
            var updateData = await Product.updateMany({ _id: { $in: _id } }, data);
            if (updateData.nModified == 0) {
                res.status(404).json({ 'message': 'products not found' });
            }
            res.status(200).json({ 'message': 'products updated' });
            break;
        case 'DELETE':
            const deleteId = req.query.Id.split(",");
            var deleteData = await Product.deleteMany({ _id: { $in: deleteId } });
            if (deleteData.deletedCount == 0) {
                res.status(404).json({ 'message': 'product not found' });
            }
            res.status(200).json({ 'message': 'product deleted' });
            break;
        // case 'PUT':
        //     let bulkArr = [];
        //     for (const i of req.body) {
        //         bulkArr.push({
        //             updateOne: {
        //                 "filter": { "_id": i._id },
        //                 "update": { $set: { ...i } }
        //             }
        //         })
        //     }

        //     let updatedData = await Product.bulkWrite(bulkArr);
        //     if (updatedData.nModified == 0) {
        //         res.status(404).json({ 'message': 'these product not found' });
        //     }
        //     res.status(200).json({ 'message': 'products updated' });
        //     break;
        case 'POST':
            var postData = req.body.productData;
            await generateRealProducts(res, postData);
            return;
            break;

        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
