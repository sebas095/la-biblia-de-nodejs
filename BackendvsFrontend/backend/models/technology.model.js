const mongoose = require('mongoose');
const { Schema } = mongoose;

const TechnolySchema = new Schema({
    name: { type: String, maxlength: 50 },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }]
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model("Technology", TechnolySchema);