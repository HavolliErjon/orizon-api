const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');  // Importa le rotte dei prodotti
const userRoutes = require('./routes/userRoutes');  // Importa le rotte degli utenti
const orderRoutes = require('./routes/orderRoutes');  // Importa le rotte degli ordini

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per leggere i body JSON nelle richieste
app.use(express.json());

// Rotte
app.use('/api', productRoutes);  // Le rotte dei prodotti iniziano con "/api/prodotti"
app.use('/api/users', userRoutes);  // Le rotte degli utenti iniziano con "/api/users"
app.use('/api/ordini', orderRoutes);  // Le rotte degli ordini iniziano con "/api/ordini"

// Connessione al database MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/orizon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connessione a MongoDB riuscita');
  app.listen(PORT, () => {
    console.log(`🚀 Server avviato su http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Errore di connessione a MongoDB:', err);
});
