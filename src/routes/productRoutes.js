const express = require('express');
const Product = require('../models/Product'); 
const router = express.Router();

// 1. Vedi tutti i prodotti
router.get('/prodotti', async (req, res) => {
  try {
    const prodotti = await Product.find(); 
    res.status(200).json(prodotti); 
  } catch (error) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

// 2. Vedi un prodotto specifico
router.get('/prodotti/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prodotto = await Product.findById(id); 
    if (!prodotto) {
      return res.status(404).json({ message: 'Prodotto non trovato' });
    }
    res.status(200).json(prodotto);
  } catch (error) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

// 3. Aggiungi un nuovo prodotto
router.post('/prodotti', async (req, res) => {
  const { nome, descrizione, prezzo, dataPartenza } = req.body;
  try {
    const nuovoProdotto = new Product({ nome, descrizione, prezzo, dataPartenza });
    await nuovoProdotto.save();
    res.status(201).json(nuovoProdotto); 
  } catch (error) {
    res.status(400).json({ message: 'Dati non validi' });
  }
});

//Modifica prodotto
router.put('/prodotti/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descrizione, prezzo, dataPartenza } = req.body;

    const prodotto = await Product.findByIdAndUpdate(
      id,
      { nome, descrizione, prezzo, dataPartenza },
      { new: true }
    );

    if (!prodotto) {
      return res.status(404).json({ message: 'Prodotto non trovato' });
    }

    res.json({ message: 'Prodotto aggiornato con successo', prodotto });
  } catch (err) {
    console.error('Errore dettagliato:', err); 
    res.status(500).json({ message: 'Errore nel modificare il prodotto', error: err.message });
  }
});



// 5. Elimina un prodotto
router.delete('/prodotti/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prodotto = await Product.findByIdAndDelete(id); 
    if (!prodotto) {
      return res.status(404).json({ message: 'Prodotto non trovato' });
    }
    res.status(200).json({ message: 'Prodotto eliminato' });
  } catch (error) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

module.exports = router;
