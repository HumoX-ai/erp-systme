import PageLayout from "../../layout/private-layout";

import { Outlet } from "react-router-dom";
import { InitialRoute } from "../../utils/initialRoute";

const FilialPage = () => {
  return (
    <PageLayout header="Filiallar">
      <Outlet />
      <InitialRoute path="/filials/filial-table" />
    </PageLayout>
  );
};

export default FilialPage;
