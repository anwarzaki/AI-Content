import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserInputContext } from "@/app/_context/UserInputContext";

export default function SelectOption() {
  const { UserCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleOptionChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className=" py-5">
      <div className="max-w-4xl mx-auto px-10 md:px-20 lg:px-44">
        {/* <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Course Details</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Difficulty Level */}
          <div className="text-black">
            <label className="block text-sm font-medium mb-2">
              Difficulty Level
            </label>
            <Select onValueChange={(value)=>handleOptionChange("level",value)}
              defaultValue={UserCourseInput?.level}
              >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advance">Advance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Duration */}
          <div className="text-black">
            <label className="block text-sm font-medium   mb-2">
              Course Duration
            </label>
            <Select onValueChange={(value)=>handleOptionChange("duration",value)}
              defaultValue={UserCourseInput?.duration}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
                <SelectItem value="3 hours or more">3 hours or more</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Add Video */}
          <div className="text-black">
            <label className="block text-sm font-medium   mb-2">
              Add Video
            </label>
            <Select onValueChange={(value)=>handleOptionChange("displayVideo",value)}
              defaultValue={UserCourseInput?.displayVideo}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Number of Chapters */}
          <div className="text-black">
            <label className="block text-sm font-medium   mb-2">
              Number of Chapters
            </label>
            <Input
              type="number"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter number of chapters"
              onChange={(e)=>handleOptionChange("noOfChapter",e.target.value)}
              defaultValue={UserCourseInput?.noOfChapter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
