const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
    name: { type: String, require: true },
    shortName: { type: String, require: true },
}, { timestamps: true });
module.exports = mongoose.models.section || mongoose.model('section', sectionSchema);