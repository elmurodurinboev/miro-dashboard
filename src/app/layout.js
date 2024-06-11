import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Miro Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className={"flex flex-col min-h-screen gap-6"}>
      <Header/>
      <div className={"flex-grow container"}>
        {children}
      </div>
    </div>
    </body>
    </html>
  );
}
