const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//crear movieSchema
const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, {
    timestamps: true
});
//crear modelo a partir del movieSchema
const Celebrity = mongoose.model("Celebrity", celebSchema);
//exportar modelo
module.exports = Celebrity;
