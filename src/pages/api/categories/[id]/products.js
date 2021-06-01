const dbConnect = require('../../../../../utils/dbConnect');
const { generateProducts } = require('../../../../../utils/helper');

const { Product } = require('../../../../../models');
const { addAttributes } = require('../../../../../utils/productKeys');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Product.find({ category: req.query.id })
        .populate({ path: 'category' })
        .populate({ path: 'section' })
        .populate({ path: 'sub_category' })
        .populate({ path: 'attributes' });

      if (data.status === 500) {
        res.status(500);
        res.json([]);
      }
      res.json(data);
      break;
    // create products
    case 'POST': {
      await generateProducts(res, req.query.id, null);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
