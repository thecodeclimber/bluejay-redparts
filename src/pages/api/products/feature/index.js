const dbConnect = require('../../../../../utils/dbConnect');
const { Product } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = [];
      try {
        data = await Product.find({ isFeatured: true });
      } catch (err) {
        res.status(500).json({ message: 'Request Not Found' });
      }
      res.json(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
