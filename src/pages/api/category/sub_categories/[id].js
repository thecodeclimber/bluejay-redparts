const dbConnect = require('../../../../../utils/dbConnect');

const { SubCategory, Category } = require('../../../../../models');

export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'GET':
            let data = await SubCategory.find({
                category: req.query.id,
            }).exec();

            res.send({ data });
            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});