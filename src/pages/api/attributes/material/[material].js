const dbConnect = require('../../../../../utils/dbConnect');
const { Attribute } = require('../../../../../models');

export default dbConnect(async (req, res) => {
  const searchedValues = req.query.material.split(',');
  switch (req.method) {
    case 'GET':
      let data = await Attribute.find({
        _id: '609cf25660a41d956a81ecd2',
      }).populate('values');
      let selectedValues = [];
      data[0].values.forEach((material) => {
        if (searchedValues.includes(`${material._id}`)) {
          selectedValues.push(material.value);
        }
      });
      res.send(selectedValues || []);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
