"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../configs/db";
import { CourseList } from "../../../../../configs/schema";
import { eq } from "drizzle-orm";

const CourseStartPage = ({ params }) => {
    const [courseId, setCourseId] = useState(null); 

    useEffect(() => {
        const resolveParams = async () => {
            const resolvedParams = await params; // Await params if it's a promise
            setCourseId(resolvedParams?.courseId);
        };

        resolveParams();
    }, [params]);

    useEffect(() => {
        if (courseId) {
            getCourse(courseId);
        }
    }, [courseId]);

    const getCourse = async (courseId) => {
        try {
            const result = await db
                .select()
                .from(CourseList)
                .where(eq(CourseList.courseId, courseId));

            console.log(result);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    return <div>Course Start Page</div>;
};

export default CourseStartPage;
