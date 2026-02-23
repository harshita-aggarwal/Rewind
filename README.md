# 🎬 Rewind

A full-stack Netflix-inspired streaming discovery app built with the MERN stack. Browse popular movies and TV shows, track your watch history, and enjoy a seamless, authenticated viewing experience.

> 🚧 **This project is currently under active development.**

---

## ✅ Current Progress

### Backend
- [x] Project scaffolding & server setup (`server.js`)
- [x] Auth routes (`auth.route.js`)
- [x] Auth controller (`auth.controller.js`)
- [ ] User model (coming soon)
- [ ] Protect route middleware (coming soon)
- [ ] Movie & TV routes + controllers (coming soon)
- [ ] Search routes + controllers (coming soon)
- [ ] History routes + controllers (coming soon)

### Frontend
- [ ] App scaffolding (coming soon)
- [ ] Signup / Login / Logout pages (coming soon)
- [ ] Home screen with banner + content strips (coming soon)
- [ ] Watch page (coming soon)
- [ ] Search page (coming soon)
- [ ] History page (coming soon)
- [ ] Custom 404 page (coming soon)
- [ ] Protected routes (coming soon)

---

## 🚀 Planned Features

- **Authentication** — Secure signup, login, and logout with JWT-based session management
- **Home Screen** — Dynamic banner showcasing a trending movie or TV show, plus curated strips:
  - Continue Watching
  - Top Movies
  - Top TV Shows
  - ...and more
- **Search** — Search across movies and TV shows in real time
- **Movies & TV Shows** — Fetch and browse content
- **Watch Page** — Dedicated page for viewing trailers and content details
- **History Page** — Track everything you've watched
- **Protected Routes** — Middleware-guarded routes ensuring only authenticated users access private pages
- **Custom 404 Page** — A polished fallback for unknown routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcrypt |
| Styling | TBD |

---

## 📁 Project Structure

```
rewind/
├── backend/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── routes/
│   │   └── auth.route.js
│   ├── models/                   # 🚧 coming soon
│   ├── middleware/               # 🚧 coming soon
│   ├── services/                 # 🚧 coming soon
│   └── server.js
├── frontend/                     # 🚧 coming soon
├── .env
├── .gitignore
├── package-lock.json
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/rewind.git
cd rewind
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. **Run the server**

```bash
npm run dev
```

---

## 📄 License

This project is for educational purposes only.

---

## 🙌 Acknowledgements

- Inspired by Netflix's UI/UX design

---

> Built with ❤️ using the MERN stack