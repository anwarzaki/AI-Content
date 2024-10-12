import React, { useContext } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const TopicDescription = () => {
  const { UserCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* input area */}
      <div className="mt-5">
        <label>
          Write the topic for which you want to generate a course (Web
          Development, AI etc)
        </label>
        <Input
          placeholder="Topic"
          onChange={(e) => handleCategoryChange("topic", e.target.value)}
          defaultValue={UserCourseInput?.topic}
        />
      </div>

      {/* topic description */}
      <div className="mt-5">
        <label>Tell us more about your course (optional) </label>
        <Textarea
          placeholder="About your course"
          onChange={(e) => handleCategoryChange("description", e.target.value)}
          defaultValue={UserCourseInput?.description}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
