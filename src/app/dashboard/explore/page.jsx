'use client';
import React, { useEffect, useState } from "react";
import { CourseList } from "../../../../configs/schema";
import CourseCard from "../_components/CourseCard";
import { db } from "../../../../configs/db";
import { Button } from "@/components/ui/button";

const Explore = () => {
  const [courseList, setCourseList] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getAllCourses = async () => {
      const result = await db
        .select()
        .from(CourseList)
        .limit(9)
        .offset(page * 9);
      setCourseList(result);
      console.log(result);
    };

    getAllCourses();
  }, [page]);  

  return (
    <div>
      <h1 className="font-bold text-3xl text-black">Explore More Project</h1>
      <p className="text-black">Explore more project build with AI by other users</p>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {courseList?.map((course, index) => (
          <div key={index}>
            <CourseCard course={course} displayUser={true} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-5">
        {page !== 0 && (
          <Button onClick={() => setPage(page - 1)}>Previous</Button>
        )}
        <Button onClick={() => setPage(page + 1)}>Next Page</Button>
      </div>
    </div>
  );
};

export default Explore;

