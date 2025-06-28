// "use client";

// import React from 'react'
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs'
// import { LayoutDashboard, LayoutDashboardIcon, PenBox} from 'lucide-react'
// import Link from 'next/link'
// import {Button} from "./ui/button"
// import Image from 'next/image';
// // import {checkUser} from '@/lib/checkUser'

// // import ThemeToggle from './darkBtn'

// const Navbar = () => {
//   // await checkUser(); 
//   return (
//     <div className='p-3 flex border-b-2 top-0 left-0 w-full bg-white shadow-sm z-50'>
//       <div>
//         {/* <h1 className='text-black text-2xl font-semibold'>Spend<span className='text-blue-300'>Wise</span></h1> */}
//         <Link href="/">
//         <Image src="/logo.png" height={250} width={250} alt="SpendWise Logo"/>
//         </Link>
//       </div>
//       <div className='flex justify-end w-full ml-'>
        
//       </div>
//       <div className='flex w-1/2 pr-4 space-x-5 justify-end pt-1'>
//         <SignedOut>
//           <SignInButton forceRedirectUrl="/dashboard" className="cursor-pointer text-white px-3 py-1  bg-blue-400 rounded-sm flex justify-end"/>
//         </SignedOut>
//         <SignedIn>
//           <Link href={"/dashboard"} className='flex '>
//           <Button className="bg-blue-100 text-black hover:bg-blue-50 cursor-pointer">
//             <LayoutDashboard size={18}/>
//               <span className='hidden md:inline'>Dashboard</span>
//             </Button>
//           </Link>
//           <Link href={`/transaction/create`} className='flex'>
//             <Button className="bg-blue-100 hover:bg-blue-50 text-black cursor-pointer">
//               <PenBox/>
//               <span className='hidden md:inline'>Add Transaction</span>
//             </Button>
//           </Link>
//           <div className=''>
//           <UserButton appearance={{
//             elements:{
//               avatarBox: "w-5 h-5"
//             }
//           }}/>
//           </div>
//         </SignedIn>
//         </div>
//     </div>
//   )
// }

// export default Navbar