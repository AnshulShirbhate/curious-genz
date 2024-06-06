import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='flex flex-col text-center items-center py-5 px-2 bg-lime-300 mt-auto'>
        <p>Copyright &#169; {date} <Link href="/"><span className='font-bold hover:text-white'>The Curious GenZ</span></Link> made with Curiosity🧐 by Anshul</p>
        <div className='flex flex-row space-x-5'>
          <Link className='flex flex-row hover:text-white' href="https://instagram.com/__anshul__shirbhate" target='blank'>Instagram</Link>
          <Link className='flex flex-row hover:text-white' href="https://www.linkedin.com/in/anshul-shirbhate-590394195/" target='blank'>LinkedIn</Link>
        </div>
    </footer>
  )
}

export default Footer