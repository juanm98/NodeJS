// Lineas para definir el modelo de mi base de datos
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    require: true
  },
  date: Date
});

const model = mongoose.model('Message', mySchema);
module.exports = model;