## Travel Api

The "Travel Api" is a web application that provides the API for working with travels!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express
- MongoDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Getting Started with Travel Api

This project uses Node.js and Express. Ensure you have them installed before proceeding.

## Prerequisites

- Node.js, MongoDB and npm installed on your machine.

## Installation

1. Clone the repository

   ```sh
   git clone https://github.com/DarioCepele/TravelAPI-S2i.git

   ```

2. Install NPM packages

   ```
   npm install
   ```

3. Create .env file

   ```
   DATABASE_URL=mongodb://0.0.0.0:27017/"Your DB Name"
   ```

4. Start application
   ```
   node server.js
   ```
      <p align="right">(<a href="#readme-top">back to top</a>)</p>
   <!-- USAGE -->

## Usage

To use the "Travel Api," follow these simple steps:

1.Make API requests to create, retrieve, update, or delete person and product.

2.Make API requests to create, retrieve, update, or delete of sales order.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- API DOCUMENTATION -->

## API Documentation

The "Travel Api" provides the following APIs:

### Users API

- **Create a New User**

  - Endpoint: `/users/`
  - Method: `POST`
  - Description: Create a new user.
    - Request Body:
    - **Name**: User's name.
    - **Surname**: User's surname.
    - **Email**: User's email address.

- **Get All Users**

  - Endpoint: `/users/`
  - Method: `GET`
  - Description: Retrieve a list of all registered users.

- **Get User by ID**

  - Endpoint: `/users/:userID`
  - Method: `GET`
  - Description: Retrieve user information based on their ID.

- **Update User by ID**

  - Endpoint: `/users/:userID`
  - Method: `PUT`
  - Description: Update user information based on their ID.
    - Request Body:
    - **Name**: User's name.
    - **Surname**: User's surname.
    - **Email**: User's email address.

- **Delete User by ID**
  - Endpoint: `/users/:userID`
  - Method: `DELETE`
  - Description: Delete a user based on their email.

### Products API

- **Create a New Product**

  - Endpoint: `/products/`
  - Method: `POST`
  - Description: Create a new product.
    - Request Body:
    - **Name**: Product's name.

- **Get All Products**

  - Endpoint: `/products/`
  - Method: `GET`
  - Description: Retrieve a list of all products.

- **Get Product by ID**

  - Endpoint: `/products/:productId`
  - Method: `GET`
  - Description: Retrieve product information based on its ProductId.

- **Update Product by ID**

  - Endpoint: `/products/:productId`
  - Method: `PUT`
  - Description: Update product information based on its ProductId.
  - Request Body:
    - **Name**: Product's name.

- **Delete Product by ID**
  - Endpoint: `/products/:productId`
  - Method: `DELETE`
  - Description: Delete a product based on its ProductId.

### Orders API

- **Create a New Order**

  - Endpoint: `/orders/`
  - Method: `POST`
  - Description: Create a new order.
  - Request Body:
    - **userID**: User's id.
    - **productID**: product id.

- **Get All Orders**

  - Endpoint: `/orders/`
  - Method: `GET`
  - Description: Retrieve a list of all orders.

- **Get All Orders by Date**

  - Endpoint: `/orders/all/:date`
  - Method: `GET`
  - Description: Retrieve orders filtered by a specific date.

- **Get All Orders by Product**

  - Endpoint: `/search/:productName`
  - Method: `GET`
  - Description: Retrieve orders filtered by a specific product.

- **Get Orders by ID**

  - Endpoint: `/orders/:orderId`
  - Method: `GET`
  - Description: Retrieve orders for a specific OrderId.

- **Update Order by ID**

  - Endpoint: `/orders/:orderId`
  - Method: `PUT`
  - Description: Update an order based on its ID.
  - Request Body:
    - **userID**: User's id.
    - **productID**: product id.

- **Delete Order by ID**
  - Endpoint: `/orders/:orderId`
  - Method: `DELETE`
  - Description: Delete an order based on its ID.

Please refer to the respective API endpoints for detailed information on how to use each of them.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->

## Contact

- Instagram: [@dario.cepele](https://www.instagram.com/dario.cepele/)
- LinkedIn: [Dario Cepele](https://www.linkedin.com/in/Dario-Cepele/)
- GitHub: [Dario Cepele](https://github.com/DarioCepele)

Project Link: [https://github.com/HavolliErjon/orizon-api](https://github.com/HavolliErjon/orizon-api)  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

