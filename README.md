# 🎬 Rewind

A full-stack Netflix-inspired streaming discovery app built with the MERN stack. Browse popular movies and TV shows, track your watch history, and enjoy a seamless, authenticated viewing experience.

> 🚧 **This project is currently under active development.**

---

## ✅ Current Progress

### Backend
- [x] Project scaffolding & server setup (`server.js`)
- [x] Auth routes (`auth.route.js`)
- [x] Auth controller (`auth.controller.js`)
- [x] User model (`user.model.js`)
- [ ] Protect route middleware (coming soon)
- [x] TMDB Service Integration (`tmdb.service.js`)
- [x] Movie & TV routes + controllers (`tv.route.js`, `movie.route.js`, `tv.controller.js`, `movie.controller.js`)
- [ ] Search routes + controllers (coming soon)
- [ ] History routes + controllers (coming soon)

### Frontend
- [x] App scaffolding (`main.jsx`, `App.jsx`)
- [x] Routing setup with React Router (`App.jsx`)
- [x] Signup page (`SignUpPage.jsx`) — email, username & password form with validation
- [x] Login page (`LoginPage.jsx`) — email & password form
- [x] Home page with auth-based routing (`HomePage.jsx`) — renders `AuthScreen` or `HomeScreen` depending on user state
- [x] Auth landing screen (`AuthScreen.jsx`) — hero banner with email capture, "Get Started" CTA, and Sign In link
- [ ] Home screen content strips (`HomeScreen.jsx`) — scaffolded, in progress
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
- **Movies & TV Shows** — Fetch and browse content powered by the TMDB API
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
| External API| TMDB |
| Styling | Tailwind |

---

## 📁 Project Structure

```
rewind/
├── backend/
│   ├── controllers/
│   │   ├──  auth.controller.js
│   │   ├──  movie.controller.js
│   │   └── tv.controller.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── movie.route.js
│   │   └── tv.route.js
│   ├── models/
│   │   └── user.model.js    
│   ├── utils/
│   │   └── generateToken.js              
│   ├── config/
│   │   ├── db.js
│   │   └── envVars.js
│   ├── middleware/               # 🚧 coming soon
│   ├── services/
│   │   └── tmdb.service.js                
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── HomePage.jsx       # Auth-aware router: shows AuthScreen or HomeScreen
│   │   │   │   ├── HomeScreen.jsx     # 🚧 Content strips (in progress)
│   │   │   │   └── AuthScreen.jsx     # Hero landing with email capture CTA
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
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
- TMDB API Key — get one at themoviedb.org

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
PORT=5002
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
TMDB_API_KEY=your_tmdb_api_key
```

4. **Run the server**

```bash
npm run dev
```
---

## 🔐 API Endpoints

### Auth
| Method | Route | Description | 
|--------|-------|-------------|
| POST | `/api/v1/auth/signup` | Register a new user | 
| POST | `/api/v1/auth/login` | Login and receive JWT | 
| POST | `/api/v1/auth/logout` | Logout and clear session | 

### Movies
| Method | Route | Description | 
|--------|-------|-------------|
| GET | `/api/v1/movie/trending` | Get trending movies | 
| GET | `/api/v1/movie/:id/details` | Get movie details |
| GET | `/api/v1/movie/:id/trailers` | Get movie trailers |
| GET | `/api/v1/movie/:id/similar` | Get similar movies |
| GET | `/api/v1/movie/:category` | Get movies by Category |

### TV Shows
| Method | Route | Description | 
|--------|-------|-------------|
| GET | `/api/v1/tv/trending` | Get trending TV shows | 
| GET | `/api/v1/tv/:id/details` | Get TV show details |
| GET | `/api/v1/tv/:id/trailers` | Get TV show trailers |
| GET | `/api/v1/tv/:id/similar` | Get similar TV shows |
| GET | `/api/v1/tv/:category` | Get TV shows by Category |

---

## 📄 License

This project is for educational purposes only.

---

## 🙌 Acknowledgements

- Inspired by Netflix's UI/UX design

---

> Built with ❤️ using the MERN stack