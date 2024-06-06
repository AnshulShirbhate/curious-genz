import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCrosshair } from "react-icons/bs";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Curious GenZ</title>
      </Head>
      <header>
        <nav className="py-5 bg-lime-300">
          <div className="container mx-auto flex items-center justify-between md:px-0 px-5">
            <div className="text-2xl font-bold font-serif md:justify-center flex md:flex-1">
              <Link href="/">The Curious GenZ</Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {isOpen?<BsCrosshair /> :<GiHamburgerMenu />}
              </button>
            </div>
            <div className={`md:justify-center md:flex md:flex-1 space-x-7 font-bold ${isOpen ? 'block' : 'hidden'} md:block`}>
              <Link href="/" onClick={toggleMenu} passHref>
                <span className="block mt-4 md:inline-block md:mt-0 hover:text-white cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about" onClick={toggleMenu} passHref>
                <span className="block mt-4 md:inline-block md:mt-0 hover:text-white cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/posts" onClick={toggleMenu} passHref>
                <span className="block mt-4 md:inline-block md:mt-0 hover:text-white cursor-pointer">
                  Blogs
                </span>
              </Link>
              <Link href="/contact" onClick={toggleMenu} passHref>
                <span className="block mt-4 md:inline-block md:mt-0 hover:text-white cursor-pointer">
                  Contact Me
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header



