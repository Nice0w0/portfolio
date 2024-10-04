'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name : "ผลงานด้านการแข่งขัน" , href : "competition"},
    {name : "ผลงานด้านการทำงาน" , href : "experience"},
    {name : "ประวัติการฝึกงาน" , href : "experience"},
    {name : "ประวัติการศึกษา" , href : "experience"},
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Apichart</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 prompt-bold" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#competition">
            ผลงานด้านการแข่งขัน
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#experience" aria-current="page">
            ผลงานด้านการทำงาน
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#internship">
            ประวัติการฝึกงาน
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#education">
            ประวัติการศึกษา
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`#${item.href}`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
