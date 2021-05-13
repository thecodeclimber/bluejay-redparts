import mongoose, { Schema } from 'mongoose';

const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Product = mongoose.model('Product', productModel);

export default Product;
