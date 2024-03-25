import { ReactNode } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../components";

const PageLayout = ({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <Navbar isBordered maxWidth="full" className="dark:bg-black">
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">{header}</p>
        </NavbarBrand>
        <NavbarContent justify="end">
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
      </Navbar>

      <div className="py-3.5 px-6">{children}</div>
    </div>
  );
};

export default PageLayout;
