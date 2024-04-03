import React from 'react';
import Paggination from '@/components/Paggination';
import CourseTable from '@/components/CourseTable';
import { Input } from "@/components/ui/input"
import { HiMagnifyingGlass } from "react-icons/hi2";

const Batches = () => {
    return (
        <>
        <div className='bg-[#FEFEFE] rounded-lg max-w-[1066px] mx-auto p-4 shadow shadow-md '>
            {/* Search and Filter option  */}
            <div className='flex'>
                    <h1 className='uppercase text-base text-[#565656] font-bold'> SHITO-RYU KARATE White Belt </h1>
                    <div className=""> 
                    <Input type="text" className='inline' placeholder="Search anything here.." />
                    <HiMagnifyingGlass className='inline'/>
                     </div>
            </div>
            <h1>Batch</h1>
            <CourseTable/>
            <Paggination/>
        </div>   
        </>
    );
};

export default Batches;