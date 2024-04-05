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
   
  const course = [
    {
      id: "1",
      batch: "Karate Course 22041",
      date: "6th Feb, 2024",
      classStart: "10:00 am",
      classEnd: "12:00 pm"
    },
    {
      id: "2",
      batch: "Yoga Class 22042",
      date: "7th Feb, 2024",
      classStart: "9:00 am",
      classEnd: "11:00 am"
    },
    {
      id: "3",
      batch: "Zumba Dance 22043",
      date: "8th Feb, 2024",
      classStart: "6:00 pm",
      classEnd: "8:00 pm"
    },
    {
      id: "4",
      batch: "Swimming Class 22044",
      date: "9th Feb, 2024",
      classStart: "3:00 pm",
      classEnd: "5:00 pm"
    },
    {
      id: "5",
      batch: "Boxing Training 22045",
      date: "10th Feb, 2024",
      classStart: "4:00 pm",
      classEnd: "6:00 pm"
    },
    {
      id: "6",
      batch: "Martial Arts 22046",
      date: "11th Feb, 2024",
      classStart: "7:00 am",
      classEnd: "9:00 am"
    },
    {
      id: "7",
      batch: "Pilates Class 22047",
      date: "12th Feb, 2024",
      classStart: "11:00 am",
      classEnd: "1:00 pm"
    },
    {
      id: "8",
      batch: "Kickboxing 22048",
      date: "13th Feb, 2024",
      classStart: "5:00 pm",
      classEnd: "7:00 pm"
    },
    {
      id: "9",
      batch: "Aerobics 22049",
      date: "14th Feb, 2024",
      classStart: "8:00 am",
      classEnd: "10:00 am"
    },
    {
      id: "10",
      batch: "Judo Training 22050",
      date: "15th Feb, 2024",
      classStart: "1:00 pm",
      classEnd: "3:00 pm"
    }
  ];
  
const CourseTable = () => {
    return (
        <Table className='w-full text-[#6F6F6F] text-base bg-whitebg md:overflow-x-scroll'>
      {/* <TableCaption>A list of your recent course.</TableCaption> */}
      <TableHeader>
        <TableRow className='bg-[#E9E9EF] text-primary font-bold'>
          <TableHead className="">No</TableHead>
          <TableHead>Batch</TableHead>
          <TableHead>Date </TableHead>
          <TableHead className="">Class Sart</TableHead>
          <TableHead className="">Class End</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {course.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.batch}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.classStart}</TableCell>
            <TableCell>{item.classEnd}</TableCell>
            </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
   
    );
};

export default CourseTable;