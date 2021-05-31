const dbConnect = require('../../../../../utils/dbConnect');
const { addAttributes } = require('../../../../../utils/productKeys');
const { SubCategory, Product } = require('../../../../../models');
const { getCombn, generateProducts } = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Product.find({ sub_category: req.query.id })
        .populate({ path: 'category' })
        .populate({ path: 'section' })
        .populate({ path: 'sub_category' })
        .populate('attributes.attribute');
      res.send([data]);
      break;
    case 'POST': {
      await generateProducts(res, null, req.query.id);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
