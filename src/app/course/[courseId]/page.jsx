"use client";
import React, { useEffect, useState } from "react"; 
import { db } from "../../../../configs/db";
import { CourseList } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import Header from "@/app/_components/Header";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";

function Course({ params }) {
    const [course, setCourse] = useState(null); 

    useEffect(() => {
        if (params?.courseId) {
            getCourse(params.courseId);
        }
    }, [params]);

    const getCourse = async (courseId) => {
        try {
            const result = await db
                .select()
                .from(CourseList)
                .where(eq(CourseList.courseId, courseId));

            console.log("Fetched course result:", result);
            setCourse(result[0] || null); 
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    return (
        <div>
        <Header />
        <div className="p-10 px-10 md:px-20 lg:px-44">
            <CourseBasicInfo course={course} />
            <CourseDetail course={course} />
            <ChapterList course={course} />
        </div>
        </div>
    );
}

export default Course;
