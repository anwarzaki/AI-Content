
"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../configs/db";
import { Chapters, CourseList } from "../../../../../configs/schema";
import { and, eq } from "drizzle-orm";
import ChapterListCard from "@/app/course/[courseId]/start/_components/ChapterListCard";
import ChapterContent from "@/app/course/[courseId]/start/_components/ChapterContent";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";

const CourseStartPage = ({ params }) => {
    // accessing course from courseId
    const [courseId, setCourseId] = useState(null);
    // accessing chapters chapter_name
    const [course, setCourse] = useState(null);
    // accessing chapter content
    const [selectedChapter, setSelectedChapter] = useState('');
    const [chapterContent, setChapterContent] = useState('');

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

    const getCourse = async () => {
        try {
            const result = await db
                .select()
                .from(CourseList)
                .where(eq(CourseList.courseId, params.courseId));
            setCourse(result[0]);
            // console.log(result);
            console.log('new course',result[0]);    
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    const getSelectedChapterContent = async (chapterId) => {
        console.log("ChapterId of props is:", chapterId);
        
        try {
            const result = await db
                .select()
                .from(Chapters)
                .where(and(eq(Chapters.chapterId, chapterId),eq(Chapters.courseId, courseId)));
                setChapterContent(result[0]);
                console.log('chapter result is here', result[0]);
            
            // if (result.length > 0) {
            //     setChapterContent(result[0]); // Set the fetched chapter content
            // } else {
            //     console.warn("No content found for chapterId:", chapterId);
            // }
        } catch (error) {
            console.error("Error fetching chapter content:", error);
        }
    };

    return (
        <div className="flex">
            {/* Chapter list sidebar */}
            <div className=" fixed top-0 left-0 h-full z-10 p-4 md:w-72 hidden md:block h-screen  shadow-md bg-[#FAFAFA]">
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
                            onClick={() => {
                                setSelectedChapter(chapter);
                                getSelectedChapterContent(index+1);
                            }}
                        >
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="p-4 md:ml-64">
                <ChapterContent chapter={selectedChapter} content={chapterContent} />
            </div>
        </div>
    );
};

export default CourseStartPage;
 