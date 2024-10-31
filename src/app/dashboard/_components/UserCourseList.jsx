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
        const result = await db
            .select()
            .from(CourseList)
            .where(eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress));

        console.log(result);
        setCourseList(result);
    };

    return (
        <div className='mt-10'>
            <h2 className='font-medium text-xl my-5'>My Courses..</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {courseList.map((course, index) => (
                    <CourseCard key={index} course={course} refreshData={getUserCourses} />
                ))}
            </div>
        </div>
    );
};

export default UserCourseList;