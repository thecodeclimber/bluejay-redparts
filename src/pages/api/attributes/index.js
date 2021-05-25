const dbConnect = require('../../../../utils/dbConnect');
const { Attribute } = require('../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Attribute.find({});
      res.send(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
