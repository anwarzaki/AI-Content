"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../configs/db";
import { CourseList } from "../../../../configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";

const PageLayout = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    if (params && user) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log("Result is: ", result);
  };

  // const generateChapterContent = () =>{
  //   const chapter = course?.courseOutput?.
  // }

  return (
    <div className="mt-5 px-7 md:px-20 lg:px-4">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      {/* Additional layout and components */}

      {/* basic info */}
      <CourseBasicInfo course={course} />
      {/* course details */}
      <CourseDetail course={course} />
      {/* list of lesson */}
      <ChapterList course={course} />

      {/* generate button */}
      <div className="my-5" onClick={generateChapterContent}>
        <Button>Generate Chapter Content</Button>
      </div>
    </div>
  );
};

export default PageLayout;
