import { NavLink } from "react-router-dom";
import navigationLinks from "../../../configs/sidebar.config";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 hidden sm:block border-r-1 p-4 border-[#DCDBDB] dark:border-[#2A2A2A]">
      <div>
        <div className="">
          <h2 className="text-xl font-semibold">LOGO</h2>
        </div>

        <div className="mt-7">
          <ul>
            {navigationLinks.map(({ key, path, title }) => {
              return (
                <li
                  key={key}
                  className="relative flex items-center justify-center cursor-pointer text-center"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      "text-medium font-medium py-4 w-full block" +
                      " " +
                      (isActive
                        ? "text-[#2D60FF] before:border-l-5 before:border-[#2D60FF] before:absolute before:h-full before:-left-4 before:top-0 before:rounded-r-lg"
                        : "text-[#B1B1B1]")
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
