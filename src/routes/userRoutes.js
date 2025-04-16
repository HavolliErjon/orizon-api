const express = require('express');
const User = require('../models/userModel');  // Importa il modello User
const router = express.Router();

// Aggiungi un nuovo utente
router.post('/', async (req, res) => {  // Cambia il percorso in "/" anziché "/users"
  try {
    const { nome, cognome, email } = req.body;

    // Verifica che l'email sia unica
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email già registrata' });
    }

    const nuovoUtente = new User({ nome, cognome, email });
    await nuovoUtente.save();

    res.status(201).json(nuovoUtente);
  } catch (error) {
    res.status(400).json({ message: 'Errore nella creazione dell\'utente', error: error.message });
  }
});

// Vedi tutti gli utenti
router.get('/', async (req, res) => {
  try {
    const utenti = await User.find(); // Recupera tutti gli utenti
    res.status(200).json(utenti); // Restituisci gli utenti in formato JSON
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recuperare gli utenti' });
  }
});

module.exports = router;
