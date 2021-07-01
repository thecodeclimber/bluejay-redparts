const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = [];
      try {
        data = await Product.find({}).sort({ createdAt: -1 }).limit(10);
      } catch (err) {
        res.status(500).json({ message: 'Request Not Found' });
      }
      res.json(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
