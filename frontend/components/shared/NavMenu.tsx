"use client"
import React from "react"
import { nav_routes } from "@/utils/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgChevronLeft } from "react-icons/cg"
import { BiLogOut } from "react-icons/bi"

export const NavMenu = () => {
  const pathname = usePathname()
  return (
    <nav className="bg-cloud-white h-screen md:py-14 py-8 md:px-5 px-4 relative">
      <div className="flex items-center justify-between gap-4 mb-10">
        <h4 className="text-2xl font-bold text-mindly-purple">Mindly.</h4>
        <button className="bg-soft-periwinkle p-3 rounded-xl cursor-pointer">
          <CgChevronLeft size={26} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {nav_routes.main.map((route, index) => {
          const isActive = route.path === pathname
          return (
            <Link
              href={route.path}
              key={index}
              className={`flex items-center gap-2 w-[230px] rounded-xl hover:bg-soft-periwinkle/30 p-4 ${isActive ? "bg-soft-periwinkle font-medium" : ""}`}
            >
              <div className="text-xl">{route.icon}</div>
              <span className="text-[15px]">{route.name}</span>
            </Link>
          )
        })}
      </div>

      <div className="w-full h-[1px] bg-soft-periwinkle my-6" />
      <div className="flex flex-col gap-1">
        {nav_routes.sub.map((route, index) => {
          const isActive = route.path === pathname
          return (
            <Link
              href={route.path}
              key={index}
              className={`flex items-center gap-2 w-[230px] rounded-xl hover:bg-soft-periwinkle/30 p-4 ${isActive ? "bg-soft-periwinkle font-medium" : ""}`}
            >
              <div className="text-2xl!">{route.icon}</div>
              <span className="text-[15px]">{route.name}</span>
            </Link>
          )
        })}
      </div>

      <div className="absolute bottom-0 left-0 md:py-14 py-8 md:px-5 px-4">
        <button className="text-red-500 p-3 rounded-xl cursor-pointer flex items-center gap-2">
          <BiLogOut size={24} />
          <span>Log out</span>
        </button>
      </div>
    </nav>
  )
}
