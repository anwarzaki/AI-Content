import React from "react";
import { IoBarbellSharp } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

const CourseDetail = ({ course }) => {
  return (
    <div className="border p-6 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        <div className="flex gap-2 items-center">
          <IoBarbellSharp className="text-2xl" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">{course?.level}</h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <LuClock className="text-2xl" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.duration}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <IoBookOutline className="text-2xl" />
          <div>
            <h2 className="text-xs text-gray-500">No of Chapters</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.no_of_chapters}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineOndemandVideo  className="text-2xl" />
          <div>
            <h2 className="text-xs text-gray-500">Video Include?</h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
