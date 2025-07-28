# Simple REST API with Express.js

## 📋 Description

This is a simple REST API built using Node.js and Express.js. It demonstrates fundamental principles of RESTful design with in-memory data.

---

## 🚀 Getting Started

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/charming0524/RESTAPI.git
cd express-api
npm install
```

### 2. Run the Server

```bash
node server.js
```

---

## 🛠 API Endpoints

### Base URL: `http://localhost:3000`

#### GET `/`
Returns a "Hello World!" message.

#### GET `/items`
Retrieve all items

#### GET `/items/:id`
Retrieve an item by ID

#### POST `/items`
Create a new item

#### PUT `/items/:id`
Update an item by ID

#### DELETE `/items/:id`
Delete an item by ID

---

## ❗ Error Handling

- `400` - Missing name or description
- `404` - Item not found
- `500` - Internal server errors

---

## 📬 Example with Postman

1. Set method to `POST`
2. URL: `http://localhost:3000/items`
3. Body (raw JSON):
```json
{
  "name": "Test Item",
  "description": "Created using Postman"
}
```

---
