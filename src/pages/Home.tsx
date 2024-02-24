import { UserInfo } from "../App";

const Home = ({ userInfo }: { userInfo: UserInfo | null }) => {
  return (
    <div>
      {userInfo && (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>RoleL {userInfo.role}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
