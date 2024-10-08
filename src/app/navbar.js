"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null); // Track the active item

  const menuItems = [
    { name: "แนะนำตัวเอง", href: "about" },
    { name: "ผลงานด้านการแข่งขัน", href: "competition" },
    { name: "ผลงานด้านการทำงาน", href: "experience" },
    { name: "ประวัติการฝึกงาน", href: "experience" },
    { name: "ประวัติการศึกษา", href: "experience" },
  ];

  const handleItemClick = (index) => {
    setActiveItem(index); // Set the clicked item as active
  };

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

      <NavbarContent
        className="hidden sm:flex gap-4 prompt-bold"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`#${item.href}`}
              onClick={() => handleItemClick(index)} // Handle click event
              className={
                activeItem === index ? "text-yellow-500" : "text-white"
              } // Apply active style
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`w-full ${
                activeItem === index ? "text-yellow-500" : "text-white"
              }`} // Apply active style in mobile view
              href={`#${item.href}`}
              size="lg"
              onClick={() => handleItemClick(index)} // Handle click event
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
