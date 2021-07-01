const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');

export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'GET':
            var slug = req.query.slug.split(",");
            let data = await Product.find({ _id: { $in: slug } });
            if (data.length == 0) {
                res.status(404).json({ 'message': 'product not found' });
            }
            res.status(200).json({ 'message': 'product Found', data });

            break;
        case 'DELETE':
            var slug = req.query.slug.split(",");
            let deleteData = await Product.deleteMany({ _id: { $in: slug } });
            if (deleteData.deletedCount == 0) {
                res.status(404).json({ 'message': 'product not found' });
            }
            res.status(200).json({ 'message': 'product deleted' });

            break;
        case 'PUT':
            console.log(req.body)
            res.status(200).json({ 'message': 'products updated' });
            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
