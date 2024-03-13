import { NavbarComponent } from "../components";
import Views from "../modules";
import MainLayout from "./main-layout";

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
