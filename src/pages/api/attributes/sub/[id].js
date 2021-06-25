const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      console.log(req.query.id)
      let data = await Attribute.find({
        _id: { $in: req.query.id },
      }).populate('values');
      let selectedValues = [];
      data[0].values.forEach((diameter) => {
        if (searchedValues.includes(`${diameter._id}`)) {
          selectedValues.push(diameter.value);
        }
      });
      res.send(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
