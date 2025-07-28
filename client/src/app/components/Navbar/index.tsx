"use client";

import React from "react";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* right side */}
      <div className="flex justify-between items-center gap-5 ">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500 " size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500 " size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-gray-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-1 border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="https://s3-mikestock.s3.us-west-1.amazonaws.com/profile.png"
              alt="profile photo"
              width={50}
              height={50}
              className="h-full object-cover rounded-full"
            />

            <span className="font-semibold">Mike Joo</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500 " size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
