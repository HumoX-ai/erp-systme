import { useState } from "react";
import Cookies from "js-cookie";
import { Card } from "@nextui-org/card";
import { Button, Input, Spacer, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Iltimos, email va parolni kiriting");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      const accessToken = response.data.access_token;
      console.log("Access token:", accessToken);

      await handleGetUserInfo(accessToken);

      Cookies.set("accessToken", accessToken, { expires: 7, secure: true });

      if (response.status === 201) {
        navigate("/");
      }
      window.location.reload();

      setLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      setError("Foydalanuvchi topilmadi! Qaytadan urinib ko'ring");
    }
  };

  const handleGetUserInfo = async (accessToken: string) => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // Foydalanuvchi haqida ma'lumotlar response.data da bo'ladi
      console.log("User info:", response.data);
    } catch (error) {
      console.error("Error getting user info:", error);
    }
  };

  return (
    <div className="container-xxl">
      <div className="flex h-screen items-center justify-center">
        <Card className="w-96 p-5">
          <h1 className="text-3xl font-semibold text-center pb-4">Kirish</h1>
          {error && <p className="text-red-500 pb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              fullWidth
              size="md"
              autoComplete="on"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Spacer y={1} />
            <Input
              type="password"
              autoComplete="on"
              fullWidth
              size="md"
              label="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer y={5} />
            <Button size="lg" color="primary" type="submit" fullWidth>
              {loading ? <Spinner color="success" /> : "Kirish"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
