import connectDB from '../../middleware/db';
import Product from '../../models/products';

const handler = async (req, res) => {
  console.log(req);
  var name = 'anchor';
  try {
    var product = new Product({
      name,
    });
    // Create new product
    var productCreated = await product.save();
    return res.status(200).send(productCreated);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default connectDB(handler);
