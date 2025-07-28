"use client";

import { authService, AuthData } from "@/app/Service/authService";
import { useState } from "react";

export default function auth() {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authService.login(username, password);
      console.log("Login successful:", data);
      setError(null);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input focus-within:border-primary focus-within:outline-none mt-1 w-full"
          />
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input focus-within:border-primary focus-within:outline-none mt-1 w-full"
          />
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary rounded mt-1 w-full">
            Masuk
          </button>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </>
  );
}
