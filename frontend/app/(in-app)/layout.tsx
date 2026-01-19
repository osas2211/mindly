import { NavMenu } from "@/components/shared/NavMenu"
import React from "react"

const InAppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-linear-to-r from-soft-periwinkle to-cloud-white min-h-screen flex">
      <div className="">
        <NavMenu />
      </div>
      <div className="p-4 md:p-8">{children}</div>
    </div>
  )
}

export default InAppLayout
