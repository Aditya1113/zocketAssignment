import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";
import { SearchIcon } from "../../assets/SearchIcon";
import {
  BellIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Crown from "../../assets/Crown.png";

const MyNavbar = () => {
  return (
    <Navbar isBordered position="static" className="justify-end">
      <NavbarContent as="div" className="items-center" justify="end">
        <span className="text-xs text-slate-500">
          Free trial ends in 2 days
        </span>
        <Button
          color="warning"
          variant="flat"
          startContent={<Image width={25} height={25} src={Crown} />}
        >
          Buy Plan
        </Button>
        <BuildingStorefrontIcon className="w-6 h-6" />
        <BellIcon className="w-6 h-6" />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex flex-row justify-center items-center cursor-pointer">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <span className="pl-2">Mukund cake shop</span>
              <ChevronDownIcon className="w-3 h-3" />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <LanguageIcon className="w-6 h-6" />
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
