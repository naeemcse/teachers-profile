import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   

const Avater = ({photo,name="photo"}:{photo:string , name :string}) => {
    return (
        <Avatar>
      <AvatarImage src={photo} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
    );
};

export default Avater;