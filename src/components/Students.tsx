import React from "react";
import Paggination from "@/components/Paggination";
import CourseTable from "@/components/CourseTable";
import { Input } from "@/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuSettings2 } from "react-icons/lu";
import SelectOption from "@/components/SelectOption";
import ClassPlacement from "@/components/ClassPlacement";
import StudentsTable from "@/components/StudentsTable"

const Students = () => {
  return (
    <>
      <div className="bg-[#FEFEFE] border-2 rounded-lg mt-2 mx-2 p-4 shadow-md ">
        {/* Search and Filter option  */}
        <div className="md:flex justify-between mx-20">
          <h1 className="uppercase text-base text-[#565656] font-bold ">
            {" "}
            SHITO-RYU KARATE White Belt{" "}
          </h1>
          <div className="md:flex mx-auto">
            <div className="w-[284px] h-[36px] p-2 flex md:mr-6 border-md  rounded-full border-2 ">
              <Input
                type="text"
                className=" border-none inline p-1 h-5"
                placeholder="Search anything here.."
              />
              <HiMagnifyingGlass className="inline  mx-2 text-4" />
            </div>
            <div className="flex">
              <div className="w-[77px] h-[36px] p-2 flex mr-6 border-md  rounded-full border-2 ">
                <LuSettings2 className="inline" />
                <span className="inline text-sm mx-1"> Filter </span>
              </div>
              <div className="flex">
                <SelectOption className="w-[189x] h-[36px] p-2 flex  border-md  rounded-full border-2" />
              </div>
            </div>
          </div>
        </div>
        {/* Table  */}
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="mr-4">
            <StudentsTable/>
            <div className="flex justify-between">
              <span className="w-full mt-2 inline text-sm text-primary-foreground">
                Showing 1 - {8} out of {24}
              </span>
              <Paggination />
            </div>
          </div>
          <div className="w-auto">
            <ClassPlacement />
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
