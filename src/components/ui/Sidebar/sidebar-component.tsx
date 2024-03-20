import { NavLink } from "react-router-dom";
import navigationLinks from "../../../configs/sidebar-config";
import { SvgIcon } from "../svgIcon";

const Sidebar = () => {
  const userRole =
    JSON.parse(localStorage.getItem("auth") || "{}").state?.user?.role || null;

  return (
    <div className="h-screen w-64 hidden sm:block border-r-1 border-[#DCDBDB] dark:border-[#2A2A2A]">
      <div>
        <div className="border-b-1 w-full">
          <h2 className="text-xl font-semibold p-4">LOGO</h2>
        </div>

        <div className="mt-7 p-4">
          <ul>
            {navigationLinks.map(({ icon, key, path, role, title }) => {
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
                          `text-medium font-medium my-4 w-full block relative items-center justify-center cursor-pointer text-center transition-all duration-300 ${
                            isActive ||
                            window.location.pathname.match(
                              new RegExp(`^${path}(/.*)?$`)
                            )
                              ? "text-[#2D60FF] stroke-[#2D60FF] fill-[#2D60FF] translate-x-2 before:scale-x-100 before:border-l-4 before:border-[#2D60FF] before:absolute before:h-full before:-left-4 before:top-0 before:rounded-r-lg"
                              : "before:scale-x-0 text-[#B1B1B1] stroke-[#B1B1B1] fill-[#B1B1B1] before:border-l-4 before:border-transparent before:absolute before:h-full before:-left-4 before:top-0 before:rounded-r-lg"
                          }`
                        }
                      >
                        <div className="flex items-center gap-x-2">
                          {/* {icon && (
                            <img src={icon} className="text-[#2D60FF]" alt="" />
                          )} */}
                          {icon ? <SvgIcon iconName={icon} /> : ""}
                          <p>{title}</p>
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

export default Sidebar;
