import React from "react";
import './Sidebar.css'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";

import Logo from "../../assets/Logo.png";
import Home from "../../assets/Frame 6.png";
import Sound from "../../assets/Frame 7.png";
import Products from "../../assets/Frame 9.png";
import Customers from "../../assets/Frame 8.png";

export default function Sidebar() {
  return (
    <div className="fixed w-20 z-50 flex flex-col h-screen sidebar">
      <div className="flex justify-center items-center logo">
        <Avatar src={Logo} />
      </div>
      <div className="flex flex-col flex-wrap sidebar-content">
        <div className="flex flex-col justify-center items-center align-middle w-full h-16">
          <Image src={Home} />
          <span className="text-xs text-white">Home</span>
        </div>
        <div
          className="flex flex-col justify-center items-center align-middle w-full h-16 border-l-4"
          style={{
            borderColor: "#0070F0",
          }}
        >
          <Image src={Sound} />
          <span className="text-xs text-white">Campaign</span>
        </div>
        <div className="flex flex-col justify-center items-center align-middle w-full h-16">
          <Image src={Products} />
          <span className="text-xs text-white">Proucts</span>
        </div>
        <div className="flex flex-col justify-center items-center align-middle w-full h-16">
          <Image src={Customers} />
          <span className="text-xs text-white">Customers</span>
        </div>
      </div>
    </div>
  );
}
