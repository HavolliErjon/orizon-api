const mongoose = require('mongoose');

// Definizione dello schema (modello) per un "prodotto" (viaggio)
const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descrizione: {
    type: String,
    required: true,
  },
  prezzo: {
    type: Number,
    required: true,
  },
  dataPartenza: {
    type: Date,
    required: true,
  },
});

// Creazione del modello con lo schema definito
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
