import { Spinner } from "@nextui-org/react";
import { UserInfo } from "../App";
import NavbarComponent from "../components/Navbar/Navbar";

const Home = ({
  userInfo,
  handleLogout,
}: {
  userInfo: UserInfo | null;
  handleLogout: () => void;
}) => {
  return (
    <div>
      {!userInfo ? (
        <Spinner className="h-screen flex items-center justify-center" />
      ) : (
        <>
          <NavbarComponent userInfo={userInfo} handleLogout={handleLogout} />
          {userInfo && (
            <div>
              <p>Email: {userInfo.email}</p>
              <p>RoleL {userInfo.role}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
