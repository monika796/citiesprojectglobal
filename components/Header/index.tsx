'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ThemeToggler from './ThemeToggler';
import menuData from './menuData';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();
  const isHomePage = pathUrl === '/';

  // Sticky menu functionality
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
    return () => window.removeEventListener('scroll', handleStickyMenu);
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        stickyMenu ? 'backdrop-blur-xl text-white shadow bg-black/50 ' : ''
      } ${isHomePage ? 'mt-6' : 'mt-0'}`}
    >
      <div
        className={`relative container mx-auto flex items-center justify-between ${
          isHomePage || (stickyMenu && isDesktop)
            ? 'border-white border-t border-b'
            : 'border-black border-t border-b'
        } px-4 md:px-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between py-3">
          <Link href="/" onClick={() => setNavigationOpen(false)}>
            <Image
              src={isHomePage || stickyMenu ? '/1 1.png' : '/logo.png'}
              alt="logo"
              width={80}
              height={46}
              className="m-1.5 md:m-0"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            aria-label="Toggle Navigation"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative h-5 w-5 flex flex-col justify-center space-y-1">
              <span
                className={`h-0.5 w-full bg-black dark:bg-white transition-transform ${
                  navigationOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 bg-black dark:bg-white transition-opacity ${
                  navigationOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-black dark:bg-white transition-transform ${
                  navigationOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`h-full min-h-[70px] inset-x-0 space-y-5 rounded-md shadow-lg p-5 transition-all ${
            navigationOpen ? 'block' : 'hidden'
          } xl:static xl:flex xl:space-y-0 xl:space-x-10 xl:p-0 xl:shadow-none`}
        >
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center">
            {menuData.map((menuItem, key) => (
              <li
                key={key}
                className={`relative flex items-center gap-2 h-full border-b-4 border-transparent hover:border-green-500 ${
                  pathUrl === menuItem.path ? 'border-b-4 border-green-500' : ''
                }`}
              >
                {menuItem.submenu ? (
                  <>
                    <button
                      onClick={() => setDropdownToggler(!dropdownToggler)}
                      className="flex items-center gap-2 hover:text-green-500 text-white"
                    >
                      {menuItem.title}
                      <svg
                        className="h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 flex flex-col space-y-2 bg-white p-3 rounded-md shadow-md ${
                        dropdownToggler ? 'block' : 'hidden'
                      }`}
                    >
                      {menuItem.submenu.map((subItem, key) => (
                        <li key={key}>
                          <Link href={subItem.path || '#'}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={menuItem.path || '#'}
                    className="text-white hover:border-b-3 h-full flex items-center hover:text-green-500"
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/book"
            className={`px-4 py-2 rounded-lg border ${
              isHomePage || stickyMenu
                ? 'border-white text-white'
                : 'border-black'
            }`}
          >
            Book
          </Link>
          <Link
            href="/donation"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
