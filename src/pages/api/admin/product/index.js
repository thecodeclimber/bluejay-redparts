const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const { generateRealProducts
} = require('../../../../../utils/helper');
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    const { user } = getSession(req, res);
    var admin = await isAdmin(user?.sub);
    if (admin) {
        switch (req.method) {
            case 'GET':
                let { page, limit, sort, key, section, category, subcategory, attribute } = req.query;
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
                let filter = {};
                if (section != '') {
                    filter = { $and: [{ section: section }] };
                }
                if (section != '' && category != '') {
                    filter = { $and: [{ section: section }, { category: category }] }
                }
                if (section != '' && category != '' && subcategory != '') {
                    filter = { $and: [{ section: section }, { category: category }, { sub_category: subcategory }] }
                }
                const getAllProducts = async () => {
                    const total = await Product.find({ $and: [key, filter] }).count();
                    let data = await Product.find({ $and: [key, filter] }, { name: 1, sku: 1, images: 1, isFeatured: 1, price: 1, description: 1, isFeatured: 1, rating: 1 })
                        .skip(skipItems)
                        .limit(limit)
                        .sort({ name: sort })
                        .exec();
                    // if (attribute != '') {
                    //     let attr = [];
                    //     let dd = data.map((value) => {
                    //         value.attributes.filter((e) => {
                    //             attr.push(e.attribute)
                    //         })
                    //         console.log(attr)
                    //         return attr.includes(attribute);
                    //     })
                    //     console.log(dd)
                    // }
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
    } else {
        res.status(403).send('you are not authorized');
    }

});


