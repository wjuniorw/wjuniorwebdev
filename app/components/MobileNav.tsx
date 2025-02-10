import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='md:hidden'>
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
        <nav className='flex flex-col gap-4'>
          {navItems.map(item => (
            <Link key={item.name} href={item.href} className='block px-2 py-1 text-lg'>
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
