import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import  Avater from "@/components/Avater"
   
  const students = [
    {
      id: "01",
      photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
      roll: "OKC1122334",
      name: "Najmul Islam",
      batch: "Karate Course 22041"
    },
    {
      id: "02",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      roll: "XYZ987654",
      name: "John Doe",
      batch: "Yoga Class 22042"
    },
    {
      id: "03",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      roll: "ABC123456",
      name: "Jane Smith",
      batch: "Zumba Dance 22043"
    },
    {
      id: "04",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      roll: "DEF654321",
      name: "Michael Johnson",
      batch: "Swimming Class 22044"
    },
    {
      id: "05",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      roll: "GHI789012",
      name: "Emily Wilson",
      batch: "Boxing Training 22045"
    },
    {
      id: "06",
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      roll: "JKL543210",
      name: "David Brown",
      batch: "Martial Arts 22046"
    },
    {
      id: "07",
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
      roll: "MNO098765",
      name: "Emma Taylor",
      batch: "Pilates Class 22047"
    },
    {
      id: "08",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
      roll: "PQR456789",
      name: "Christopher Martinez",
      batch: "Kickboxing 22048"
    },
    {
      id: "09",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      roll: "STU321098",
      name: "Jessica Anderson",
      batch: "Aerobics 22049"
    },
    {
      id: "10",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
      roll: "VWX654321",
      name: "Kevin Garcia",
      batch: "Judo Training 22050"
    },
    // {
    //   id: "11",
    //   photo: "https://randomuser.me/api/portraits/women/10.jpg",
    //   roll: "YZA789012",
    //   name: "Sophia Hernandez",
    //   batch: "Tai Chi 22051"
    // },
    // {
    //   id: "12",
    //   photo: "https://randomuser.me/api/portraits/men/11.jpg",
    //   roll: "BCD123456",
    //   name: "Daniel Lewis",
    //   batch: "Capoeira Class 22052"
    // },
    // {
    //   id: "13",
    //   photo: "https://randomuser.me/api/portraits/women/12.jpg",
    //   roll: "EFG654321",
    //   name: "Olivia Clark",
    //   batch: "Muay Thai 22053"
    // },
    // {
    //   id: "14",
    //   photo: "https://randomuser.me/api/portraits/men/13.jpg",
    //   roll: "HIJ789012",
    //   name: "Alexander Scott",
    //   batch: "Salsa Dance 22054"
    // },
    // {
    //   id: "15",
    //   photo: "https://randomuser.me/api/portraits/women/14.jpg",
    //   roll: "KLM321098",
    //   name: "Isabella Adams",
    //   batch: "Gymnastics 22055"
    // },
    // {
    //   id: "16",
    //   photo: "https://randomuser.me/api/portraits/men/15.jpg",
    //   roll: "NOP654321",
    //   name: "Matthew Turner",
    //   batch: "Karate Course 22056"
    // },
    // {
    //   id: "17",
    //   photo: "https://randomuser.me/api/portraits/women/16.jpg",
    //   roll: "QRS987654",
    //   name: "Ava Campbell",
    //   batch: "Yoga Class 22057"
    // },
    // {
    //   id: "18",
    //   photo: "https://randomuser.me/api/portraits/men/17.jpg",
    //   roll: "TUV123456",
    //   name: "James Baker",
    //   batch: "Zumba Dance 22058"
    // },
    // {
    //   id: "19",
    //   photo: "https://randomuser.me/api/portraits/women/18.jpg",
    //   roll: "WXY654321",
    //   name: "Mia Wright",
    //   batch: "Swimming Class 22059"
    // },
    // {
    //   id: "20",
    //   photo: "https://randomuser.me/api/portraits/men/19.jpg",
    //   roll: "YZA987654",
    //   name: "Ethan King",
    //   batch: "Boxing Training 22060"
    // }
  ];
  
const CourseTable = () => {
    return (
        <Table className='lg:w-full text-[#6F6F6F] text-base bg-whitebg md:overflow-x-scroll'>
      {/* <TableCaption>A list of your recent students.</TableCaption> */}
      <TableHeader>
        <TableRow className='bg-[#E9E9EF] text-primary font-bold'>
          <TableHead className="">No</TableHead>
          <TableHead>Profile
          
          </TableHead>
          <TableHead>Roll </TableHead>
          <TableHead className=""> Name </TableHead>
          <TableHead className=""> Batch </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium"> {item.id}</TableCell>
            <TableCell>
                 <Avater name={item.name} photo={item.photo}/>
            </TableCell>
            <TableCell>{item.roll} </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.batch}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
   
    );
};

export default CourseTable;