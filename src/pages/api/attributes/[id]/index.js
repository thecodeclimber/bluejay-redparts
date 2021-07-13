const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let Id = req.query.id.split(",");
      let data = await Attribute.find({
        '_id': {
          $in: Id
        }
      });
      res.send(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
