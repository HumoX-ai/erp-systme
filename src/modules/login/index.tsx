import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Input, Spacer, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import axios from "axios";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useAuthStore } from "../../store/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { onSignInSuccess, setToken } = useAuthStore();

  useEffect(() => {
    document.title = "Tizimga kirish";

    onSignInSuccess({
      id: 0,
      avatar: "",
      email: "",
      name: "",
      role: "",
    });

    setToken({ signedIn: false, theme: "light" });

    Cookies.remove("accessToken");
  }, [onSignInSuccess, setToken]);

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

      await handleGetUserInfo(accessToken);
      // Cookie ga saqlash sozlamalari
      Cookies.set("accessToken", accessToken, { expires: 7, secure: true });

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
      const res = response?.data;

      if (res) {
        onSignInSuccess({
          id: res?.id,
          avatar: res?.avatar,
          email: res?.email,
          name: res?.name,
          role: res?.role,
        });
      } else {
        onSignInSuccess({
          id: 0,
          avatar: "",
          email: "",
          name: "",
          role: "",
        });
      }
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
};

export default Login;
