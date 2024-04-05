import React from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";
const Menue = [
  { title: "Home", link: "/" },
  { title: "About", link: "/class" },
  { title: "Courses", link: "/students" },
  { title: "Event", link: "/" },
  { title: "Contact", link: "/" },
];
const Navbar = () => {
  return (
    <div className="h-auto md:h-[154px] bg-primary w-full">
      <div className="flex flex-col-reverse md:flex-col"> 
        <div className="flex justify-between">
          <div className="w-[191px] h-[67px] ml-[119px] mt-[14px] bg-white rounded-lg text-center align-middle">
            Assessment{" "}
          </div>
         
          <div className="text-white">
            <ul className="uppercase list-none flex flex-col md:flex-row ">
              {Menue.map((menu, index) => (
                <li key={index} className=" m-4">
                  <Link
                    className=" p-2 rounded-sm hover:text-primary hover:bg-white"
                    href={menu.link}
                  >
                    {" "}
                    {menu.title}{" "}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
           <div className="mt-4 hidden md:flex">
          <button className="h-[42px] w-[42px] bg-[#222052] rounded-full text-center">
            <FaMagnifyingGlass className="text-white mx-auto" />{" "}
          </button>
          <button className="h-[42px] w-[48px] rounded-full mr-[150px] ml-9">
            <img
              className="h-9 w-9 rounded-full border-2 border-white"
              src="/teacher.avif"
              alt="teacher"
            />
          </button>
        </div>
        </div>
        
        <div> 
      <h1 className="text-center uppercase font-bold text-3xl text-secondary">
        {" "}
        Teachers Profile{" "}
      </h1>
     
      </div>
      </div>
    </div>
  );
};

export default Navbar;
