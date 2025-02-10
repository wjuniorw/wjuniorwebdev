'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MobileNav } from './MobileNav'
import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  // { name: 'Artigos', href: '/articles' },
  { name: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className='mr-3'>
                  <Image
                    src='/profile.jpg?height=40&width=40'
                    alt='Wilson Junior'
                    width={40}
                    height={40}
                    className='rounded-full border-2 border-pataxo-earth'
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Link href='#home' className='text-xl font-bold'>
              Wilson Junior
            </Link>
          </div>
          <div className='hidden md:flex space-x-4'>
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-200 hover:text-white transition-colors'>
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  )
}
