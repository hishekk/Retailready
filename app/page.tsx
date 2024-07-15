'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedDiv from "./components/AnimateDiv";

export default function Home() {
  return (
    <>
    <section className="relative w-screen h-screen md:h-[calc(100vh-60px)] flex items-center justify-center">
      {/* Background Color Overlay */}
      <div className="absolute inset-0 z-[-1] bg-[rgba(15,21,37,0.7)]"></div>

      {/* Image */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="/retail.jpg"
          alt="Retail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 gap-y-4">
      <motion.div  initial={{ opacity: 0, x: -20 ,y:-10}}
          animate={{ opacity: 1, x: 0 ,y:0}}
          transition={{ duration: 0.5 }}>
      <span className="text-white font-semibold text-5xl md:text-7xl">Retail </span>
      <span className="text-yellow-400 font-semibold text-5xl md:text-7xl ">Compliance</span>
        
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, y:20}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      className="mb-24"
      >
      <span className="text-white font-semibold text-5xl md:text-7xl">Starts  </span>
      <span className="text-white font-semibold text-5xl md:text-7xl  ">here</span>
        
      </motion.div>
          
      
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      >
       <button className="px-6 py-2 bg-[rgb(245,244,252)] text-black font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 backdrop-blur">
       <Link href={"https://cal.com/retail-ready"}
       target="_blank"
       >
        Book a Demo
        </Link>
      </button>
      </motion.div>
      </div>

    </section>
    <section className="flex flex-col items-center justify-center py-24 w-screen h-auto border-b-[1px] border-gray-500/10 bg-gradient-to-tr from-[rgb(245,244,253)] to-[rgb(245,241,252)]">
    <AnimatedDiv>
        <div className="font-semibold text-black/80 text-3xl md:text-7xl">Our mobile app is so easy, you’ll never </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="font-semibold text-black/80 text-3xl md:text-7xl mb-12 md:mb-24 ">need to train again. </div>
       </AnimatedDiv>
        <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl "> 
       Directed workflows that take the guess-
       </div>
       </AnimatedDiv>
       <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl "> 
       work out of retail compliance
       </div>
       </AnimatedDiv>
       <motion.div
       initial={{ opacity: 0, y: 200 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5}}
       viewport={{ once: true }}
       >
        <Image src={"/mobilev.png"} width={1000} height={1000} alt="mobile view"/>
       </motion.div>
       <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl "> 
       Eliminate Paper SOPs and Spreadsheet 
       </div>
       </AnimatedDiv>
       <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl "> 
       Tracking
       </div>
       </AnimatedDiv>
       <div className="mb-24 p-6">
        <Image src={"/stat.gif"} alt="stat" width={1060} height={220}  />
       </div>
       <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl "> 
       Visual repository to hold your team 
       </div>
       </AnimatedDiv>
       <AnimatedDiv>
       <div className="text-black/80 font-thin text-2xl mb-6 "> 
       accountable
       </div>
       </AnimatedDiv>
       <div className="mb-24 p-6">
        <Image src={"/stat2.gif"} alt="stat" width={1060} height={220} />
       </div>
       <div className="relative mb-48 p-24 w-11/12 h-auto flex flex-col items-center justify-start">
       
       <div className="">
        <Image src={"/retail1.png"} alt="stat" layout="fill" objectFit="cover" />
        </div>
      
        <div className="text-black/80 font-semibold text-5xl md:text-8xl mb-12 z-10">A Unified Approach</div>
       
       
        <div className="text-black/80 text-2xl md:text-3xl font-thin mb-24 z-10">
        Solutions for every stakeholder
        </div>
        
        <div className="flex flex-col mb-30 w-screen px-24 md:flex-row items-center gap-4 justify-between">
        <AnimatedDiv>
        <div className="max-w-72 h-120 bg-[rgb(245,244,253,.7)] backdrop-blur-lg  rounded-lg overflow-hidden hover:scale-105">
         <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-900/70 mb-2">Brands</div>
        <p className="text-gray-700/70 text-base">
        Gain a window into your operations, mitigating chargebacks at the source with a visual repository of each order.
        </p>
       </div>
        </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="max-w-72 h-120 bg-[rgb(245,244,253,.7)] backdrop-blur-lg rounded-lg overflow-hidden hover:scale-105">
         <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-900/70 mb-2">Retailers</div>
        <p className="text-gray-700/70 text-base">
        Automatically detect and record shipping compliance errors from your suppliers, eliminating printed SOPs and manual spreadsheet tracking.         </p>
       </div>
        </div>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className="max-w-72 h-120 bg-[rgb(245,244,253,.7)] backdrop-blur-lg rounded-lg overflow-hidden hover:scale-105">
         <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-900/70 mb-2">3PLs</div>
        <p className="text-gray-700/70 text-base">
        Guide operations through step-by-step packing instructions, all with zero training time or integrations required.

</p>
       </div>
        </div>
        </AnimatedDiv>
       </div>
       

       </div>

    </section>
    </>
    
  );
}
