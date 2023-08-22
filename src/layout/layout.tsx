import Head from "next/head";
import { Inter } from "next/font/google";
import NavbarTop from "./nav/NavbarTop";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["vietnamese"] });

export default function Layout({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        
      </Head>
     
      <div className={inter.className}>{children}</div>
     
    </>
  );
}
