const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    sku: { type: String, require: true, unique: true },
    category: { type: mongoose.Types.ObjectId, require: true, ref: 'category' },
    sub_category: { type: mongoose.Types.ObjectId, ref: 'sub_category', required: true },
    section: { type: mongoose.Types.ObjectId, ref: 'section', required: true },
    images: [{ type: String }],
    attributes: [{
        attribute: { type: mongoose.Types.ObjectId, ref: 'attribute', required: true },
        value: { type: mongoose.Types.ObjectId }
    }]
}, { timestamps: true });
module.exports = mongoose.models.product || mongoose.model('product', productSchema);