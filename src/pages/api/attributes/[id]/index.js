const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Attribute.findById(req.query.id);
      res.send(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
