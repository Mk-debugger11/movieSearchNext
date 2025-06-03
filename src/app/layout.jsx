"use client";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useRouter } from "next/router";
import { QueryClientProvider ,QueryClient } from "@tanstack/react-query";

export default function RootLayout({ children }) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </QueryClientProvider>
      </body>
    </html>
  );
}
