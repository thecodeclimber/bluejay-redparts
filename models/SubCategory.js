const mongoose = require('mongoose');
const subCategorySchema = new  mongoose.Schema({
name: { type: String, require: true },
category: { type: mongoose.Types.ObjectId, ref: 'category', required: true }, 
images: { type: Array },
attributes: [{ 
    name: { type: mongoose.Types.ObjectId, ref: 'attribute', required: true },
    values: [{ type: mongoose.Types.ObjectId }]
}]

}, { timestamps: true });
module.exports = mongoose.models.sub_category ||  mongoose.model('sub_category', subCategorySchema);