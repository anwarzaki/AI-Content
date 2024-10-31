import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { FcPuzzle } from "react-icons/fc";
import { storage } from "../../../../../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "../../../../../configs/db";
import { CourseList } from "../../../../../configs/schema";
import { eq, set } from "drizzle-orm";

const CourseBasicInfo = ({ course }) => {
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if(course){
      setSelectedFile(course?.courseBanner);
    }
  },[course]);

  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    const fileName = Date.now() + ".jpg";
    const StorageRef = ref(storage, "course-generator/" + fileName);
    await uploadBytes(StorageRef, file)
      .then((snapshot) => {
        console.log("pic uploaded successfully..");
      })
      .then((resp) => {
        getDownloadURL(StorageRef).then(async (downloadUrl) => {
          console.log(downloadUrl);
          await db
            .update(CourseList)
            .set({
              courseBanner: downloadUrl,
            })
            .where(eq(CourseList.id, course?.id));
        });
      });
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-3xl">
            {course?.courseOutput?.course_name}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {course?.courseOutput?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-center text-primary">
            <FcPuzzle /> {course?.category}
          </h2>
          <Button className="w-full mt-5">start</Button>
        </div>
        <div>
          <label htmlFor="upload-image">
            <Image
              src={selectedFile ? selectedFile : "/placeholders.jpg"}
              width={250}
              height={100}
              className="w-full rounded-xl h-[200px] object-cover cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="upload-image"
            className="opacity-0"
            onChange={onFileSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
