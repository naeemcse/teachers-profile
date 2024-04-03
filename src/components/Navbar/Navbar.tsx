import React from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[154px] bg-primary w-full" > 
    <div className="flex justify-between">
      <div className="w-[191px] h-[67px] ml-[119px] mt-[14px] bg-white rounded-lg text-center align-middle">
                Assessment{" "}
      </div>
      <div className="text-white">
        <ul className="uppercase  list-none flex ">
          <li className=" m-4">
            <Link className=" p-2 rounded-sm hover:text-primary hover:bg-white" href={"/"}> Home </Link>{" "}
          </li>
          <li className=" m-4">
            
            <Link  className=" p-2 rounded-sm hover:text-primary hover:bg-white" href={"/"}> About </Link>{" "}
          </li>
          <li className=" m-4">
            
            <Link  className=" p-2 rounded-sm hover:text-primary hover:bg-white" href={"/"}> Courses </Link>{" "}
          </li>
          <li className=" m-4">
            
            <Link className=" p-2 rounded-sm hover:text-primary hover:bg-white" href={"/"}> Event </Link>{" "}
          </li>
          <li className=" m-4">
            
            <Link className=" p-2 rounded-sm hover:text-primary hover:bg-white" href={"/"}> Contact </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="flex mt-4">
        <button className="h-[42px] w-[42px] bg-[#222052] rounded-full text-center">
          <FaMagnifyingGlass className="text-white mx-auto" />{" "}
        </button>
        <button className="h-[42px] w-[48px] rounded-full mr-[150px] ml-9">
            <img className="h-9 w-9 rounded-full border-2 border-white" src="/teacher.avif" alt="teacher" />
        </button>
      </div>
    </div>
    <h1 className="text-center uppercase font-bold text-3xl text-secondary"> Teachers Profile </h1>

    </div>
  );
};

export default Navbar;
