import { NavbarComponent } from "..";
import Views from "../../modules";
import MainLayout from "./MainLayout";

const PrivateLayout = () => {
  return (
    <MainLayout>
      <NavbarComponent />

      <div className="container">
        <Views />
      </div>
    </MainLayout>
  );
};

export default PrivateLayout;
