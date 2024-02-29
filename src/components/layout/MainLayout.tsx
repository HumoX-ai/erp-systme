import Sidebar from "../ui/Sidebar/Sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
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
