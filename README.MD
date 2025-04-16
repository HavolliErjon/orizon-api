## Orizon - RESTful API per Viaggi Responsabili

Questo progetto rappresenta il backend per Orizon, un'agenzia di viaggi che promuove un turismo sostenibile e consapevole. L'applicazione fornisce un set di API RESTful per la gestione di utenti, prodotti (viaggi) e ordini.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express
- MongoDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#  Introduzione all'API Orizon

Questo progetto utilizza Node.js e Express.js. Assicurati di avere questi strumenti installati sul tuo computer prima di iniziare.

##  Prerequisiti

- Node.js, MongoDB e npm devono essere installati sulla tua macchina.

##  Installazione

1. Clona il repository

   ```sh
   git clone https://github.com/tuo-utente/orizon-api.git

   ```

2. Installa i pacchetti npm

   ```
   npm install
   ```

3. Crea il file .env 

   ```
    DATABASE_URL=mongodb://localhost:27017/orizon-db
   ```

4. Avvia l'applicazione
   ```
   node server.js
   ```
      <p align="right">(<a href="#readme-top">back to top</a>)</p>
   <!-- USAGE -->

## Utilizzo

Per utilizzare "API Orizon", segui questi semplici passaggi:

1. Effettuare richieste API per creare, recuperare, aggiornare o eliminare persone e prodotti.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Documentazione API

"Travel Api" fornisce le seguenti API:

### Users API

- **Creare un nuovo utente**

  - Endpoint: `/api/users/`
  - Metodo:: `POST`
  - Descrizione: Crea un nuovo utente.
    - Body della richiesta:
    - **name**: Nome dell’utente
    - **surname**:  Cognome dell’utente
    - **email**: Indirizzo email dell’utente

- **Recuperare tutti gli utenti**

  - Endpoint: `/api/users/`
  - Metodo:: `GET`
  - Descrizione:  Recupera l’elenco di tutti gli utenti registrati.

- **Recuperare un utente per ID**

  - Endpoint: `/api/users/:userID`
  - Metodo: `GET`
  - Descrizione: Ottiene le informazioni di un utente tramite il suo ID.

- **Aggiornare un utente per ID**

  - Endpoint: `/api/users/:userID`
  - Metodo: `PUT`
  - Descrizione: Aggiorna le informazioni di un utente in base al suo ID.
    - Body della richiesta:
    - **name**: Nome
    - **surname**: Cognome
    - **email**: Email.

- **Eliminare un utente per ID**
  - Endpoint: `/api/users/:userID`
  - Metodo: `DELETE`
  - Descrizione: Elimina un utente tramite il suo ID.

### Products API

- **Creare un nuovo prodotto**

  - Endpoint: `/api/products/`
  - Metodo: `POST`
  - Descrizione: Crea un nuovo prodotto.
    - Body della richiesta:
    - **name**: Nome del prodotto.

- **Recuperare tutti i prodotti**

  - Endpoint: `/api/products/`
  - Metodo: `GET`
  - Descrizione: Recupera l’elenco di tutti i prodotti.

- **Recuperare un prodotto per ID**

  - Endpoint: `/api/products/:productId`
  - Metodo: `GET`
  - Descrizione: Recupera le informazioni di un prodotto tramite il suo ID.

- **Aggiornare un prodotto per ID**

  - Endpoint: `/api/products/:productId`
  - Metodo: `PUT`
  - Descrizione: Aggiorna le informazioni di un prodotto tramite il suo ID.
  - Body della richiesta:
    - **name**:  Nome del prodotto

- **Eliminare un prodotto per ID**
  - Endpoint: `/api/products/:productId`
  - Metodo: `DELETE`
  - Descrizione: Elimina un prodotto in base al suo ID.

### Orders API

- **Creare un nuovo ordine**

  - Endpoint: `/api/orders/`
  - Metodo: `POST`
  - Descrizione: Crea un nuovo ordine.
  - Body della richiesta:
    - **userID**: ID dell’utente
    - **productID**:  ID del prodotto


- **Recuperare tutti gli ordini**

  - Endpoint: `/api/orders/`
  - Metodo: `GET`
  - Descrizione: Recupera l’elenco di tutti gli ordini.

- **Recuperare tutti gli ordini per data**

  - Endpoint: `/api/orders/all/:date`
  - Metodo: `GET`
  - Descrizione: Recupera gli ordini filtrati per una data specifica.

- **Recuperare tutti gli ordini per prodotto**

  - Endpoint: `/api/search/:productName`
  - Metodo: `GET`
  - Descrizione: Recupera gli ordini filtrati per un prodotto specifico.

- **Recuperare un ordine per ID**

  - Endpoint: `/api/orders/:orderId`
  - Metodo: `GET`
  - Descrizione: Recupera un ordine tramite il suo ID.

- **Aggiornare un ordine per ID**

  - Endpoint: `/api/orders/:orderId`
  - Metodo: `PUT`
  - Descrizione: Aggiorna un ordine in base al suo ID.
  - Body della richiesta:
    - **userID**:  ID dell’utente
    - **productID**: ID del prodotto

- **Eliminare un ordine per ID**
  - Endpoint: `/api/orders/:orderId`
  - Method: `DELETE`
  - Descrizione: Elimina un ordine in base al suo ID.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTATTI-->

## Contatti

- LinkedIn: [Erjon Havolli](https://www.linkedin.com/in/erjon-havolli/)
- GitHub: [Erjon Havolli](https://github.com/HavolliErjon)


Project Link: [https://github.com/HavolliErjon/orizon-api](https://github.com/HavolliErjon/orizon-api)  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

