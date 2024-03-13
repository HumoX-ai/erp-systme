import { ReactNode } from "react";
import { Sidebar } from "../components/ui/Sidebar/sidebar";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default PrivateLayout;
