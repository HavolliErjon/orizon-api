const Order = require('../models/orderModel');

// Crea un ordine
exports.createOrder = async (req, res) => {
  try {
    const { prodottoId, utenteId } = req.body;

    const newOrder = new Order({
      prodotto: prodottoId,
      utente: utenteId,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Ordine creato con successo', ordine: savedOrder });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Ottieni tutti gli ordini
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('prodotto', 'nome prezzo dataPartenza') 
      .populate('utente', 'nome cognome email');       
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Aggiorna lo stato di un ordine
exports.updateOrderStatus = async (req, res) => {
  try {
    const { stato } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { stato },
      { new: true }
    );
    res.json({ message: 'Stato ordine aggiornato', ordine: order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
