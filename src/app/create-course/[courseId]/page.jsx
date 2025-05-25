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

  const GetCourse = async () => {
    try {
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
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  useEffect(() => {
    if (params && user) {
      GetCourse();
    }
  }, [params, user]);

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
        const PROMPT = `Create JSON array for ${course.name}, ${chapter.chapter_name} with format:[{"title": string, "description": string, "code_example": "<precode>code</precode>"}]`;
        console.log("new Prompt:", PROMPT);

        let videoId = "";

        try {
          const result = await GenerateCourseLayout_AI.sendMessage(PROMPT);
          const content = JSON.parse(result?.response?.text());
          console.log("Content:", content);

          const videoResp = await service.getVideos(`${course.name}: ${chapter.chapter_name}`);
          videoId = videoResp[0]?.id?.videoId || "";
          console.log("Video ID:", videoId);

          await db.insert(Chapters).values({
            courseId: course?.courseId,
            chapterId: index + 1,
            chapter: content,
            videoId: videoId,
          });
        } catch (error) {
          console.error(`Error processing chapter ${index + 1}:`, error);
        }
      }

      setLoading(false);
      await db.update(CourseList).set({
        published: true,
      });
      router.replace(`/create-course/${course?.courseId}/finish`);
    } catch (error) {
      console.error("Error generating chapter content:", error);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 px-7 md:px-20 lg:px-4">
      <h2 className="font-bold text-center text-black text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} />

      <CourseBasicInfo course={course} />
      <CourseDetail course={course} />
      <ChapterList course={course} />

      <div className="my-5">
        <Button onClick={generateChapterContent}>Generate Chapter Content</Button>
      </div>
    </div>
  );
};

export default PageLayout;
