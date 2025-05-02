## Orizon - RESTful API for Responsible Travel

This project represents the backend for **Orizon**, a travel agency promoting sustainable and responsible tourism. The application provides a set of RESTful APIs for managing users, travel products, and orders.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#  Getting Started

This project uses **Node.js** and **Express.js**. Make sure these tools are installed on your machine before starting.

##  Prerequisites

- Node.js, npm, and MongoDB installed on your local machine.

##  Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/HavolliErjon/orizon-api.git

   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a .env file in the root directory with the       following content:

   ```
   MONGO_URI=mongodb://127.0.0.1:27017/orizon
   PORT=3000
   ```

4. Start the application:
   ```
   npm start
   ```
      <p align="right">(<a href="#readme-top">back to top</a>)</p>
   

## API Usage

You can interact with the API by sending HTTP requests to the endpoints listed below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## API Documentation

Users API

- **Create a new user**

  - Endpoint: `/api/users/`
  - Method: `POST`
  - Description: Creates a new user.
    - Request body:
    - **name**: User's first name
    - **surname**:  User's last name
    - **email**: User's email address

- **Retrieve all users**

  - Endpoint: `/api/users/`
  - Method: `GET`
  - Description: Retrieves a list of all registered users.

- **Retrieve a user by ID**

  - Endpoint: `/api/users/:userID`
  - Method: `GET`
  - Description: Retrieves user information by their ID.

- **Update a user by ID**

  - Endpoint: `/api/users/:userID`
  - Method: `PUT`
  - Description: Updates user information by their ID.
    - Request body:
    - **name**: First name
    - **surname**: Last name
    - **email**: Email address

- **Delete a user by ID**
  - Endpoint: `/api/users/:userID`
  - Method:: `DELETE`
  - Description: Deletes a user by their ID.

### Products API

- **Create a new product**

  - Endpoint: `/api/products/`
  - Method: `POST`
  - Description: Creates a new product.
    - Request body:
    - **name**: Product name

- **Retrieve all products**

  - Endpoint: `/api/products/`
  - Method: `GET`
  - Description: Retrieves a list of all products.

- **Retrieve a product by ID**

  - Endpoint: `/api/products/:productId`
  - Method: `GET`
  - Description: Retrieves product information by its ID.

- **Update a product by ID**

  - Endpoint: `/api/products/:productId`
  - Method: `PUT`
  - Description: Updates product information by its ID.
  - Request body:
    - **name**: Product name

- **Delete a product by ID**
  - Endpoint: `/api/products/:productId`
  - Method: `DELETE`
  - Description: Deletes a product by its ID.

### Orders API

- **Create a new order**

  - Endpoint: `/api/orders/`
  - Method: `POST`
  - Description: Creates a new order.
  - Request body:
    - **userID**: User ID
    - **productID**:  Product ID


- **Retrieve all orders**

  - Endpoint: `/api/orders/`
  - Method: `GET`
  - Description: Retrieves a list of all orders.

- **Retrieve all orders by date**

  - Endpoint: `/api/orders/all/:date`
  - Method: `GET`
  - Description: Retrieves orders filtered by a specific date.

- **Retrieve all orders by product**

  - Endpoint: `/api/search/:productName`
  - Method: `GET`
  - Description: Retrieves orders filtered by a specific product.

- **Retrieve an order by ID**

  - Endpoint: `/api/orders/:orderId`
  - Method: `GET`
  - Description: Retrieves an order by its ID.

- **Update an order by ID**

  - Endpoint: `/api/orders/:orderId`
  - Method: `PUT`
  - Description: Updates an order by its ID.
  - Request body:
    - **userID**:  User ID
    - **productID**: Product ID

- **Delete an order by ID**
  - Endpoint: `/api/orders/:orderId`
  - Method: `DELETE`
  - Description: Deletes an order by its ID.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

- LinkedIn: [Erjon Havolli](https://www.linkedin.com/in/erjon-havolli/)
- GitHub: [Erjon Havolli](https://github.com/HavolliErjon)


Project Link: [https://github.com/HavolliErjon/orizon-api](https://github.com/HavolliErjon/orizon-api)  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

