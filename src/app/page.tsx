import Batches from "@/components/Batches";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
        {/* <Navbar /> */}
        {/* <h1> Home Page  </h1> */}
        <Hero/>
        <Batches/>
   </>
  );
}
