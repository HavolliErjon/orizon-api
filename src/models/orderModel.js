const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  prodotto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',  // Questo fa riferimento al modello 'Product'
    required: true,
  },
  utente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Questo fa riferimento al modello 'User'
    required: true,
  },
  dataOrdine: {
    type: Date,
    default: Date.now,
  },
  stato: {
    type: String,
    enum: ['In attesa', 'Confermato', 'Spedito', 'Consegnato'],  // Stati possibili per un ordine
    default: 'In attesa',
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
