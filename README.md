> # 📦 Stock Mind - Inventory Management System

> A production-ready, full-stack inventory management system built with modern web technologies. Streamline your business operations with real-time stock tracking, sales analytics, and complete purchase management.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)


---

## 🎯 What is this project?

**Stock Mind** is a complete inventory management solution that helps businesses track products, manage sales & purchases, and visualize business analytics - all from a single, intuitive dashboard.

## ✨ Why this project?

Built for real-world business needs with **enterprise-grade architecture**, **type safety**, and **scalable design** - perfect for portfolio, client work, or production deployment.

---

## 🔗 Project Links

| Platform       | Link                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 📦 GitHub Repo | [https://github.com/waleedkhokar/Stock_Mind_Invertory_System.git](https://github.com/waleedkhokar/Stock_Mind_Invertory_System.git) |

---



## 📸 Screenshots

| | | |
|---|---|---|
| ![1](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/1.png) | ![1.2](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/1.2.png) | ![2](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/2.png) |
| **Register Page** | **Login** | **Dashboard** |

| | | |
|---|---|---|
| ![3](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/3.png) | ![4](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/4.png) | ![5](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/5.png) |
| **Add Product** | **Products** | **Sales** |

| | | |
|---|---|---|
| ![6](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/6.png) | ![7](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/7.png) | ![8](https://raw.githubusercontent.com/waleedkhokar/Stock_Mind_Invertory_System/main/client/public/8.png) |
| **Purchases** | **Sellers** | **User-Admin-Info** |


## 🛠️ Tech Stack

### 🖥️ Backend

| Technology        | Purpose              |
| ----------------- | -------------------- |
| **Node.js**       | Runtime Environment  |
| **Express.js**    | Web Framework        |
| **TypeScript**    | Type Safety          |
| **MongoDB Atlas** | Cloud Database       |
| **Mongoose**      | ODM for MongoDB      |
| **Zod**           | Schema Validation    |
| **JWT**           | Authentication       |
| **Bcrypt**        | Password Hashing     |
| **Morgan**        | HTTP Logging         |
| **CORS**          | Cross-Origin Support |

### 💻 Frontend

| Technology           | Purpose          |
| -------------------- | ---------------- |
| **React 18**         | UI Library       |
| **TypeScript**       | Type Safety      |
| **Redux Toolkit**    | State Management |
| **Ant Design**       | UI Components    |
| **React Hook Form**  | Form Handling    |
| **Zod**              | Form Validation  |
| **Recharts**         | Analytics Charts |
| **React Router DOM** | Navigation       |
| **SweetAlert2**      | Beautiful Alerts |
| **Vite**             | Build Tool       |
| **Tailwind CSS**     | Utility Styling  |

---

## 🌟 Core Features

### 🔐 Authentication & Users

- ✅ User Registration with validation
- ✅ Secure Login with JWT
- ✅ Password encryption (Bcrypt)
- ✅ Profile management & password change

### 📦 Product Management

- ✅ Add / Edit / Delete products
- ✅ Advanced search & filtering
- ✅ Pagination support
- ✅ Product variants
- ✅ Track product sales

### 💰 Sales Management

- ✅ View all sales with pagination
- ✅ Update / Delete sales records
- ✅ Real-time sales insights

### 🧾 Purchase Management

- ✅ Add / Edit / Delete purchases
- ✅ Complete purchase history

### 🧑‍🤝‍🧑 Seller Management

- ✅ Add / Edit / Delete sellers
- ✅ Filter & pagination support

### 📊 Analytics & Insights

- ✅ Sales trends by: **Yearly** | **Monthly** | **Weekly** | **Daily**
- ✅ Interactive Recharts visualizations

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (free tier works)
- Git

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/waleedkhokar/Stock_Mind_Invertory_System.git
cd Stock_Mind_Invertory_System

bash
cd server
npm install
Create .env file in /server:

env
NODE_ENV=development
PORT=8000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
Run backend:

bash
npm run dev        # Development
npm run build      # Build for production
npm start          # Production


3. Frontend Setup
bash
cd client
npm install
Run frontend:

bash
npm run dev        # Development (Vite)
npm run build      # Build for production
npm run preview    # Preview production build

```

---

## **PART 4: API Endpoints + Environment Variables**

```markdown
## 📋 API Endpoints (Key Examples)

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | `/api/auth/register`   | Register new user   |
| POST   | `/api/auth/login`      | Login user          |
| GET    | `/api/products`        | Get all products    |
| POST   | `/api/products`        | Create product      |
| PUT    | `/api/products/:id`    | Update product      |
| DELETE | `/api/products/:id`    | Delete product      |
| GET    | `/api/sales`           | Get all sales       |
| POST   | `/api/sales`           | Create sale         |
| GET    | `/api/sales/analytics` | Get sales insights  |
| GET    | `/api/sellers`         | Get all sellers     |
| CRUD   | `/api/purchases`       | Purchase management |
```

---

## 🔧 Environment Variables

### Backend (.env)

| Variable       | Description        | Example             |
| -------------- | ------------------ | ------------------- |
| `NODE_ENV`     | Environment        | `development`       |
| `PORT`         | Server port        | `8000`              |
| `DATABASE_URL` | MongoDB connection | `mongodb+srv://...` |
| `JWT_SECRET`   | JWT signing key    | `your_secret_key`   |

---

## 🎯 Why This Project Stands Out

| Feature                     | Benefit                        |
| --------------------------- | ------------------------------ |
| ✅ **100% TypeScript**      | Zero runtime type errors       |
| ✅ **Zod Validation**       | End-to-end data safety         |
| ✅ **MongoDB Atlas**        | Cloud-native, scalable         |
| ✅ **Redux Toolkit**        | Predictable state management   |
| ✅ **Ant Design**           | Professional UI out-of-the-box |
| ✅ **Recharts**             | Beautiful analytics            |
| ✅ **Modular Architecture** | Easy to maintain & extend      |

## 👨‍💻 About the Developer

### **Waleed Khokhar**

> **Full-Stack Engineer | Python FastAPI |  MERN Stack**

I build **scalable, production-ready web applications** with modern architectures. Passionate about clean code, type safety, and creating seamless user experiences across both JavaScript/TypeScript and Python ecosystems.

**💼 Core Expertise:**

- 🟢 **MERN Stack** (MongoDB, Express, React, Nextjs, Node.js)
- 🐍 **Python & FastAPI**
- 📘 **TypeScript & JavaScript**
- 🗄️ **PostgreSQL/SQL & MongoDB**
- 🔐 Authentication & Security
- ☁️ Cloud Deployment (Render, Vercel, AWS(learning))
- 🐳 Docker & Containerization

**🌐 Connect with me:**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/waleedkhokhar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/waleedkhokar)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://waledkhokar.vercel.app/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:waleedkhokharbusiness@gmail.com)

---

> **وَقُل رَّبِّ زِدْنِي عِلْمًا**
>
> _"And say: My Lord, increase me in knowledge."_
> — Surah Taha (20:114)

---

## 📄 License

This project is **MIT Licensed** - free for personal and commercial use.

---

## ⭐ Show Your Support

If you found this project helpful, give it a ⭐ on GitHub!

---

**Built with ❤️ by Waleed Khokhar | Full-Stack Engineer | Python Devolper | MERN Stack | Devops**
