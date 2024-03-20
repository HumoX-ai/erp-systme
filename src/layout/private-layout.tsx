import { ReactNode } from "react";

import { NavbarComponent } from "../components";

const PageLayout = ({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <NavbarComponent header={header} />

      <div className="px-7">{children}</div>
    </div>
  );
};

export default PageLayout;
