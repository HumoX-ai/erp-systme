import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 hidden sm:block border-r-1 border-[#DCDBDB] dark:border-[#2A2A2A] ">
      <div className="p-4">
        <h2 className="text-xl font-semibold">LOGO</h2>
        <ul className="mt-4">
          <li className="mb-2">
            <Link to="/" className="transition duration-300">
              Bosh sahifa
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/items" className="transition duration-300">
              Mahsulotlar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
