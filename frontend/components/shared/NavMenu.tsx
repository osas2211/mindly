"use client"
import React, { useState } from "react"
import { nav_routes } from "@/utils/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"
import { BiLogOut } from "react-icons/bi"

export const NavMenu = () => {
  const pathname = usePathname()
  const [expand, setExpand] = useState(true)
  const toggleExpand = () => {
    setExpand(!expand)
  }
  return (
    <nav className="bg-cloud-white h-screen md:py-14 py-8 md:px-5 px-4 relative transition-all duration-500 ease-in-out">
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          expand ? "gap-4" : "gap-0"
        } mb-10`}
      >
        <h4 className="text-2xl font-bold text-mindly-purple transition-all duration-500 ease-in-out">
          {expand ? "Mindly." : "M."}
        </h4>
        <button
          className={`hidden md:block ${
            expand ? "p-3 bg-soft-periwinkle" : "p-0 py-3"
          } rounded-xl cursor-pointer`}
          onClick={toggleExpand}
        >
          {expand ? <CgChevronLeft size={26} /> : <CgChevronRight size={26} />}
        </button>
      </div>
      <div
        className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${
          expand ? "w-[230px]" : "w-[54px]"
        }`}
      >
        {nav_routes.main.map((route, index) => {
          const isActive = route.path === pathname
          return (
            <Link
              href={route.path}
              key={index}
              className={`flex items-center gap-2 rounded-xl hover:bg-soft-periwinkle/30 p-4 ${
                isActive ? "bg-soft-periwinkle font-medium" : ""
              }`}
            >
              <div className="text-xl">{route.icon}</div>
              {expand && (
                <span className="text-[15px] transition-all duration-500 ease-in-out">
                  {route.name}
                </span>
              )}
            </Link>
          )
        })}
      </div>

      <div className="w-full h-[1px] bg-soft-periwinkle my-6" />
      <div
        className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${
          expand ? "w-[230px]" : "w-[54px]"
        }`}
      >
        {nav_routes.sub.map((route, index) => {
          const isActive = route.path === pathname
          return (
            <Link
              href={route.path}
              key={index}
              className={`flex items-center gap-2 rounded-xl hover:bg-soft-periwinkle/30 p-4 ${
                isActive ? "bg-soft-periwinkle font-medium" : ""
              }`}
            >
              <div className="text-2xl!">{route.icon}</div>
              {expand && (
                <span className="text-[15px] transition-all duration-500 ease-in-out">
                  {route.name}
                </span>
              )}
            </Link>
          )
        })}
      </div>

      <div className="absolute bottom-0 left-0 md:py-14 py-8 md:px-5 px-4">
        <button className="text-red-500 p-3 rounded-xl cursor-pointer flex items-center gap-2">
          <BiLogOut size={24} />
          {expand && <span>Log out</span>}
        </button>
      </div>
    </nav>
  )
}
