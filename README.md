# 🔗 URL Shortener

A scalable URL Shortener REST API built using Node.js, Express.js, and MongoDB. This project follows a clean modular architecture with Controller-Service-DAO layers for better maintainability and scalability.

## 🚀 Features

- Generate short URLs
- Redirect to original URLs
- MongoDB database integration
- Layered architecture (Controller → Service → DAO)
- Global Error Handling
- Async Error Wrapper
- NanoID-based unique short URLs
- Clean and modular backend structure

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID
- dotenv

## 📁 Project Structure

```
Backend/
│
├── src/
│   ├── config/
│   ├── controller/
│   ├── dao/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/shobhit3130/URL_SHORTNER.git
```

Move to project directory

```bash
cd URL_SHORTNER/Backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
APP_URL=http://localhost:3000
```

Start the server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 📌 API Endpoints

### Create Short URL

```http
POST /api/create
```

Request Body

```json
{
  "url": "https://www.google.com"
}
```

Response

```json
{
  "success": true,
  "shortUrl": "http://localhost:3000/abc12345"
}
```

---

### Redirect

```http
GET /:shortUrl
```

Redirects the user to the original URL.

---

## 🏗 Architecture

```
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
DAO
   │
   ▼
MongoDB
```

---

## 📈 Future Improvements

- User Authentication (JWT)
- Custom Short URLs
- QR Code Generation
- Analytics Dashboard
- URL Expiration
- Click Tracking
- Rate Limiting
- Swagger API Documentation
- Docker Support

---

## 👨‍💻 Author

**Shobhit Gupta**

Backend Developer | Node.js | Express.js | MongoDB

GitHub: https://github.com/shobhit3130
