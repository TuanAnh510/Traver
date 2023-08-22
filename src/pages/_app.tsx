import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/layout/nav/Navbar";
import NavbarTop from "@/layout/nav/NavbarTop";
import Footer from "@/layout/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NavbarTop />
      <Navbar />
      <Component {...pageProps} />
      <div className="mt-20">
        <Footer />
      </div>
    </NextUIProvider>
  );
}
