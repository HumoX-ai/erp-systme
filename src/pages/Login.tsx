import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Input, Spacer, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Tizimga kirish";
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
      // Cookie ga saqlash sozlamalari
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
      <div className="flex h-screen items-center justify-evenly flex-wrap">
        <div className="hidden md:block">
          <Image src="/logo2.svg" width={600} alt="logo" />
        </div>
        <div className="w-full md:w-2/5 p-5">
          <h1 className="text-3xl font-semibold text-center pb-4">
            Tizimga kirish
          </h1>
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
              type={isVisible ? "text" : "password"}
              autoComplete="on"
              fullWidth
              size="md"
              label="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            <Spacer y={5} />
            <Button
              variant="shadow"
              isDisabled={loading}
              size="lg"
              color={error ? "danger" : "primary"}
              type="submit"
              fullWidth
            >
              {loading ? <Spinner color="white" /> : "Kirish"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
