'use client';   
import Image from 'next/image';
import React from 'react';
import { FaBook } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import DropDownOption from './DropDownOption';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { CiDumbbell } from "react-icons/ci";

const CourseCard = ({ course, refreshData, displayUser = false }) => {

    const handleOnDelete = async () => {
        const resp = await db
            .delete(CourseList)
            .where(eq(CourseList.id, course?.id))
            .returning({ id: CourseList.id });

        if (resp) {
            refreshData();
        }
    };

    return (
        <div className="shadow-sm rounded-lg border p-2 hover:scale-105 transition-all cursor-pointer">
            <Link href={`/course/${course?.courseId}`}>
                <Image
                    src={course?.courseBanner}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-lg"
                    alt={course?.courseName || "Course banner image"} // Default text if courseName is not available
                />
            </Link>
            <div className="p-2">
                <h2 className="font-medium text-md text-black flex items-center justify-between">
                    {course?.courseOutput?.course_name}
                    <DropDownOption handleOnDelete={handleOnDelete}>
                        <FaEllipsisVertical />
                    </DropDownOption>
                </h2>
                <p className="text-sm text-gray-400 my-1"> {course?.category} </p>
                <div className="flex items-center justify-between">
                    <h2 className="flex gap-2 items-center p-1 bg-[rgb(40,150,205,.6)] text-primary text-sm rounded-sm">
                        <FaBook /> {course?.courseOutput?.no_of_chapters} Chapters
                    </h2>
                    <h2 className="flex gap-2 items-center p-1 bg-[rgb(40,150,205,.6)] text-primary text-sm rounded-sm">
                        <CiDumbbell /> {course?.level} 
                    </h2>
                </div>
                {displayUser && (
                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className='text-sm'>{course?.userName}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseCard;
