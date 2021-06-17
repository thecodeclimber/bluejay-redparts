const dbConnect = require('../../../../utils/dbConnect');
const { Product } = require('../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Product.findOne({ slug: req.query.slug });
      if (data.status === 500) {
        res.status(500);
        res.json([]);
      }
      res.json(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
