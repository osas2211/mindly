import { ReactNode } from "react"
import { RxDashboard } from "react-icons/rx"
import { MdSupportAgent, MdOutlineVideoCall } from "react-icons/md"
import { TbUsersGroup } from "react-icons/tb"
import { SlCalender } from "react-icons/sl"
import { BsJournal } from "react-icons/bs"
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import { CiSettings } from "react-icons/ci"

export type nav_routeT = {
  name: string
  path: `/${string}`
  icon: ReactNode
  disabled?: boolean
}

export const nav_routes: { main: nav_routeT[]; sub: nav_routeT[] } = {
  main: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <RxDashboard />,
    },
    {
      name: "My Session",
      path: "/sessions",
      icon: <MdOutlineVideoCall />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <TbUsersGroup />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <SlCalender />,
    },
    {
      name: "Journal",
      path: "/journal",
      icon: <BsJournal />,
    },
  ],
  sub: [
    {
      name: "Chat",
      path: "/chat",
      icon: <IoChatboxEllipsesOutline />,
    },
    {
      name: "Support",
      path: "/support",
      icon: <MdSupportAgent />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <CiSettings />,
    },
  ],
}
