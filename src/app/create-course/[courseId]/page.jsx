"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../configs/db";
import { Chapters, CourseList } from "../../../../configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateCourseLayout_AI } from "../../../../configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "../../../../configs/service";
import { useRouter } from "next/navigation";

const PageLayout = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const generateChapterContent = async () => {
    if (!course || !course.courseOutput?.chapters) {
      console.warn("No chapters found in course output");
      return;
    }

    setLoading(true);
    const chapters = course.courseOutput.chapters;
    console.log("Chapters:", chapters);

    try {
      for (const [index, chapter] of chapters.entries()) {
        const PROMPT = `Explain the concept in detail on Topic: ${course.name}, Chapter: ${chapter.chapter_name} in JSON format with list of arrays with fields as title, description in detail, code example (Code field <precode> if applicable)`;
        console.log("Prompt:", PROMPT);

        let videoId = '';

        try {
          // Get AI response
          const result = await GenerateCourseLayout_AI.sendMessage(PROMPT);
          console.log(await result?.response?.text());
          const content = JSON.parse(result?.response?.text());
          console.log("Content is here bro:", content);

          // Generate video
          const videoResp = await service.getVideos(`${course.name}: ${chapter.chapter_name}`);
          videoId = videoResp[0]?.id?.videoId || '';
          console.log("Video ID:", videoId);

          // Save to DB
          await db.insert(Chapters).values({
            courseId: course?.courseId,
            chapterId: index + 1, 
            chapter:content,
            videoId: videoId,
          });
        } catch (error) {
          console.error(`Error processing chapter ${index + 1}:`, error);
        }
      }

      setLoading(false);
      await db.update(CourseList).set({
        published: true,
      })
      router.replace(`/create-course/${course?.courseId}/finish`);
    } catch (error) {
      console.error("Error generating chapter content:", error);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 px-7 md:px-20 lg:px-4">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} />

      {/* Additional layout and components */}

      {/* Basic info */}
      <CourseBasicInfo course={course} />

      {/* Course details */}
      <CourseDetail course={course} />
      
      {/* List of lessons */}
      <ChapterList course={course} />

      {/* Generate button */}
      <div className="my-5">
        <Button onClick={generateChapterContent}>Generate Chapter Content</Button>
      </div>
    </div>
  );
};

export default PageLayout;
