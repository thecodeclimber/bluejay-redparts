const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'POST':
      let data = await Attribute.findById(req.query.id);
      let values = data.values.filter(({_id})=>req.body.values.includes(String(_id)))
      res.send({...data.toObject(), values})
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
