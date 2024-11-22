Here's a sample `README.md` file for your Personal Blog App Backend project:

# Personal Blog App Backend

This is the backend for a Personal Blog App where users can create accounts, log in, and manage their blogs. The app allows users to create, update, and delete their own blogs. Users cannot update or delete other users' blogs. It uses JWT for authentication.

## Features

- User registration and login
- Blog creation, update, and deletion (only for the logged-in user)
- JWT-based authentication to secure endpoints
- Ability to fetch all blogs or a single blog

## Tech Stack

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing user and blog data
- **JWT (JSON Web Token)**: For securing routes and authenticating users
- **Mongoose**: MongoDB object modeling for Node.js

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/personal-blog-app-backend.git
```

### 2. Navigate to the project folder:

```bash
cd personal-blog-app-backend
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Create a `.env` file:

```bash
touch .env
```

Inside the `.env` file, add your environment variables:

```
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

### 5. Start the server:

```bash
npm start
```

Your server should now be running at `http://localhost:5000`.

## API Endpoints

### 1. **POST /auth/signup**

Create a new user account.

- **Request body**:

```json
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
```

- **Response**:

```json
{
  "message": "User created successfully"
}
```

### 2. **POST /auth/login**

Login and obtain a JWT token.

- **Request body**:

```json
{
  "email": "user1@example.com",
  "password": "password123"
}
```

- **Response**:

```json
{
  "token": "your-jwt-token"
}
```

### 3. **POST /blogs**

Create a new blog.

- **Headers**:

```json
{
  "Authorization": "Bearer your-jwt-token"
}
```

- **Request body**:

```json
{
  "title": "My First Blog",
  "content": "This is my first blog content"
}
```

- **Response**:

```json
{
  "message": "Blog created successfully",
  "blog": {
    "title": "My First Blog",
    "content": "This is my first blog content",
    "author": "user1"
  }
}
```

### 4. **GET /blogs**

Get all blogs.

- **Response**:

```json
{
  "blogs": [
    {
      "title": "My First Blog",
      "content": "This is my first blog content",
      "author": "user1"
    },
    {
      "title": "Another Blog",
      "content": "This is another blog content",
      "author": "user2"
    }
  ]
}
```

### 5. **GET /blogs/:id**

Get a single blog by ID.

- **Response**:

```json
{
  "blog": {
    "title": "My First Blog",
    "content": "This is my first blog content",
    "author": "user1"
  }
}
```

### 6. **PUT /blogs/:id**

Update a blog.

- **Headers**:

```json
{
  "Authorization": "Bearer your-jwt-token"
}
```

- **Request body**:

```json
{
  "title": "Updated Blog Title",
  "content": "Updated blog content"
}
```

- **Response**:

```json
{
  "message": "Blog updated successfully"
}
```

### 7. **DELETE /blogs/:id**

Delete a blog.

- **Headers**:

```json
{
  "Authorization": "Bearer your-jwt-token"
}
```

- **Response**:

```json
{
  "message": "Blog deleted successfully"
}
```

## Testing

You can test the API using tools like [Postman](https://www.postman.com/)

1. **Signup**: POST `/auth/signup` to create a user.
2. **Login**: POST `/auth/login` to get a JWT token.
3. **Create Blog**: POST `/blogs` to create a new blog (use the JWT token in headers).
4. **Get Blogs**: GET `/blogs` to retrieve all blogs.
5. **Get Blog by ID**: GET `/blogs/:id` to get a specific blog.
6. **Update Blog**: PUT `/blogs/:id` to update your blog (use JWT token).
7. **Delete Blog**: DELETE `/blogs/:id` to delete your blog (use JWT token).
