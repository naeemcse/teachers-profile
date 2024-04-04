"use client";
import React from "react";
import { useState } from "react";
import { PiGraduationCap ,PiExam,PiSignOutFill} from "react-icons/pi";
import { TbKarate } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPersonFill,BsPersonVideo3,BsPersonRaisedHand } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const Menus=[
    {title : "Karate Course" , icon : <PiGraduationCap/> },
    {title : "Online Karate Courses" , icon : <BsPersonVideo3 /> },
    {title : "Students" , icon : <SiGoogleclassroom /> },
    {title : "Attendence" , icon : <BsPersonRaisedHand /> },

    {title : " Exam and Grading  " , icon : <PiExam/> },
    {title : " Notification " , icon : <MdNotificationsActive/> },
    {title : " My Profile " , icon :<BsPersonFill /> },
    {title : " Setting " , icon : <IoMdSettings /> },
    {title : " Sign Out " , icon : <PiSignOutFill className="rotate-180" /> },




]
const SideNav = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div
       className={`bg-white h-screen p-5 pt-8 ${
        open ? "w-16" : "w-60"
      } relative duration-300 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
         className={`w-8 h-8 bg-white text-primary absolute -right-3 top-9 rounded-full text-3xl border cursor-pointer ${
          open && "rotate-180"
        } `}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      </svg>
      <div  className="">
        {/* Logo here  */}{" "}
        <TbKarate
          className={`w-8 h-8 bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        
      </div>
      <div>
        <div
           className={`p-1 border-[5px] rounded-full w-[202px] h-[202px]  relative duration-300 ${
            open ? "scale-[0.2] -translate-x-1/2 translate-y-1/2 ml-4" : "scale-1"
          } `}
        >
          <div  className="border-[2px] rounded-full w-[190px] h-[190px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div  className="flex p-1 justify-center items-center w-[180px] h-[180px] rounded-full overflow-hidden ">
              <img
                 className={`border-1 mt-1 w-[179px] mx-auto h-[179px] p-1 rounded-full duration-300 `}
                src="/profile.avif"
                alt="karate"
              />
            </div>
          </div>
        </div>
        <div  className={`flex-inline`}> 
           <span className={`block text-2xl text-center font-bold duration-300 ${open && "hidden"}`}> Adil Rashid  </span> 
           <span className={` mt-2 block text-primary-foreground text-center duration-300 ${open && "hidden"}`}> Sr. Karate Teacher  </span> 


    </div>

    <ul className="pt-2">
        {
            Menus.map((menu,index) =>(
                <li key={index} className={` hover:text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary`} >
                    <span className={`text-2xl block float-left`}> {menu.icon} </span>
                    <span className={`text-base flex-1 duration-200 ${open && "hidden"}`}>  {menu.title}  </span>
             </li>
            ))
        }
        </ul>
    </div>

    </div>
  );
};

export default SideNav;
