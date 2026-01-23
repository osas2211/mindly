"use client"
import { nav_routes } from "@/utils/routes"
import { usePathname } from "next/navigation"
import React from "react"
import { Avatar, IconButton, SearchInput } from "./ui"
import { BiBell } from "react-icons/bi"

export const PageHeader = () => {
  const parentPath = usePathname().split("/")[1]
  const route = [...nav_routes.main, ...nav_routes.sub].find(
    (nav_route) => nav_route.path === `/${parentPath}`,
  )

  return (
    <div className="mb-6 md:mb-10 flex items-center gap-4 justify-between">
      <h3 className="text-lg md:text-4xl font-semibold capitalize">
        {parentPath === "dashboard" ? (
          <span>Good Morning, Marie!</span>
        ) : (
          route?.name || parentPath
        )}
      </h3>
      <div className="gap-4 items-center md:flex hidden">
        <div className="w-82">
          <SearchInput className="w-full bg-white" />
        </div>
        <IconButton variant="outline" className="border-grey-400! border!">
          <BiBell />
        </IconButton>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
      </div>
    </div>
  )
}
