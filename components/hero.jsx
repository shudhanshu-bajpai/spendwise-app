"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[95px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.webp"
              width={1080}
              height={50}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";

// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import Header from "./header";

// const HeroSection = () => {
//   const imageRef = useRef();

//   useEffect(()=> {
//     const imageElement = imageRef.current; 

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if(scrollPosition > scrollThreshold){
//         imageElement.classList.add('scrolled');
//       }
//       else{
//         imageElement.classList.remove('scrolled');
//       }

//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   },[]);
 

//   return (<> 
//     <div className="pb-15 px-4">
//       <div className="container mx-auto text-center">
//         <h1 className="text-5xl md:text-8xl lg:text-[85px] pb-6 pt-5 bg-gradient-to-br from-green-400 to-blue-500 font-extrabold tracking-tighter pr-2 text-transparent bg-clip-text">
//           Manage Your Finances <br />
//           With Intelligence
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           An AI-powered finance management app that helps you to track your
//           expenses, income and savings.
//         </p>
//         <div className="pb-10">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8  cursor-pointer hover:scale-103 transform transition duration-300">
//               Get Started
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper">
//         <div className="hero-image" ref={imageRef}>
//           <Image
//             src="/banner.webp"
//             width={1100}
//             height={720}
//             alt="Dashboard preview"
//             className="rounded-lg shadow-2xl border mx-auto"
//             priority={true}
//           />
//         </div>
//         </div>
//       </div>
//     </div>
//   </>);
// };

// export default HeroSection;
