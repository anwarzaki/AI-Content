// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useContext, useEffect, useState } from "react";
// import { BiSolidCategory } from "react-icons/bi";
// import { HiLightBulb } from "react-icons/hi";
// import { HiClipboardDocumentCheck } from "react-icons/hi2";
// import SelectCategory from "../create-course/_components/SelectCategory";
// import TopicDescription from "../create-course/_components/TopicDescription";
// import SelectOption from "../create-course/_components/SelectOption";
// import { UserInputContext } from "../_context/UserInputContext";
// import { GenerateCourseLayout_AI } from "../../../configs/AiModel.jsx";
// import LoadingDialog from "./_components/LoadingDialog";
// import { useUser } from "@clerk/nextjs";
// import { v4 as uuidv4 } from "uuid";
// import { db } from "../../../configs/db.jsx";
// // import * as AlertDialog from "@radix-ui/react-alert-dialog";
// // import { uuid } from "drizzle-orm/pg-core";
// import { CourseList } from "../../../configs/schema";
// import { useRouter } from "next/navigation";

// export default function Page() {
//   const streppOptions = [
//     {
//       id: 1,
//       name: "Category",
//       icon: <BiSolidCategory />,
//     },
//     {
//       id: 2,
//       name: "Topic & Desc",
//       icon: <HiLightBulb />,
//     },
//     {
//       id: 3,
//       name: "Category",
//       icon: <HiClipboardDocumentCheck />,
//     },
//   ];

//   const { UserCourseInput } = useContext(UserInputContext); // No need to setUserCourseInput if not used
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const { user } = useUser();
//   const router = useRouter();

//   const GenerateCourseLayout = async () => {
//     try {
//       setLoading(true);

//       const BASIC_PROMPT =
//         "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: ";

//       const USER_INPUT_PROMPT = `Category: ${
//         UserCourseInput?.category || ""
//       }, Topic: ${UserCourseInput?.topic || ""}, Level: ${
//         UserCourseInput?.level || ""
//       }, Duration: ${UserCourseInput?.duration || ""}, NoOfChapter: ${
//         UserCourseInput?.noOfChapter || ""
//       }, in JSON format`;

//       const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
//       console.log("Sending prompt:", FINAL_PROMPT);

//       // Check if sendMessage is working and log the result
//       const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
//       console.log("AI result:", result);

//       // Check if result.response exists and is valid
//       if (result?.response) {
//         // Try to get the text response
//         const responseText = await result.response.text();
//         console.log("AI response text:", responseText);

//         if (responseText) {
//           try {
//             // Parse response text
//             const courseLayout = JSON.parse(responseText);
//             console.log("Parsed course layout:", courseLayout);

//             // Save the parsed data to the database
//             SaveCourseLayoutInDb(courseLayout); // Move this inside the try block
//           } catch (jsonError) {
//             console.error("Error parsing JSON response:", jsonError);
//           }
//         } else {
//           console.error("AI model returned an empty response.");
//         }
//       } else {
//         console.error("No response object from AI.");
//       }
//     } catch (error) {
//       console.error("Error generating course layout:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const SaveCourseLayoutInDb = async (courseLayout) => {
//     try {
//       // Ensure the user object is valid
//       if (!user || !user.primaryEmailAddress?.emailAddress) {
//         throw new Error("User's email address is missing.");
//       }

//       var id = uuidv4();
//       setLoading(true);

//       // Insert into database here the result was assigned before
//        await db.insert(CourseList).values({
//               courseId: id,
//               name: UserCourseInput?.topic,
//               level: UserCourseInput?.level,
//               category: UserCourseInput?.category,
//               courseOutput: courseLayout, // This is coming from AI response
//               createdBy: user?.primaryEmailAddress?.emailAddress, // Ensure this is not null
//               userName: user?.fullName,
//               userProfileImgage: user?.imageUrl,
//       });

//       console.log("Course layout saved to database successfully.");
//     } catch (error) {
//       console.error("Error saving course layout to the database:", error);
//     } finally {
//       setLoading(false);
//     }
//     router.replace("/create-course/" + id);
//   };

//   useEffect(() => {
//     console.log(UserCourseInput);
//   }, [UserCourseInput]);

//   return (
//     <>
//       <div className="flex flex-col items-center p-5">
//         <h2 className="text-4xl text-[rgb(13,204,205)] font-medium">
//           CREATE COURSES
//         </h2>
//         <div className="mt-5 flex items-center">
//           {streppOptions.map((item, index) => (
//             <div key={index} className="flex items-center">
//               <div className="flex flex-col items-center w-[50px] md:w-[100px]">
//                 <div
//                   className={`text-2xl p-3 rounded-full ${
//                     activeIndex >= index
//                       ? "bg-[rgb(40,204,205)] text-white"
//                       : "bg-gray-200 text-gray-500"
//                   }`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h2 className="hidden md:block md:text-sm">{item.name}</h2>
//               </div>
//               {index < streppOptions.length - 1 && (
//                 <div
//                   className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full ${
//                     activeIndex > index ? "bg-[rgb(50,204,205)]" : "bg-gray-300"
//                   }`}
//                 ></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="px-10 md:px-20 lg:px-44 mt-10">
//         {/* component */}
//         {activeIndex === 0 ? (
//           <SelectCategory />
//         ) : activeIndex === 1 ? (
//           <TopicDescription />
//         ) : (
//           <SelectOption />
//         )}
//         {/* next & prev Button */}
//         <div className="flex justify-between mt-10">
//           <Button
//             variant={activeIndex === 0 ? "disabled" : "outline"}
//             onClick={() => setActiveIndex(activeIndex - 1)}
//           >
//             previous
//           </Button>
//           {activeIndex < 2 && (
//             <Button onClick={() => setActiveIndex(activeIndex + 1)}>
//               next
//             </Button>
//           )}
//           {activeIndex === 2 && (
//             <Button onClick={GenerateCourseLayout}>generate course</Button>
//           )}
//         </div>
//         <LoadingDialog loading={loading} />
//       </div>
//     </>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../configs/db";
import { CourseList } from "../../../configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export default function Page() {
  const { params } = useParams();
  const { user } = useUser();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
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

    if (params && user) {
      fetchCourse();
    }
  }, [params, user]); // No dependency issue here

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          {/* Render other course details here */}
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
}
