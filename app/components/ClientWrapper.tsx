"use client"

import type React from "react" // Import React
import BackToTop from "./BackToTop"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  )
}

