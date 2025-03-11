require("dotenv").config(); // Подгружает .env
const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

// 1. Настраиваем CORS
app.use(cors({
  origin: [
    "https://banking-omega-seven.vercel.app", // ← твой Vercel-домен
    "http://localhost:3000"                  // ← если нужно тестировать локально
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// 2. Парсим JSON-тело запросов
app.use(express.json());

// 3. Подключение к базе (Railway Postgres, например)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false, // На Railway для Postgres это нужно
  },
});

// 4. Тестовый маршрут
app.get("/", (req, res) => {
  res.send("Backend API работает!");
});

// 5. Регистрация
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, hashedPassword]
    );
    res.json(result.rows[0]); // возвращаем созданного пользователя
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка регистрации" });
  }
});

// 6. Авторизация
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userResult = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    const user = userResult.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    // Генерируем JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка авторизации" });
  }
});

// 7. Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
