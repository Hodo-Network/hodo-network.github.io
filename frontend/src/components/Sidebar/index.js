import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { navigation } from "../../constants/navigation";
import { Footer } from "../index";

export default function Sidebar({ miniSidebar, toggle }) {
  // TODO: remove later. hidden for onboarding
  const match = useRouteMatch({
    path: "/",
    exact: true,
  });

  if (match) {
    return null;
  }

  return (
    <div
      className={`hidden md:flex flex-col border-r border-gray-800 bg-gray-800 dark:bg-gray-900 ${
        miniSidebar ? "w-20" : "w-80"
      }`}>
      <div className='h-16'>
        <div
          className={`flex items-center h-full p-3 ${
            miniSidebar && "justify-center"
          }`}>
          <button
            className='text-gray-200 rounded-md px-4 py-3 focus:outline-none'
            onClick={toggle}>
            <MenuAlt2Icon className='w-6 h-6' />
          </button>
          <span
            className={`-ml-1 font-bold text-xl text-white ${
              miniSidebar && "sr-only"
            }`}>
            Hodo Network
          </span>
        </div>
      </div>

      <nav aria-label='Sidebar' className='flex-1 space-y-2 px-3 py-2 sm:py-4'>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            exact={item.exact}
            className='text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-800 flex items-center rounded-md px-4 py-3'
            activeClassName='bg-gray-900 dark:bg-gray-800 text-white'>
            <item.icon className='h-6 w-6' aria-hidden='true' />
            <span className={miniSidebar ? "sr-only" : "ml-3"}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {!miniSidebar && <Footer />}
    </div>
  );
}