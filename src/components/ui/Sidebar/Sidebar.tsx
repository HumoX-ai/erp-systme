import { NavLink } from "react-router-dom";
import navigationLinks from "../../../configs/sidebar.config";

export const Sidebar = () => {
  const userRole =
    JSON.parse(localStorage.getItem("auth") || "{}").state?.user?.role || null;

  return (
    <div className="h-screen w-64 hidden sm:block border-r-1 p-4 border-[#DCDBDB] dark:border-[#2A2A2A]">
      <div>
        <div className="">
          <h2 className="text-xl font-semibold">LOGO</h2>
        </div>

        <div className="mt-7">
          <ul>
            {navigationLinks.map(({ key, path, icon, title, role }) => {
              {
                if (userRole === role || role === "all") {
                  return (
                    <li
                      key={key}
                      className="relative flex items-center justify-center cursor-pointer text-center"
                    >
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `text-medium font-medium my-4 w-full block text-[#2D60FF] relative items-center justify-center cursor-pointer text-center transition-all duration-300 ${
                            isActive
                              ? "translate-x-2 before:scale-x-100 before:border-l-4 before:border-[#2D60FF] before:absolute before:h-full before:-left-4 before:top-0 before:rounded-r-lg"
                              : "before:scale-x-0 before:border-l-4 before:border-transparent before:absolute before:h-full before:-left-4 before:top-0 before:rounded-r-lg"
                          }`
                        }
                      >
                        <div className="flex items-center gap-3">
                          {icon && (
                            <img src={icon} className="text-[#2D60FF]" alt="" />
                          )}
                          {title}
                        </div>
                      </NavLink>
                    </li>
                  );
                }
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
