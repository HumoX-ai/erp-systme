import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useAuthStore } from "../../../store/auth";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setToken, session } = useAuthStore();

  const saveTheme = (theme: "system" | "dark" | "light") => {
    if (theme === "system") return;
    setToken({ theme: theme, signedIn: true });
  };

  const getTheme = () => {
    if (theme === "system") return;
    return session.theme;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
          saveTheme(e.target.checked ? "dark" : "light");
          getTheme();
        }}
        size="md"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <LuSun className={className} />
          ) : (
            <LuMoon className={className} />
          )
        }
      ></Switch>
    </div>
  );
}
