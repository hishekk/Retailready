'use client'
import Link from "next/link";
import Image from "next/image";
import { px } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {

const [isopen,setOpen] = useState(false);
const [scrolled, setScrolled] = useState(true);
const pathname = usePathname();

 

   
  return (
    <div className={`  ${isopen ?  ' fixed inset-0 z-[998] w-screen h-screen bg-white' : ''}`}>
    <nav className={`z-[999] w-screen flex items-center justify-between py-4 sm:px-16 fixed  text-white ${scrolled ? 'bg-[rgb(245,244,252)]  border-b-[1px] border-gray-500/10 border-s-2 text-black' : 'bg-transparent'}`} >
      {/* Logo */}
      <Link href="/" passHref
        className="text-xl font-bold">
          <span className={`text-gray-300 text-md md:text-lg ml-4 md:ml-0 ${scrolled ? 'text-gray-900': 'font-thin'}`}>RETAIL</span>
          <span className={`text-gray-300 text-md  md:text-lg ${scrolled ? 'text-gray-700': ''}`}>READY</span>
        
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-4 ">
        <Link href="/" >
            <div className =  {`px-2 ${scrolled ? 'text-gray-800' : 'text-gray-200 '} ${pathname=== '/' ? 'underline underline-offset-4' : ''} `}>
                Home
            </div>
        </Link>
        <Link href="/About" passHref>
        <div className =  {`px-2 ${scrolled ? 'text-gray-800' : 'text-gray-200 '} ${pathname === '/About' ? 'underline underline-offset-4' : ''} `}>
                About
            </div>
        </Link>
        <Link href="/blogs" passHref>
        <div className =  {`px-2 ${scrolled ? 'text-gray-800' : 'text-gray-200 '} ${pathname === '/blogs' ? 'underline underline-offset-4' : ''} `}>
                Blog
            </div>
        </Link>
        <Link href="https://www.linkedin.com/company/retailreadyai/" passHref
        target="_blank"
          className="px-2">
            <Image 
            src={"/linked.svg"}
            width={20}
            height={20}
            
            alt="linkedin"
            />

        </Link>
      </div>
      <div className="md:hidden flex items-center justify-center mt-6 mr-6">
      <button
        className="relative w-8 h-4"
        onClick={()=>setOpen(!isopen)}
      >
        <div className={`relative w-8 h-4 transform transition-transform duration-300 ${isopen ? 'rotate-45' : 'rotate-0'}`}>
          <span
            className={`block absolute h-[1px] w-8 bg-black transform transition-transform duration-300 ease-in-out ${isopen ? 'rotate-90 translate-y-0' : '-translate-y-3'}`}
          ></span>
          <span
            className={`block absolute h-[1px] w-8 bg-black transform transition-opacity duration-300 ease-in-out ${isopen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block absolute h-[1px] w-8 bg-black transform transition-transform duration-300 ease-in-out ${isopen ? '-rotate-180 -translate-y-0' : 'translate-y-3'}`}
          ></span>
        </div>
      </button>
    </div>
     
    
    </nav>
    {isopen && <div className={`md:hidden fixed inset-0 z-[998] flex flex-col items-center justify-center w-screen h-screen transform ${isopen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <Link href="/" 
   
        className=   "text-2xl hover:scale-110 px-3 py-3 rounded transition-colors duration-300">
       <button onClick={()=>{setOpen(!isopen)}}>
         Home
       </button>

        </Link>
        <Link href="/About" passHref
           className="text-2xl hover:scale-110 px-3 py-3 rounded transition-colors duration-300">
          <button onClick={()=>{setOpen(!isopen)}}>
         About
       </button>
        </Link>
        <Link href="/blogs" passHref
           className="text-2xl hover:scale-110 px-3 py-3 rounded transition-colors duration-300">
        <button onClick={()=>{setOpen(!isopen)}}>
         Blog
       </button>
        </Link>
        <Link href="https://www.linkedin.com/company/retailreadyai/" passHref
        target="_blank"
          className="text-lg hover:scale-110 px-3 py-3 mt-6 rounded transition-colors duration-300">
            <Image 
            src={"/linked.svg"}
            width={30}
            height={30}
            alt="linkedin"
            />

        </Link>
    </div>}
    </div>
  );
}
