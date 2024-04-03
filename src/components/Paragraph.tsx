'use client'
import React from 'react';
import { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";


const Paragraph = ({ text, maxLength }:{text:string,maxLength:number}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
      };
    return (
        <div>
             {expanded ? (
        <p className='text-justify'>{text}</p>
      ) : (
        <p className='text-justify text-[#565656]'>{text.slice(0, maxLength)}{text.length > maxLength && '... '}
          <a onClick={toggleExpanded}><span className="text-primary font-bold hover:cursor-pointer"> More info <FiArrowUpRight className='inline' /></span> </a>
        </p>
      )}
        </div>
    );
};

export default Paragraph;