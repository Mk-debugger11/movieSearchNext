"use client";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useRouter } from "next/router";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
