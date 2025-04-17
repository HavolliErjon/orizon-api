const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  prodotto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',  
    required: true,
  },
  utente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  dataOrdine: {
    type: Date,
    default: Date.now,
  },
  stato: {
    type: String,
    enum: ['In attesa', 'Confermato', 'Spedito', 'Consegnato'],  
    default: 'In attesa',
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
