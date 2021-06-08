const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = [];
      try {
        data = await Product.aggregate([
          { $sort: { rating: -1, name: 1 } },
        ]).limit(20);
      } catch (err) {
        res.status(500).json({ message: 'Request Not Found' });
      }
      res.json(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
