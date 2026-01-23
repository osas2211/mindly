import { NavMenu } from "@/components/shared/NavMenu"
import { PageHeader } from "@/components/shared/PageHeader"
import React from "react"

const InAppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-linear-to-r from-soft-periwinkle/70 to-cloud-white min-h-screen md:flex relative">
      <div className="">
        <NavMenu />
      </div>
      <div className="p-4 md:p-8 md:py-8 py-0 max-h-screen overflow-y-scroll w-full">
        <PageHeader />
        {children}
      </div>
    </div>
  )
}

export default InAppLayout
