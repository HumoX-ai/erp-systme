import { ScrollShadow } from "@nextui-org/react";

import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Asosiy sahifa";
  }, []);


  return (
    <ScrollShadow className="p-6 w-auto h-[90vh]" visibility="bottom">
      salom
      {/* {!userInfo ? (
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
      )} */}
    </ScrollShadow>
  );
};

export default Dashboard;
