"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import GithubIcon from '../../../public/images/github-icon.svg';
import LinkedinIcon from '../../../public/images/linkedin-icon.svg';
import EmailIcon from '../../../public/images/mail-icon.svg';

//Data for the navigation links
const navLinks = [
  { 
    title: 'About Me', 
    path: '#about-me'
},
  { 
      title: 'My Work', 
      path: '#my-work'
  },
]

//The NavBar component
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353e] border-t-transparent border-r-transparent border-l-transparent top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <Link
              href={"/"}
              className="text-2xl md:text-xl text-white font-semibold"
            >
              Aleyna Uzuncam
            </Link>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/UzuncamAleyna">
            <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/aleyna-uzuncam-688369222/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10" />
          </Link>
          <Link href="mailto:aleyna-uzuncam@hotmail.be">
            <Image src={EmailIcon} alt="Email Icon" className="w-10 h-10" />
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar;
