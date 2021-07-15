const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');

export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'GET':
            var slug = req.query.slug;
            // let regex = new RegExp(slug, 'i');
            let data = await Product.find({ sub_category: slug }, { sku: 1, section: 1, category: 1, sub_category: 1, attributes: 1 });
            // if (data.length == 0) {
            //     res.status(404).json({ 'message': 'Product not found', data: [] });
            // }
            // console.log(data)
            res.status(200).json({ 'message': 'Product Found', data });

            break;
        case 'DELETE':
            var slug = req.query.slug.split(",");
            let deleteData = await Product.deleteMany({ _id: { $in: slug } });
            if (deleteData.deletedCount == 0) {
                res.status(404).json({ 'message': 'Product not found' });
            }
            res.status(200).json({ 'message': 'Product deleted' });

            break;
        case 'PUT':
            console.log(req.body)
            res.status(200).json({ 'message': 'Products updated' });
            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
