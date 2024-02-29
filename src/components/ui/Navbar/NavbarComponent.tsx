import { useState } from "react";
import { Link as LinkTo, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  User,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../ThemeSwitch/ThemeSwitcher";
import { useAuthStore } from "../../../store/auth";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { onSignOutSuccess, user } = useAuthStore();

  const menuItems = [
    {
      label: "Bosh sahifa",
      to: "/dashboard",
    },
    {
      label: "Mahsulotlar",
      to: "/products",
    },
    {
      label: "Profil",
      to: "/profil",
    },
    {
      label: "Chiqish",
      to: "/login",
      onClick: onSignOutSuccess,
    },
  ];

  const navigate = useNavigate();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <LinkTo to={"/"}>
            <p className="font-bold text-inherit">ERP</p>
          </LinkTo>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <LinkTo to={"/"}>
            <p className="font-bold text-inherit">Bosh sahifa</p>
          </LinkTo>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden sm:flex">
          <ThemeSwitcher />
        </div>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <User
                name={user?.name || "User"}
                description={user?.role || "User"}
                className="transition-transform"
                as="button"
                avatarProps={{
                  src: user?.avatar,
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => onSignOutSuccess()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => navigate(item.to)}
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <ThemeSwitcher />
      </NavbarMenu>
    </Navbar>
  );
};
export default NavbarComponent;
