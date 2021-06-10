const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  const searchedValues = req.query.diameter.split(',');
  switch (req.method) {
    case 'GET':
      let data = await Attribute.find({
        _id: '609cf0d560a41d956a81ecd0',
      }).populate('values');
      let selectedValues = [];
      data[0].values.forEach((diameter) => {
        if (searchedValues.includes(`${diameter._id}`)) {
          selectedValues.push(diameter.value);
        }
      });
      res.send(selectedValues || []);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
