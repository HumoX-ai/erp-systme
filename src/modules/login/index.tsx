import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Input, Spacer, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import axios from "axios";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useAuthStore } from "../../store/auth";

const Login = () => {
  const [username, setEmail] = useState("");
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
    if (!username || !password) {
      setError("Iltimos, email va parolni kiriting");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "http://188.166.209.136:8080/API/auth/token/",
        {
          username,
          password,
        }
      );
      const accessToken = response.data.access;
      console.log(accessToken);

      if (accessToken) {
        // Foydalanuvchi ma'lumotlarini olish o'rniga to'g'ridan-to'g'ri login amalga oshirish
        onSignInSuccess({
          id: 0, // id ni backenddan olish mumkin
          avatar: "", // avatar ni backenddan olish mumkin
          email: username, // email ni form maydoni qiymatidan olamiz
          name: "", // ism ni backenddan olish mumkin
          role: "", // rol ni backenddan olish mumkin
        });

        // Cookie ga saqlash sozlamalari
        Cookies.set("accessToken", accessToken, { expires: 7, secure: true });

        window.location.reload();
      } else {
        setError("Foydalanuvchi topilmadi! Qaytadan urinib ko'ring");
      }

      setLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      setError("Foydalanuvchi topilmadi! Qaytadan urinib ko'ring");
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
              type="text"
              fullWidth
              size="md"
              autoComplete="on"
              label="Email"
              value={username}
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
