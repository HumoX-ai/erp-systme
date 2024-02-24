import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const saveTheme = (theme: string) => {
    if (theme === "system") return;
    localStorage.setItem("theme", theme);
  };

  const getTheme = () => {
    if (theme === "system") return;
    return localStorage.getItem("theme");
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
