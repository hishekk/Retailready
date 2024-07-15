import Image from "next/image";
import Link from "next/link";
export default function home(){

    return(

  <div className=" w-screen h-screen flex flex-col items-center justify-center  bg-gradient-to-tr from-[rgb(245,244,253)] to-[rgb(245,241,252)]">

 <Link href="/blogs/blog"
   className="w-11/12 md:w-3/4 p-6 m-6 mt-24 md:mt-0 md:p-12 h-full md:h-1/2 bg-white self-center rounded-lg hover:border-[1px] hover:border-gray/80 hover:bg-white/60 "
 >
        
        <div className=" flex flex-col  md:flex-row w-full h-full overflow-hidden  md:gap-12" >
        <div className=" relative w-full md:w-1/2  h-1/2 md:h-full">
        <Image src={"/blog.png"} alt="blog" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[1px] bg-gray-300 h-fuull"></div>
        <div className="flex flex-col w:full md:w-1/2 h-1/2 md:h-full  gap-6">
        <div className="text-gray-400">12 june, 2024</div>
        <div className="text-3xl md:text-5xl">
        Announcing RetailReady’s $3.3M Seed Fundraising
        </div>
        <p className="text-gray-500">RetailReady has closed $3.3M to streamline warehouse packaging via an intuitive tablet app. The seed round was led by Wischoff Ventures, and supported by investors including 640 Oxford, Lombardstreet Ventures, Duke Capital Partners, Y Combinator, Matt Silver, Jacob Boudreau, and Scale Angel Fund.</p>
        </div>
       </div>
       
    
    </Link>
  </div>


    );
}