import Link from "next/link";
export default function home(){

return(
<div className="w-screen h-auto  md:p-24 bg-gradient-to-tr from-[rgb(245,244,253)] to-[rgb(245,241,252)] flex items-center justify-center">

<div className="w-11/12 mt-24 m-6 md:mt-0  md:w-2/4 self-center flex flex-col items-center justify-center  ">
    <div className="text-2xl md:text-6xl text-center">Announcing RetailReady&rsquo;s 
</div>
<div className=" text-2xl md:text-6xl text-center mb-12">$3.3M Seed Fundraising
</div>
<iframe className="w-[310px] md:w-[600px] h-[210px] md:h-[355px]"    src="https://www.youtube.com/embed/YZ4n45Ao_FQ?si=czCoguSeiuilIwtM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen="true"></iframe>
<p className="text-gray-500 mt-12 mb-6"><span className="text-black">San Francisco, Calif. </span> — RetailReady has closed $3.3M to streamline warehouse packaging via an intuitive tablet app. The seed round was led by  <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.wischoff.com/" target="_blank">Wischoff Ventures</Link> </span>, and supported by investors including <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.640oxford.com/" target="_blank">640 oxfords</Link> </span>, <span className="underline underline-offset-4 text-black/70"> <Link href="https://lombardstreet.vc/" target="_blank">Lombardstreet Ventures</Link> </span>, <span className="underline underline-offset-4 text-black/70"> <Link href="https://dukecapitalpartners.duke.edu/" target="_blank">Duke Capital Partners</Link> </span>, <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.ycombinator.com/companies/retailready" target="_blank"> Y Combinator</Link> </span>, <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.linkedin.com/in/mattpsilver/" target="_blank">Matt Silver</Link> </span>, <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.linkedin.com/in/jacobboudreau/" target="_blank">Jacob Boudreau</Link> </span>, and Scale Angel Fund.</p>
<p className="text-gray-500 mb-6">Co-founders <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.linkedin.com/in/ellesmyth/" target="_blank">Elle Smyth</Link> </span>and <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.linkedin.com/in/sarah-hamer/" target="_blank"> Sarah Hamer</Link> </span> discovered the problem while working together at supply chain unicorn startup <span className="underline underline-offset-4 text-black/70"> <Link href="https://www.stord.com/" target="_blank">Stord</Link> </span>. </p>
<p className="text-gray-500 mb-6">Today, warehouse workers shipping on behalf of major brands rely on complex and lengthy page paper manuals of packing instructions, which leads to frequent shipping errors. A typical brand pays more than 3% of its gross invoice revenue in fees incurred by non-compliant shipments (chargebacks), totaling more than $40B each year across US retailers. </p>
<p className="text-gray-500 mb-6">Meanwhile, retailer warehouse teams use printed routing guides to assess shipment compliance and manually record fines, doubling the labor required for 10-12% of all orders.</p>
<p className="text-gray-500 mb-6">RetailReady&rsquo;s application replaces lengthy paper manuals with an intuitive digital interface that ensures warehouse workers correctly label each package for shipment. The app also automates error recording for retailers and delivers crucial compliance data to brands. </p>
<p className="text-gray-500 mb-6">Within two months of launching, the company secured six customers. </p>
<p className="text-gray-500 mb-6">“RetailReady is bringing a much needed solution to a painful problem that impacts every product in retail stores and carries a financial burden for thousands of brands and 3pls. I am confident RetailReady will transform the $40B retail compliance industry.” - Jacob Boudreau, Co-Founder & CTO of Stord</p>
<p className="text-gray-500 mb-6">“RetailReady&rsquo;s application is a no-brainer for warehouse teams working with retailers with heavy compliance requirements. Supply chain compliance is complex enough given the lack of full-time labor and introduction of robotics in warehouses. RetailReady can arm both short-term labor managing these requirements and a future where robots own most of the package processing.” - Nichole Wischoff, Wischoff Ventures</p>
</div>
</div>


);


}