# 🔗 URL Shortener

A simple URL Shortener built using **Node.js**, **Express.js**, **MongoDB**, and **NanoID**. This application generates a unique short URL for long URLs and redirects users to the original website.

## 🚀 Features

- Generate unique short URLs
- Redirect to the original URL
- Store URLs in MongoDB
- REST API built with Express.js
- Environment variable support using dotenv

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID
- Dotenv

## 📂 Project Structure

```
URL-SHORTNER/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   └── models/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── Frontend/   (Coming Soon)
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/URL-SHORTNER.git
```

### 2. Navigate to the Backend

```bash
cd URL-SHORTNER/Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the server

```bash
node app.js
```

The server will start on:

```
http://localhost:3000
```

## 📌 API Endpoints

### Create Short URL

```
POST /api/create
```

Request Body

```json
{
  "url": "https://www.google.com"
}
```

### Redirect

```
GET /:id
```

Example

```
http://localhost:3000/abc123
```

## 📅 Future Improvements

- React Frontend
- User Authentication (JWT)
- Click Analytics
- Custom Short URLs
- QR Code Generation
- Dashboard for URL Management

## 👨‍💻 Author

**Shobhit Gupta**

- GitHub: https://github.com/shobhit3130
- LinkedIn: www.linkedin.com/in/shobhit-gupta3130

---

⭐ If you like this project, consider giving it a star!
