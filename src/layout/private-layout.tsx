import { ReactNode } from "react";

import { NavbarComponent } from "../components";

const PageLayout = ({
  header,
  children,
  // headerComponent,
}: {
  header: string;
  children: ReactNode;
  headerComponent?: ReactNode;
}) => {
  return (
    <div>
      <NavbarComponent header={header} />
      {/* <Navbar isBordered maxWidth="full" className="dark:bg-black">
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">{header}</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          {headerComponent}
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <User
              name={"User"}
              description={"User"}
              className="transition-transform"
              as="button"
              avatarProps={{
                src: "https://i.imgur.com/yhW6Yw1.jpg",
              }}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}

      <div className="px-4">{children}</div>
    </div>
  );
};

export default PageLayout;
