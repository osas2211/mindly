import React from "react"

const InAppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-linear-to-r from-soft-periwinkle to-white min-h-screen">
      {children}
    </div>
  )
}

export default InAppLayout
