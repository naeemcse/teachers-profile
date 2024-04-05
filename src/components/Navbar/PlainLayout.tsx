import React from 'react';
import SideNav from "@/components/Navbar/SideNav";
import Navbar from "@/components/Navbar/Navbar";
const PlainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <>
        <div>
            <div> 
            <Navbar/>
            </div>
        <div className="flex"> 
            <div> 
                 <SideNav/>
            </div>
            <div>
                {children}
            </div>
        </div>
        </div>
          
        </>
    );
};

export default PlainLayout;