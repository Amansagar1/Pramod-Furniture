'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => pathname === href

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 p-4 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Switch */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={scrolled ? '/images/logo.png' : '/images/logo1.png'}
              alt="Pramod Furniture"
              width={170}
              height={110}
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-sky-800 text-white'
                    : scrolled
                    ? 'text-gray-800 hover:bg-sky-800 hover:text-white'
                    : 'text-white hover:bg-sky-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? 'bg-sky-800 hover:bg-sky-700 text-white'
                  : 'bg-white text-sky-800 hover:bg-sky-100'
              }`}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              } hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-sky-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-sky-700 text-white'
                      : 'text-sky-100 hover:bg-sky-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
