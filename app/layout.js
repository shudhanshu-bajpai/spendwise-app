// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Welth",
//   description: "One stop Finance Platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <head>
//           <link rel="icon" href="/logo-sm.png" sizes="any" />
//         </head>
//         <body className={`${inter.className}`}>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Toaster richColors />

//           <footer className="bg-blue-50 py-12">
//             <div className="container mx-auto px-4 text-center text-gray-600">
//               <p>Made with 💗 by RoadsideCoder</p>
//             </div>
//           </footer>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";


const inter = Inter({
  subsets: ["latin"],
}); 

export const metadata = {
  title: "SpendWise",
  description: "Your's true Finance management app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer className="bg-gray-100 py-5">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p className="text-center text-[15px] font-semibold">
                Made with <a href="https://github.com/shudhanshu-bajpai/SpendWise" target="_blank"><span>&#128150;</span></a> by Shudhanshu Bajpai
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
      
  );
}
