import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/404";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "./lib/api";
import Cookies from "js-cookie";

export interface UserInfo {
  id: number;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      fetchUserInfo(accessToken)
        .then((data) => setUserInfo(data))
        .catch((error) => console.error("Error fetching user info:", error));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Foydalanuvchi chiqib ketganda Cookie dan accessToken ni o'chirish
    Cookies.remove("accessToken");
    // Foydalanuvchini ma'lumotlarini o'chirish
    setUserInfo(null);

    // Avtomatik ravishda /login sahifasiga yo'naltirish
    navigate("/login");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home userInfo={userInfo} handleLogout={handleLogout} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
