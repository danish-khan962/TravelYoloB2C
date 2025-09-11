'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface HeaderProps {
  className?: string;
}

interface MenuItem {
  readonly label: string;
  readonly href: string;
  readonly active?: boolean;
}

export function Header({ className = '' }: HeaderProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems: readonly MenuItem[] = [
    { label: 'Home', href: '/', active: pathname === '/' },
    { label: 'Destinations', href: '/destinations', active: pathname === '/destinations' },
    { label: 'Experiences', href: '/experiences', active: pathname === '/experiences' },
    { label: 'Trip Planner', href: '/trip-planner', active: pathname === '/trip-planner' },
    { label: 'Blog', href: '/blog', active: pathname === '/blog' },
    { label: 'Contact Us', href: '/contact', active: pathname === '/contact' }
  ] as const;

  return (
    <header className={`relative w-full bg-header-1 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6 gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/images/img_layer_7.svg"
                alt="TravelYollo Logo"
                width={260}
                height={42}
                className="w-[146px] h-[24px] sm:w-[200px] sm:h-[32px] md:w-[250px] md:h-[40px] lg:w-[250px] lg:h-[42px] xl:w-[292px] xl:h-[48px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden mdx:flex" aria-label="Main navigation">
            <div className="flex items-center justify-center gap-6 lg:gap-4 xl:gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-base lg:text-[17px] 2xl:text-[20px] 
                    font-host-grotesk font-normal 
                    leading-[22px] lg:leading-[27px] 
                    transition-all duration-200 ease-in-out
                    hover:scale-105 active:scale-95
                    rounded-sm px-2 py-1
                    ${item.active ? 'text-header-1' : 'text-global-5'}
                    hover:text-header-1
                  `}
                  aria-current={item.active ? 'page' : undefined}
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              ))}

              {/* Login Button */}
              <Link
                href="/"
                role="menuitem"
                className="
                  text-base lg:text-[17px] 2xl:text-[20px] 
                  font-host-grotesk font-normal 
                  leading-[22px] lg:leading-[27px] 
                  text-global-5
                  border border-global-5 
                  rounded-[18px]
                  px-4 py-1 lg:px-[30px] lg:py-[4px]
                  transition-all duration-200 ease-in-out
                  hover:bg-transparent hover:text-global-5 hover:scale-105
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-global-5 focus:ring-opacity-50
                  ml-2
                "
              >
                Login
              </Link>
            </div>
          </nav>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="flex mdx:hidden p-2 relative z-50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <svg
              className={`w-6 h-6 text-global-5 transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          id="mobile-menu"
          className={`${menuOpen ? 'block' : 'hidden'} mdx:hidden absolute top-full left-0 right-0 w-full bg-header-1 shadow-lg border-t border-global-5/10 z-40`}
          aria-label="Mobile navigation"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col items-start gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    w-full text-left text-base sm:text-lg 
                    font-host-grotesk font-normal 
                    leading-[22px] sm:leading-[24px] 
                    transition-all duration-200 ease-in-out
                    hover:scale-105 active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-header-text1 focus:ring-opacity-50
                    rounded-sm px-3 py-2
                    ${item.active ? 'text-header-1 bg-global-5/5' : 'text-global-5'}
                    hover:text-header-1 hover:bg-global-5/5
                  `}
                  aria-current={item.active ? 'page' : undefined}
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Login Button */}
              <Link
                href="/login"
                role="menuitem"
                className="
                  w-full text-center text-base sm:text-lg 
                  font-host-grotesk font-normal 
                  leading-[22px] sm:leading-[24px] 
                  text-global-5
                  border border-global-5 
                  rounded-[18px]
                  px-4 py-2 mt-2
                  transition-all duration-200 ease-in-out
                  hover:bg-global-5 hover:text-header-1 hover:scale-105
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-global-5 focus:ring-opacity-50
                "
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
