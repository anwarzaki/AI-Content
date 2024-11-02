'use client';
import React, { useEffect } from "react";
import { db } from "../../../../../configs/db";
import { CourseList } from "../../../../../configs/schema";
import { eq } from "drizzle-orm";

const CourseStartPage = ({params}) => {

    useEffect(()=>{
        getCourse();
    },[]);

    const getCourse = async()=>{
        const result = await db.select().from(CourseList)
        .where(eq(CourseList?.courseId,params?.courseId));

        console.log(result);
    }
  return <div>Course Start Page</div>;
};
export default CourseStartPage;