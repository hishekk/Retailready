'use client'
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "./AnimateDiv";
export default function Footer(){

    return(
    
       <div className="bg-white w-screen h-auto pt-24">
       
        <div className="flex flex-col ">
        <div className=" flex flex-row justify-between w-3/4 self-center  ">
      
        <div className="flex flex-col ">
           
            <Link href={"/"}>
              <AnimatedDiv>
            <span className="flex flex-row gap-2 md:gap-4 items-center"><Image src={"/favicon.jpeg"} alt="company logo" width={30} height={30}/>
             <span className="text-md">
                RETAILREADY</span>
            </span> 
            </AnimatedDiv>
            </Link>
            
        </div>
        
        <div className="flex flex-row gap-6 md:gap-12">
        <div className="flex flex-col">
            
           <AnimatedDiv>
            <div className="py-2 text-black">product</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <Link href={"https://cal.com/retail-ready"}
            target="_blank">
            <div className="text-black/40 py-1 hover:text-black/60">Book demo</div>
            </Link>
            </AnimatedDiv>
        </div>

        <div className="flex flex-col">
            
            <AnimatedDiv>
            <div className="py-2 text-black">company</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <Link href={"/About"}>
            <div className="text-black/40 py-1 hover:text-black/60">About</div>
            </Link>
            </AnimatedDiv>
            <AnimatedDiv>
            <Link href={"/blogs"}>
            <div className="text-black/40 py-1 hover:text-black/60 ">Blog</div>
            </Link>
            </AnimatedDiv>
            <AnimatedDiv>
            <Link href={"/working"}>
            <div className="text-black/40 py-1 hover:text-black/60 ">Privacy Policy</div>
            </Link>
            </AnimatedDiv>
            <AnimatedDiv>
            <Link href={"/working"}>
            <div className="text-black/40 mb-6 hover:text-black/60" >Terms of service</div>
            </Link>
            </AnimatedDiv>
        </div>
        </div>
        
        </div>
     
        <div className="w-3/4 h-[1px] bg-gray-300 self-center"></div>
        <div className="flex flex-row justify-between w-3/4 self-center py-6">

            <div className="text-black/40">
            Designed and Developed by Retailready
            </div>
            <div className="text-black/40">
            © 2024 Retailready Technologies, Inc. All rights reserved.
            </div>
        </div>
        </div>
        
        </div>
    );
    
    
    }