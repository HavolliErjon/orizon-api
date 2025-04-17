const express = require('express');
const User = require('../models/userModel');  
const router = express.Router();


router.post('/', async (req, res) => {  
  try {
    const { nome, cognome, email } = req.body;

    
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


router.get('/', async (req, res) => {
  try {
    const utenti = await User.find(); 
    res.status(200).json(utenti); 
  } catch (error) {
    res.status(500).json({ message: 'Errore nel recuperare gli utenti' });
  }
});

module.exports = router;
