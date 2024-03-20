import { Sidebar } from "../components";
import Views from "../modules";

const MainLayout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full bg-[#F5F7FA] dark:bg-[#12151b]">
        <Views />
      </div>
    </div>
  );
};

export default MainLayout;
