// 609cf2ed60a41d956a81ecd3
const dbConnect = require('../../../../../utils/dbConnect');
dbConnect();
const { SubCategory } = require('../../../../../models');

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.findById(req.query.id);
      // .populate({ path: 'attributes.name'});
      res.send(data);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
};
