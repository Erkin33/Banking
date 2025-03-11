"use client"; // Для Next.js 13, если ты используешь app router

import React, { useState } from "react";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  // Берём URL бэкенда из переменной окружения (иначе fallback на localhost)
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";
    try {
      const response = await fetch(`${backendUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Ошибка запроса");
      }

      const data = await response.json(); 
      // Для /register мы просто выводим "Регистрация прошла успешно!"
      // Для /login получаем { token }, сохраняем в state
      if (isLogin) {
        setToken(data.token);
      }

      alert(isLogin ? "Вход выполнен успешно!" : "Регистрация прошла успешно!");
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{ width: "100%" }}>
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>

      <button
        onClick={() => {
          setIsLogin(!isLogin);
          setError(null);
        }}
        style={{ marginTop: "10px", width: "100%" }}
      >
        {isLogin
          ? "Нет аккаунта? Зарегистрируйтесь"
          : "Уже есть аккаунт? Войдите"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {token && (
        <div style={{ marginTop: "20px", wordBreak: "break-all" }}>
          <strong>JWT Token:</strong>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
}
