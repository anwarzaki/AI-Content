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
        const fetchCourse = async () => {
            try {
                const resolvedParams = await params; // Wait for params to resolve
                const courseId = resolvedParams?.courseId;

                if (courseId) {
                    const result = await db
                        .select()
                        .from(CourseList)
                        .where(eq(CourseList.courseId, courseId));

                    console.log("Fetched course result:", result);
                    setCourse(result[0] || null);
                }
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };

        fetchCourse();
    }, [params]); // Add params to the dependency array

    return (
        <div>
            <Header />
            <div className="p-10 px-10 md:px-20 lg:px-44">
                {course ? (
                    <>
                        <CourseBasicInfo course={course} />
                        <CourseDetail course={course} />
                        <ChapterList course={course} />
                    </>
                ) : (
                    <div className="flex items-center justify-center h-40">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                            <p className="text-gray-700 font-medium">Loading course details...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Course;
