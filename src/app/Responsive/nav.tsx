import Link from 'next/link';
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaArrowUpRightDots } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
const Nav=()=>{
  return(
    
    <nav className='w-full h-20  flex items-center justify-between mx-auto shadow-md'>
        <div className='mx-8 font-bold text-3xl flex items-center gap-6'>
            <h1 className='text-yellow-500 text-4xl'><FaArrowUpRightDots/></h1>BUSINESS</div>
            
            <ul className='   uppercase hidden md:block '>
                <li className='flex items-center justify-center space-x-6 font-semibold'><Link  href={'/'}>Home</Link>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>Services</Link>
                <Link href={'/'}>Blog</Link>
              
                <Link href={'/'}>Contact us</Link></li>
            </ul>
            <button className='gap-10 mr-6  font-semibold bg-blue-800 w-24  rounded-md text-white hover:bg-blue-400 h-10 uppercase'>Started</button>
            
            <Sheet>
  <SheetTrigger className='md:hidden w-12 h-12'><IoIosMenu /></SheetTrigger>
  <SheetContent>
  <ul className='flex items-center justify-center space-x-8 font-semibold uppercase'>
  <li className='flex flex-col gap-8 font-bold text-2xl'><Link href={'/'}>About Us</Link>
                <Link href={'/'}>Services</Link>
                <Link href={'/'}>Blog</Link>
                
                <Link href={'/'}>Contact us</Link></li>
            </ul>
  </SheetContent>
</Sheet>
            </nav>
  )
}

export default Nav







