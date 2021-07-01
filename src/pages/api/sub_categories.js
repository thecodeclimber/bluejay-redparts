const dbConnect = require('../../../utils/dbConnect');
const { SubCategory } = require('../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.find({});
      res.send({ data });
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
