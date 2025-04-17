const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); 
const userRoutes = require('./routes/userRoutes');  
const orderRoutes = require('./routes/orderRoutes');  

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per leggere i body JSON nelle richieste
app.use(express.json());

// Rotte
app.use('/api', productRoutes);  
app.use('/api/users', userRoutes);  
app.use('/api/ordini', orderRoutes);  

// Connessione al database MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/orizon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connessione a MongoDB riuscita');
  app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('Errore di connessione a MongoDB:', err);
});
