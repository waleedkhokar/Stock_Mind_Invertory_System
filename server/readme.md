# ⚙️ Stock Mind - Backend API

> RESTful API for inventory management with Node.js, Express, TypeScript, and MongoDB.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

---

## 🎯 What is this API?

This is the **backend REST API** for Stock Mind Inventory Management System. It handles all database operations, user authentication, and business logic for products, sales, purchases, and sellers.

---

## 🖥️ Backend Tech Stack

| Category       | Technology    | Purpose                   |
| -------------- | ------------- | ------------------------- |
| **Runtime**    | Node.js       | JavaScript runtime        |
| **Framework**  | Express.js    | Web framework             |
| **Language**   | TypeScript    | Type safety               |
| **Database**   | MongoDB Atlas | Cloud database            |
| **ODM**        | Mongoose      | MongoDB object modeling   |
| **Validation** | Zod           | Schema validation         |
| **Auth**       | JWT + Bcrypt  | Authentication & security |
| **Logging**    | Morgan        | HTTP request logging      |
| **Security**   | CORS          | Cross-origin support      |
| **Env**        | dotenv        | Environment variables     |

---

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Installation

#### 1. Clone & Navigate

```bash
git clone https://github.com/waleedkhokar/Stock_Mind_Invertory_System.git
cd Stock_Mind_Invertory_System/server


npm install

NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://waleedkhokhar780:Waleed%40425197746@cluster0.ytezhds.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_super_secret_key_here

npm run dev        # Development mode (auto-reload)
npm run build      # Build to dist/ folder
npm start          # Production mode

http://localhost:8000
API Base URL: http://localhost:8000/api

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Register  │────▶│   Login     │────▶│   JWT       │
│  (Bcrypt)   │     │ (Validate)  │     │  Generated  │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Protected  │◀────│   Verify    │◀────│   Send to   │
│   Routes    │     │    JWT      │     │   Client    │
└─────────────┘     └─────────────┘     └─────────────┘


```

for more guidance visit parent folder readme
