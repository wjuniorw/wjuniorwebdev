'use client'

import './icons/ArrowAnimation.css'
import { BowArrowIcon } from './icons/BowArrowIcon'
import { useState, useEffect, MouseEventHandler } from 'react'

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

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop: MouseEventHandler<HTMLButtonElement> = event => {
    const paths = Array.from(
      (event.target as HTMLElement).querySelectorAll('.arrow')
    ) as SVGPathElement[]

    const bowString = (event.target as HTMLElement).querySelector('.bow-string')

    paths.forEach(it => {
      it.classList.add('animate')
    })

    if (bowString) {
      bowString.classList.add('animate')
    }

    setTimeout(() => {
      if (paths.length) {
        paths.forEach(it => {
          it.classList.remove('animate')
        })
        if (bowString) {
          bowString.classList.remove('animate')
        }
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 500)
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-4 right-4 bg-pataxo-earth text-white p-2 rounded-full shadow-lg hover:bg-pataxo-red transition-colors duration-300 rotate-45'
      aria-label='Voltar ao topo'>
      <BowArrowIcon className='w-6 h-6' />
    </button>
  )
}
