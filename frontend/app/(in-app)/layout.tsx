import { NavMenu } from "@/components/shared/NavMenu"
import React from "react"

const InAppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-linear-to-r from-soft-periwinkle to-white min-h-screen flex gap-5 md:gap-10">
      <div className="">
        <NavMenu />
      </div>
      <div className="">{children}</div>
    </div>
  )
}

export default InAppLayout
