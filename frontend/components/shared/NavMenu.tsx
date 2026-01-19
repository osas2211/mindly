"use client"
import React, { useState } from "react"
import { nav_routes } from "@/utils/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"
import { BiLogOut } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"

export const NavMenu = () => {
  const pathname = usePathname()
  const [expand, setExpand] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleExpand = () => {
    setExpand(!expand)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="md:bg-cloud-white md:h-screen md:py-14 py-4 md:px-5 px-4 relative">
      {/* Desktop Menu */}
      <div
        className={`hidden md:flex flex-col transition-all duration-300 ease-in-out ${
          expand ? "w-[230px]" : "w-[54px]"
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            expand ? "gap-4" : "gap-0"
          } mb-10`}
        >
          <h4 className="text-2xl font-bold text-mindly-purple">
            {expand ? "Mindly." : "M."}
          </h4>
          <button
            className={`${
              expand ? "p-3 bg-soft-periwinkle" : "p-0 py-3"
            } rounded-xl cursor-pointer`}
            onClick={toggleExpand}
          >
            {expand ? (
              <CgChevronLeft size={26} />
            ) : (
              <CgChevronRight size={26} />
            )}
          </button>
        </div>
        <div className="flex flex-col gap-1">
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
                {expand && <span className="text-[15px]">{route.name}</span>}
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
                className={`flex items-center gap-2 rounded-xl hover:bg-soft-periwinkle/30 p-4 ${
                  isActive ? "bg-soft-periwinkle font-medium" : ""
                }`}
              >
                <div className="text-2xl!">{route.icon}</div>
                {expand && <span className="text-[15px]">{route.name}</span>}
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
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="p-3 bg-soft-periwinkle rounded-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <RxHamburgerMenu size={26} />
        </button>
        <div
          className={`absolute top-0 left-0 h-screen bg-cloud-white shadow-lg transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <h4 className="text-2xl font-bold text-mindly-purple">Mindly.</h4>
            <button
              className="p-3 bg-soft-periwinkle rounded-xl cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <CgChevronLeft size={26} />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4 w-[250px]">
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
                  <span className="text-[15px]">{route.name}</span>
                </Link>
              )
            })}
          </div>
          <div className="w-full h-[1px] bg-soft-periwinkle my-6" />
          <div className="flex flex-col gap-1 p-4">
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
                  <span className="text-[15px]">{route.name}</span>
                </Link>
              )
            })}
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <button className="text-red-500 p-3 rounded-xl cursor-pointer flex items-center gap-2">
              <BiLogOut size={24} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
