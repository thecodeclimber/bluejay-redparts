const mongoose = require('mongoose');
const attributeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    values: [
        new mongoose.Schema({
            value: { type: String, require: true }
        })
    ]
}, { timestamps: true });
module.exports = mongoose.models.attribute || mongoose.model('attribute', attributeSchema);