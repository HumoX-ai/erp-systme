import { ScrollShadow, Spinner } from "@nextui-org/react";

import { useEffect } from "react";
import { useAuthStore } from "../../store/auth";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Asosiy sahifa";
  }, []);

  const { user: userInfo } = useAuthStore();

  return (
    <ScrollShadow className="p-6 w-auto h-[90vh]" visibility="bottom">
      {!userInfo ? (
        <Spinner className="h-[90vh] flex items-center justify-center" />
      ) : (
        <>
          {userInfo && (
            <div>
              <p>Email: {userInfo.email}</p>
              <p>Name: {userInfo.name}</p>
              <p>Role: {userInfo.role}</p>
            </div>
          )}
        </>
      )}
    </ScrollShadow>
  );
};

export default Dashboard;
