# Book Store Haven

**Book Store Haven** is a full-stack e-commerce web application designed for selling books. It features both an admin dashboard for managing the bookstore and a user dashboard for easy browsing, purchasing, and order tracking.

## Features

- **Admin Dashboard**: Manage books, users, and orders.
- **User Dashboard**: Browse books, add to cart, and ordered the book.
- **Responsive Design**: Optimized for all device sizes.
- **Authentication & Authorization**: Secure login and registration using JWT tokens.
- **Cookie Management**: Persistent login, allowing users to stay logged in without re-authenticating on page refresh.
- **Built with the MERN Stack**: 
  - **MongoDB**: NoSQL database for storing books, users, and orders.
  - **Express.js**: Backend framework for handling API requests.
  - **React.js**: Frontend framework for building a dynamic and responsive user interface.
  - **Node.js**: Runtime environment for executing server-side JavaScript.

## Technologies Used

- **Frontend**: React.js, Redux (for state management), Bootstrap (for styling)
- **Backend**: Node.js, Express.js, MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Cookies**: For session management
- **API**: RESTful API for handling requests

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adityakumar92/book-store-haven.git
   ```

2. Navigate to the project directory:
   ```bash
   cd book-store-haven
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` folder and add your MongoDB URI, JWT secret, and any other configuration required.

   Example `.env` file:
   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. Run the application:
   ```bash
   cd backend
   npm run dev
   ```

6. Navigate to `http://localhost:3000` to view the website.

## Usage

- **Admin**: Can log in to manage book listings, view users, and process orders.
- **User**: Can browse books, add them to the cart, and ordered book.
  
## Future Features

- Wishlist functionality.
- Review and rating system for books.
- Order history tracking for users.
  
## Contributing

If you'd like to contribute, please create a pull request with your proposed changes.
