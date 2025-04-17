const express = require('express');
const Order = require('../models/orderModel');
const Product = require('../models/Product');
const User = require('../models/userModel');

const router = express.Router();

// Crea ordine
router.post('/', async (req, res) => {
  const { prodottoId, utenteId } = req.body;

  try {
    const prodotto = await Product.findById(prodottoId);
    if (!prodotto) return res.status(404).json({ message: 'Prodotto non trovato' });

    const utente = await User.findById(utenteId);
    if (!utente) return res.status(404).json({ message: 'Utente non trovato' });

    const ordine = new Order({ prodotto: prodottoId, utente: utenteId });
    await ordine.save();

    res.status(201).json({ message: 'Ordine creato con successo', ordine });
  } catch (err) {
    res.status(500).json({ message: 'Errore nella creazione dell\'ordine' });
  }
});

// Ottieni tutti gli ordini
router.get('/', async (req, res) => {
  try {
    const ordini = await Order.find()
      .populate('prodotto', 'nome prezzo')
      .populate('utente', 'nome cognome');
    res.status(200).json(ordini);
  } catch (err) {
    res.status(500).json({ message: 'Errore nel recuperare gli ordini' });
  }
});


module.exports = router;
