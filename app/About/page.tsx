 'use client'
 import React from "react";
 import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "../components/AnimateDiv";
import { motion } from "framer-motion";
export default function Home(){


    return(

        <div className="w-screen h-auto py-32 md:py-60 bg-gradient-to-br from-purple-100 to-purple-150 flex flex-col items-center justify-center">
       
           <div className="flex flex-col md:flex-row w-11/12 md:w-8/12 items-center justify-center gap-12 md:gap-24 ">
        
            <Image src={"/Sarah.png"} alt="Sarah profile" width={300} height={300} className="rounded-full"/>
           
            <div className=" flex flex-col-reverse md:flex-col items-center md:items-start">
              <div> 
            <p className="text-gray-600/70 ">Sarah is a <span className="text-black"> Georgia Tech </span> graduate with a degree in Industrial Engineering who began her career at <span className="text-black"> Microsoft</span>. There, she gained valuable experience in how software solutions are built and brought to market. Her expertise grew in the field of supply chain management software, where as a Strategy Associate to the CTO at Stord, she met Elle. Together, they envisioned a new kind of company.</p>
             <p className="text-gray-600/70 mt-2 mb-4">At RetailReady, Sarah brings her passion for practical solutions to the forefront of the retail compliance space. Driven by a zeal for practical, innovative solutions, she is determined to address the industry's reliance on <span className="text-black"> outdated methods </span> like paper SOPs and spreadsheets. At the heart of RetailReady, Sarah&rsquo;s vision is to harness the <span className="text-black"> power of AI </span> to streamline compliance processes, eliminate the need for manual processes and extensive training, and introduce a new standard of efficiency and reliability.</p>
             </div> 
             <div className="flex flex-row items-center gap-2 h-14">
                  <div>
                    <div className="text-md">Sarah Hamer</div>
                    <div  className="text-gray-600/70 font-thin">Co-Founder</div>
                  </div>
                  <div className="w-[2px] h-14 bg-black">

                  </div>
                <Link href={"https://www.linkedin.com/in/sarah-hamer/"}
                target="_blank"
                >
                 <Image src={"/linked.svg"} width={30} height={30} alt="linkedin logo"/>
                 </Link>
             </div>
            </div>
           </div>
         
           <div className="w-11/12 md:w-8/12 h-[1px] bg-gray-300 self-center mt-24 md:mt-32 mb-24 md:mb-32"></div>

           <div className="flex flex-col md:flex-row w-11/12 md:w-8/12 items-center justify-center gap-12 md:gap-24">
            <Image src={"/elee.png"} alt="Sarah profile" width={300} height={300} className="rounded-full"/>
            <div className="flex flex-col-reverse md:flex-col items-center md:items-start">
           <div>
            <p className="text-gray-600/70 ">A distinguished <span className="text-black"> Duke Engineering </span> alumna, Elle&rsquo;s journey through the tech landscape is marked by a blend of corporate and startup dynamism. Her early tenure at BlackRock laid a robust foundation for her business and tech acumen, which further blossomed at Stord, a supply chain software startup. As a Product Leader, Elle propelled the company to <span className="text-black"> unicorn status</span>, driven by an eye for innovation and strategic growth.</p>
             <p className="text-gray-600/70 mt-2 mb-4">At the core of Elle&rsquo;s philosophy is <span className="text-black"> proactove problem-solving</span>. She observed the industry&rsquo;s tendency to handle compliance reactively and saw an opportunity for change. RetailReady represents a shift in this paradigm. The company pioneers an approach that focuses on proactive compliance, leveraging <span className="text-black"> guided workflows </span> to ensure brands, third-party logistics providers (3PLs), and retailers can track compliance efficiently and effectively.</p>
             </div>
             <div className="flex flex-row items-center gap-2 h-14">
                  <div>
                    <div className="text-md">Elle Smyth</div>
                    <div  className="text-gray-600/70 font-thin">Co-Founder</div>
                  </div>
                  <div className="w-[2px] h-14 bg-black">

                  </div>
                <Link href={"https://www.linkedin.com/in/ellesmyth/"}
                target="_blank">
                <Image src={"/linked.svg"} width={30} height={30} alt="linkedin logo"/>
                </Link>
             </div>
            </div>
           </div>
           <div className="w-11/12 md:w-8/12 h-[1px] bg-gray-300 self-center mt-24 md:mt-32 mb-24 md:mb-32"></div>

           <div className="flex flex-col md:flex-row w-11/12 md:w-8/12 items-center justify-center gap-12 md:gap-24 ">
            <Image src={"/jaden.png"} alt="Sarah profile" width={300} height={300} className="rounded-full"/>
            <div className="flex flex-col-reverse md:flex-col items-center md:items-start">
                <div>
            <p className="text-gray-600/70 ">Jaden, a Full-Stack Software Engineering Intern, is currently a student at Georgia Tech, specializing in AI and computational media. His programming skills and interest in entrepreneurship drove him to explore innovative tech solutions. Jaden actively leads tech-focused groups at Georgia Tech, demonstrating his ability to collaborate and innovate.</p>
             <p className="text-gray-600/70 mt-2 mb-4">Outside of his academic pursuits, Jaden enjoys mountain biking and jiu-jitsu, balancing his professional interests with physical activities. His combination of technical knowledge, leadership, and entrepreneurial spirit make him a valuable addition to our team.</p>
             </div>
             <div className="flex flex-row items-center gap-2 h-14">
                  <div>
                    <div>Jaden Hamer</div>
                    <div  className="text-gray-600/70 font-thin">Full-stack SWE</div>
                  </div>
                  <div className="w-[2px] h-14 bg-black">

                  </div>
                <Link href={"https://www.linkedin.com/in/jaden-hamer-b96226219/"}
                target="_blank">
                <Image src={"/linked.svg"} width={30} height={30} alt="linkedin logo"/>
                </Link>
             </div>
            </div>
           </div>
        
        </div>
    );


}