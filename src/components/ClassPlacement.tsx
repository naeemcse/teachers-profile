import React from 'react';
import Calender from '@/components/Calender';

const ClassPlacement = () => {
    return (
        <div className='rounded-3xl border-2 m-6 p-4'>
            <h1 className='m-2 text-base text-primary'> Class Placement  </h1>
            <p className='m-2 text-[#6F6F6F] text-base'> Class no: 1 </p>
            <p className='m-2 text-[#6F6F6F] text-base'> Class Schedule: </p>
            <p className='m-2 text-[#6F6F6F] text-base'> Class Time:</p>

            <Calender/>
        </div>
    );
};

export default ClassPlacement;