"use client";
import React, { useEffect, useState } from 'react';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import CourseCard from './CourseCard';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';

const UserCourseList = () => {
    const { user } = useUser();
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        if (user) {
            getUserCourses();
        }
    }, [user]);

    const getUserCourses = async () => {
        try {
            const result = await db
                .select()
                .from(CourseList)
                .where(eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress));

            console.log(result);
            setCourseList(result);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    return (
        <div className='mt-10'>
            <h2 className='font-medium text-xl my-5'>MY COURSES</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {courseList?.length > 0 ? courseList.map((course, index) => (
                    <CourseCard key={index} course={course} refreshData={getUserCourses} />
                )) : [1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[250px]'>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserCourseList;