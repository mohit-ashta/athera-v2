"use client";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface HeaderProps {
  className?: React.ReactNode;
  floating?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  floating = true,
}) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find a therapist", path: "/therapy-list" },
    { name: "Story Wall", path: "/story-wall" },
    { name: "About us", path: "/about-us" },
  ];

  return (
    <>
      <header
        className={cn(
          "lg:py-10 pt-6 px-5 lg:px-0",
          {
            "absolute top-0 left-0 right-0": floating,
            "bg-primary-foreground": !floating,
          },
          className
        )}
      >
        <section className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Logo
              className={cn({
                "!fill-black": floating,
                "fill-white": !floating,
              })}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="lg:block hidden">
            <ul className="capitalize lg:flex gap-10 items-center">
              {navItems.map(({ name, path }) => (
                <li key={path} className="relative">
                  <Link
                    href={path || "#"}
                    className={`text-accent font-medium text-base ${
                      pathname === path ? "font-bold" : ""
                    }`}
                  >
                    {name}
                  </Link>
                  {pathname === path && (
                    <div className="h-0.5 bg-accent w-5 left-0 right-0 mx-auto mt-1 absolute"></div>
                  )}
                </li>
              ))}
              <li>
                <Button variant="default" size="default">
                  Log out
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant={"normal"}
            size={"normal"}
            className="px-4 lg:hidden"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </Button>
        </section>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-20",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center">
          <Logo className="fill-black" />
          <Button variant="ghost" size="icon" onClick={closeSidebar}>
            <X />
          </Button>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-col space-y-5 ">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <Link
                  href={path || "#"}
                  className={`block text-lg font-normal px-4 ${
                    pathname === path
                      ? "text-primary font-bold bg-[#F3F4F3] px-4 py-2"
                      : "text-secondary"
                  }`}
                  onClick={closeSidebar} // ✅ Close sidebar when clicking a link
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent z-10 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};
