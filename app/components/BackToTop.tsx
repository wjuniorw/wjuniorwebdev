"use client"

import { useState, useEffect } from "react"
import { BowArrowIcon } from "./icons/BowArrowIcon"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-pataxo-earth text-white p-2 rounded-full shadow-lg hover:bg-pataxo-red transition-colors duration-300"
      aria-label="Voltar ao topo"
    >
      <BowArrowIcon className="w-6 h-6 transform rotate-45" />
    </button>
  )
}

