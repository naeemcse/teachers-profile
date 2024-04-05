"use client";
import React from "react";
import { useState,useEffect  } from "react";
import { PiGraduationCap ,PiExam,PiSignOutFill} from "react-icons/pi";
import { TbKarate } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPersonFill,BsPersonVideo3,BsPersonRaisedHand } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const Menus=[
    {title : "Karate Course" , icon : <PiGraduationCap/>,link:"/students" },
    {title : "Online Karate Courses" , icon : <BsPersonVideo3 /> },
    {title : "Students" , icon : <SiGoogleclassroom /> },
    {title : "Attendence" , icon : <BsPersonRaisedHand /> },
    {title : " Exam and Grading  " , icon : <PiExam/> ,spacing:true },
    {title : " Notification " , icon : <MdNotificationsActive/> },
    {title : " My Profile " , icon :<BsPersonFill /> },
    {title : " Setting " , icon : <IoMdSettings /> },
    {title : " Sign Out " , icon : <PiSignOutFill className="rotate-180" /> },
]
const SideNav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      // Check if the screen width crosses the medium breakpoint
      if (window.innerWidth >= 768) { // Assuming 768px is the medium breakpoint
        setOpen(false); // Set isOpen to false
      } else {
        setOpen(true); // Set isOpen to true for smaller screen sizes
      
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div
       className={`bg-white h-screen pl-2 pt-8 rounded-3xl ${
        open ? "w-16" : "w-60"
      } relative duration-300 overflow-hidden `}
    >
     
      <div>
        <div
           className={`p-1 border-[5px] rounded-full w-[202px] h-[202px]  relative duration-300 
           ${
            open ? "scale-[0.2] -translate-x-1/2 translate-y-1/2 ml-4" : "scale-1"
          }`}
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
                <li key={index} className={`bg-white hover:text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary overflow-hidden  ${ menu.spacing ? "mb-4":"mb-1"  } `}>
                    <span className={`text-2xl block float-left`}> {menu.icon} </span>
                    <span className={`text-base flex-1 duration-200 ${open && "hidden"} `}>  {menu.title}  </span>
             </li>
            ))
        }
        </ul>
    </div>

    </div>
  );
};

export default SideNav;
