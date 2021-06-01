const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, require: true },
    sku: { type: String, require: true, unique: true },
    category: { type: mongoose.Types.ObjectId, require: true, ref: 'category' },
    sub_category: {
      type: mongoose.Types.ObjectId,
      ref: 'sub_category',
      required: true,
    },
    section: { type: mongoose.Types.ObjectId, ref: 'section', required: true },
    images: [{ type: String }],
    attributes: [
      {
        attribute: {
          type: mongoose.Types.ObjectId,
          ref: 'attribute',
          required: true,
        },
        value: { type: mongoose.Types.ObjectId },
      },
    ],
    excerpt: { type: String, require: true },
    description: { type: String, require: true },
    partNumber: { type: String, require: true },
    stock: { type: String, require: true },
    price: { type: Number, require: true },
    compareAtPrice: { type: Number, require: true },
    type: {
      slug: { type: String, require: true },
      name: { type: String, require: true },
      attributeGroups: [
        {
          name: { type: String, require: true },
          slug: { type: String, require: true },
          attributes: [
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
            { type: String, require: true },
          ],
        },
        {
          name: { type: String, require: true },
          slug: { type: String, require: true },
          attributes: { type: Array, require: true },
        },
      ],
    },

    options: [
      {
        type: { type: String, require: true },
        slug: { type: String, require: true },
        name: { type: String, require: true },
        values: [
          {
            slug: { type: String, require: true },
            name: { type: String, require: true },
          },
          {
            slug: { type: String, require: true },
            name: { type: String, require: true },
          },
          {
            slug: { type: String, require: true },
            name: { type: String, require: true },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);
module.exports =
  mongoose.models.product || mongoose.model('product', productSchema);
