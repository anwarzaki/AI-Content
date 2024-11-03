"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../configs/db";
import { Chapters, CourseList } from "../../../../../configs/schema";
import { eq } from "drizzle-orm";
import ChapterListCard from "@/app/course/[courseId]/start/_components/ChapterListCard";
import ChapterContent from "@/app/course/[courseId]/start/_components/ChapterContent";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";

const CourseStartPage = ({ params }) => {
    const [courseId, setCourseId] = useState(null);
    const [course, setCourse] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [chapterContent, setChapterContent] = useState(null);

    useEffect(() => {
        const resolveParams = async () => {
            const resolvedParams = await params;
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
            setCourse(result[0]);
            console.log(result);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
     };

     //    Chapters Content

     const getSelectedChapterContent = async (chapterId) => {
            try {
                const result = await db
                    .select()
                    .from(Chapters)
                    .where(eq(Chapters.chapterId, chapterId));
                
                if (result.length > 0) {
                    console.log("Chapter Content:", result[0]); // Log the actual chapter content
                    // setSelectedChapter(result[0]); // Set the selected chapter's content
                    setChapterContent(result[0]);
                } else {
                    console.warn("No content found for chapterId:", chapterId);
                }
            } catch (error) {
                console.error("Error fetching chapter content:", error);
            }
        };

     return (
        <div className="flex">
            {/* Chapter list sidebar */}
            <div className="md:w-72 hidden md:block h-screen shadow-md bg-[#FAFAFA]">
                <h2 className="font-lg text-lg bg-[rgb(40,204,205)] text-center p-1">
                    {course?.courseOutput?.course_name}
                </h2>
                <div>
                    {course?.courseOutput?.chapters?.map((chapter, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer hover:bg-[rgba(40,244,205,0.1)] ${
                                selectedChapter?.chapter_name === chapter.chapter_name
                                    ? "bg-[rgba(40,244,205,0.2)]"
                                    : ""
                            }`}
                            onClick={() =>{ setSelectedChapter(chapter);
                                getSelectedChapterContent(index);
                            }}
                        >
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className=" p-4">
                <ChapterContent chapter={selectedChapter}  content ={setChapterContent}/>
            </div>
        </div>
    );
};

export default CourseStartPage;

//hnji