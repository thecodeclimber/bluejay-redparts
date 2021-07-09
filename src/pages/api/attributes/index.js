const dbConnect = require('../../../../utils/dbConnect');
const { Attribute } = require('../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Attribute.find({});
      res.send(data);
      break;
    case 'POST':
      let attr = await Attribute.find({
        _id: { $in: req.body.id },
      }).populate('values');
      res.send(attr);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
