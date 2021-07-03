const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: { type: String, require: true },
    shortName: { type: String, require: true },
    section: { type: mongoose.Types.ObjectId, ref: 'section', required: true }

}, { timestamps: true });
module.exports = mongoose.models.category || mongoose.model('category', categorySchema);